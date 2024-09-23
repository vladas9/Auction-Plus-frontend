import React, { useState } from 'react';
import styles from "../styles/Lotpage.module.css";
import LotDisplay from '../components/LotDisplay/LotDisplay';
import LotClosedPopup from "../components/LotClosedPopup/LotClosedPopup";

const Lot = () => {
  const [lotEnded, setLotEnded] = useState(true);

  const handleClosePopup = () => {
    setLotEnded(false);
  };
  
  const winner = { name: "John Doe" };

  //Example of info about user
  var lot={
    id: 0,
    img_srcs: [
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    ],
    title: "Lot title that is displayed in 2 rows",
    max_bid: 300,
    end_date: "2025-09-09T13:35:15+04:00",
    n_bids: 20,
    opened: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat commodo metus sed vehicula. \nNulla vitae turpis consectetur, feugiat arcu a, scelerisque metus. \nInteger at magna nisi. Aliquam nec erat semper, semper lacus eget, aliquam erat. Nam quis neque id lorem tristique imperdiet. \nProin viverra sem eleifend, iaculis lacus in, bibendum libero. Suspendisse elementum quis tortor id porta. Phasellus varius nulla non mattis congue. Vestibulum tincidunt in erat ut laoreet.  Nunc iaculis, magna et semper elementum, dolor erat placerat nisi, vel pulvinar augue urna nec sem. Donec rutrum lectus non pellentesque viverra. Aliquam auctor pretium urna, ac faucibus orci porttitor et. \nMauris et dolor venenatis, facilisis turpis sit amet, hendrerit lorem. Integer imperdiet ultricies nisi, in ultricies nulla mattis vitae. Maecenas venenatis posuere cursus. Nulla sollicitudin lobortis aliquet. Mauris a ex aliquam, cursus lectus ac, fringilla ex. Fusce nec sollicitudin enim. Nam egestas sem sit amet nibh bibendum venenatis. Sed tincidunt porttitor ex, sed eleifend velit. Nullam aliquet, tortor id iaculis ultrices, orci felis scelerisque dui, in tristique eros magna in ante. \nCras eu purus quis leo aliquam sollicitudin. Maecenas eu iaculis massa. Curabitur dictum augue vitae scelerisque egestas. In ornare ante id facilisis pulvinar. In a elit enim. Nulla finibus porta lorem volutpat tempor. Donec lacinia lacus sit amet leo interdum blandit pulvinar et nibh. Vestibulum malesuada commodo enim sed convallis. \nSuspendisse lacinia, tellus id luctus venenatis, ante ipsum volutpat eros, sit amet imperdiet nisi lacus id leo. Morbi leo elit, convallis vel varius vel, fringilla a leo. Integer elementum dui et molestie rhoncus.",
    labels: ["11 January", "12 January", "13 January"],
    bids_perday: [11, 18, 20],
    max_bid_perday: [45, 400, 40]
  }

  //To have good display of end date
  const dateStr = lot.end_date;
  const date = new Date(dateStr);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
  const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);
  const result = `${formattedDate} ${formattedTime}`;

  
  return (
    <div className={styles.lot}>
      <LotDisplay img_src={lot.img_srcs}
              description={lot.description}
              n_bids={lot.n_bids}
              title={lot.title}
              end_date={result}
              max_bid={lot.max_bid}
              opened={lot.opened}
              labels={lot.labels}
              bids_perday={lot.bids_perday}
              max_bid_perday={lot.max_bid_perday}/>
              

      {lotEnded && !(lot.opened) && (
        <LotClosedPopup winner={winner} lot={lot.max_bid} onClose={handleClosePopup}/>
      )}
    </div>
  );
};

export default Lot;
