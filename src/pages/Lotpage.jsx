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

  // Fetch initial lot data
  const [lot, setLot] = useState({
    opened: false,
    max_bid: 0,
    n_bids: 0,
    img_srcs: [],
    title: '',
    description: '',
    end_date: '',
    labels: [],
    bids_perday: [],
    max_bid_perday: [],
  });
  const { id } = useParams();  
  useEffect(() => {
    fetch(`http://localhost:1169/api/auction/${id}`)
      .then(response => response.json())
      .then(data => {
        setLot(data.auction);
        if (!data.opened) {
          setLotEnded(true);
        }
      })
      .catch(error => console.error('Error fetching lot data:', error));
    }, []);

  if (!lot) {
    return <div className={styles.load}>Loading...</div>;
  }

  // // Setup WebSocket connection
  // useEffect(() => {
  //   const ws = new WebSocket(`ws://your-websocket-server-url/lot/${id}`);

  //   ws.onopen = () => {
  //     console.log('WebSocket connection established');
  //   };

  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log('Received WebSocket message:', data);
      
  //     // Update lot data based on WebSocket messages
  //     setLot((prevLot) => ({
  //       ...prevLot,
  //       max_bid: data.max_bid,
  //       n_bids: data.n_bids,
  //       end_date: data.end_date,
  //       opened: data.opened !== undefined ? data.opened : prevLot.opened,
  //     }));

  //     if (data.opened === false) {
  //       setLotEnded(true);
  //     }
  //   };

  //   ws.onerror = (error) => {
  //     console.error('WebSocket error:', error);
  //   };

  //   ws.onclose = () => {
  //     console.log('WebSocket connection closed');
  //   };

  //   // Cleanup WebSocket connection when component unmounts
  //   return () => {
  //     ws.close();
  //   };
  // }, [id]);


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
