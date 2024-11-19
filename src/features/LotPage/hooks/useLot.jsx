import { useState, useEffect } from 'react';

const useLot = (id) => {
  const [lot, setLot] = useState({
    opened: false,
    max_bid: 0,
    n_bids: 0,
    img_src: [],
    title: '',
    description: '',
    end_date: '',
    labels: [],
    bids_perday: [],
    max_bid_perday: [],
  });

  const [lotEnded, setLotEnded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:1169/api/auction/${id}`)
      .then(response => response.json())
      .then(data => {
        setLot(data.auction);
        if (!data.auction.opened) {
          setLotEnded(true);
        }
      })
      .catch(error => console.error('Error fetching lot data:', error));
  }, [id]);

  return { lot, setLot, lotEnded, setLotEnded };
};

export default useLot;
