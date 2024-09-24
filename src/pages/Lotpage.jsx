import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/Lotpage.module.css";
import LotDisplay from '../components/LotDisplay/LotDisplay';
import LotClosedPopup from "../components/LotClosedPopup/LotClosedPopup";

const Lot = () => {
  const [lotEnded, setLotEnded] = useState(false);
  const handleClosePopup = () => {
    setLotEnded(false);
  };


  /*
  var lot = {
    id: 0,
    img_srcs: [
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    ],
    title: "My new lot",
    max_bid: 300,
    end_date: "2025-09-09T13:35:15+04:00",
    n_bids: 20,
    opened: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat commodo metus sed vehicula. \nNulla vitae turpis consectetur, feugiat arcu a, scelerisque metus. \nInteger at magna nisi. Aliquam nec erat semper, semper lacus eget, aliquam erat. Nam quis neque id lorem tristique imperdiet. \nProin viverra sem eleifend, iaculis lacus in, bibendum libero. Suspendisse elementum quis tortor id porta. Phasellus varius nulla non mattis congue. Vestibulum tincidunt in erat ut laoreet.  Nunc iaculis, magna et semper elementum, dolor erat placerat nisi, vel pulvinar augue urna nec sem. Donec rutrum lectus non pellentesque viverra. Aliquam auctor pretium urna, ac faucibus orci porttitor et. \nMauris et dolor venenatis, facilisis turpis sit amet, hendrerit lorem. Integer imperdiet ultricies nisi, in ultricies nulla mattis vitae. Maecenas venenatis posuere cursus. Nulla sollicitudin lobortis aliquet. Mauris a ex aliquam, cursus lectus ac, fringilla ex. Fusce nec sollicitudin enim. Nam egestas sem sit amet nibh bibendum venenatis. Sed tincidunt porttitor ex, sed eleifend velit. Nullam aliquet, tortor id iaculis ultrices, orci felis scelerisque dui, in tristique eros magna in ante. \nCras eu purus quis leo aliquam sollicitudin. Maecenas eu iaculis massa. Curabitur dictum augue vitae scelerisque egestas. In ornare ante id facilisis pulvinar. In a elit enim. Nulla finibus porta lorem volutpat tempor. Donec lacinia lacus sit amet leo interdum blandit pulvinar et nibh. Vestibulum malesuada commodo enim sed convallis. \nSuspendisse lacinia, tellus id luctus venenatis, ante ipsum volutpat eros, sit amet imperdiet nisi lacus id leo. Morbi leo elit, convallis vel varius vel, fringilla a leo. Integer elementum dui et molestie rhoncus.",
    labels: ["11 January", "12 January", "13 January"],
    bids_perday: [11, 18, 20],
    max_bid_perday: [45, 400, 40]
  };

  
*/

  // Fetch initial lot data
  const [lot, setLot] = useState(null);
  const { id } = useParams();  
  useEffect(() => {
    fetch(`/api/get-lot-item-state?id=${id}`,{
      method:"GET",
    })
      .then(response => response.json())
      .then(data => {
        setLot(data);
        if (!data.opened) {
          setLotEnded(true);
        }
      })
      .catch(error => console.error('Error fetching lot data:', error));
    }, [id]);

  if (!lot) {
    return <div className={styles.load}>Loading...</div>;
  }

  // Setup WebSocket connection
  useEffect(() => {
    const ws = new WebSocket(`ws://your-websocket-server-url/lot/${id}`);

    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received WebSocket message:', data);
      
      // Update lot data based on WebSocket messages
      setLot((prevLot) => ({
        ...prevLot,
        max_bid: data.max_bid,
        n_bids: data.n_bids,
        end_date: data.end_date,
        opened: data.opened !== undefined ? data.opened : prevLot.opened,
      }));

      if (data.opened === false) {
        setLotEnded(true);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup WebSocket connection when component unmounts
    return () => {
      ws.close();
    };
  }, [id]);

  const handleConfirmClick = () => {
    if ((Number(bid) > props.max_bid) && (props.opened)) {
        // Replace this with your authentication logic to get the token
        const authToken = localStorage.getItem('auth_token'); 
        fetch('/api/post_bid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                amount: Number(bid),
                auction_id: props.id, // Assuming the `id` is passed as a prop
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to place the bid');
            }
            return response.json();
        })
        .then(data => {
            console.log('Bid successfully placed:', data);
            alert('Your bid was successfully placed!');
            // Optionally, update the lot data with the new max bid
            props.onBidSuccess(Number(bid)); 
        })
        .catch(error => {
            console.error('Error placing the bid:', error);
            alert('Failed to place the bid. Please try again.');
        });
    } else {
        console.log('Bid is too low or auction has ended.');
        alert('Your bid is too low or the auction is closed.');
    }
};




  const imgSources = lot?.img_srcs?.length > 0 ? lot.img_srcs : ["https://fundatia.moldcell.md/wp-content/themes/consultix/images/no-image-found-360x250.png"];
  const title = lot?.title?.trim() !== "" ? lot.title : "Untitled Lot";
  const description = lot?.description?.trim() !== "" ? lot.description : "No description available";
  const maxBid = lot?.max_bid > 0 ? lot.max_bid : "No bids yet";
  const nBids = lot?.n_bids >= 0 ? lot.n_bids : 0;
  const opened = lot?.opened ?? false;

  let formattedEndDate = "No end date available";
  if (lot?.end_date) {
    try {
      const date = new Date(lot.end_date);
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
      const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
      const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);
      formattedEndDate = `${formattedDate} ${formattedTime}`;
    } catch (error) {
      formattedEndDate = "Invalid date";
    }
  }

  return (
    <div className={styles.lot}>
      <LotDisplay
        img_src={imgSources || ["https://fundatia.moldcell.md/wp-content/themes/consultix/images/no-image-found-360x250.png"]}
        description={description || "No desription"}
        n_bids={nBids || "No bids yet"}
        title={title || "Untitled Lot"}
        end_date={formattedEndDate || "Invalid date"}
        max_bid={maxBid || "No bids yet"}
        opened={opened || false}
        labels={lot?.labels || []}
        bids_perday={lot?.bids_perday || []}
        max_bid_perday={lot?.max_bid_perday || []} 
        id={id}
        onBidSuccess={(newMaxBid) => setLot(prevLot => ({ ...prevLot, max_bid: newMaxBid }))}
      />

      {lotEnded && !opened && (
        <LotClosedPopup lot={maxBid} onClose={handleClosePopup} />
      )}
    </div>
  );
};



export default Lot;
