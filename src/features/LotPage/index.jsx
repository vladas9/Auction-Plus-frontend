import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./index.module.css";
import LotDisplay from './components/LotDisplay/LotDisplay';
import LotClosedPopup from "../../components/LotClosedPopup/LotClosedPopup";
import { formatEndDate } from "./components/formatEndDate/formatEndDate";
import { formatLotData } from "./utils/lotFormatter";
import useLot from './hooks/useLot';

const Lot = () => {
  const { id } = useParams();
  const { lot, setLot, lotEnded, setLotEnded } = useLot(id);
  const handleClosePopup = () => setLotEnded(false);
  
  if (!lot) {
    return <div className={styles.load}>Loading...</div>;
  }

  const formattedLot = formatLotData(lot);
  const formattedEndDate = formatEndDate(lot?.end_date);

  return (
    <div className={styles.lot}>
      <LotDisplay
        img_src={formattedLot.imgSources || ["https://fundatia.moldcell.md/wp-content/themes/consultix/images/no-image-found-360x250.png"]}
        description={formattedLot.description || "No description"}
        n_bids={formattedLot.nBids || "No bids yet"}
        title={formattedLot.title || "Untitled Lot"}
        end_date={formattedEndDate || "Invalid date"}
        max_bid={formattedLot.maxBid || "No bids yet"}
        opened={formattedLot.opened || false}
        labels={lot?.labels || []}
        bids_perday={lot?.bids_perday || []}
        max_bid_perday={lot?.max_bid_perday || []}
        id={id}
        onBidSuccess={(newMaxBid) => setLot(prevLot => ({ ...prevLot, max_bid: newMaxBid }))}
      />

      {lotEnded && !formattedLot.opened && (
        <LotClosedPopup lot={formattedLot.maxBid} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Lot;



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
