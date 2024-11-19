export const formatLotData = (lot) => ({
    imgSources: lot?.img_src?.length > 0 
      ? lot.img_src 
      : ["https://fundatia.moldcell.md/wp-content/themes/consultix/images/no-image-found-360x250.png"],
    title: lot?.title?.trim() !== "" ? lot.title : "Untitled Lot",
    description: lot?.description?.trim() !== "" ? lot.description : "No description available",
    maxBid: lot?.max_bid > 0 ? lot.max_bid : "No bids yet",
    nBids: lot?.n_bids >= 0 ? lot.n_bids : 0,
    opened: lot?.opened ?? false,
  });
  