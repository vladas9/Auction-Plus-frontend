import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import LotTitleRenderer from '../TableCellsRenderers/LotTitleRenderer';
import LotStatusRenderer from '../TableCellsRenderers/LotStatusRenderer';
import LotBidStatsRenderer from '../TableCellsRenderers/LotBidStatsRenderer'
import './PlacedBidsTable.css'
import LotEndDateRenderer from '../TableCellsRenderers/LotEndDateRenderer';

export default function PlacedBidsTable() {
  const [loading, setLoading] = useState(true);
  const [bids, setBids] = useState([]);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([])
  var limit = 10;
  var offset = 1
  useEffect(() => {
    var fetchPlacedBids = async () => {
      await fetch(`http://localhost:1169/api/bids/table?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("auth-token")}`
        }
      }).then(res => {
        return res.json();
      }).then(data => {
        console.log(data);
        if(data.lots_table!=null) setLots(data.lots_table);
        setBids(data.bids_table);
      }).catch(err => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      })
    }

    fetchPlacedBids();
  }, [])
  useEffect(() => {
    if (bids.length > 0) {
      const rows = bids.map((item) => ({
        "Lot title": [item.img_src, item.lot_title],
        Price: Number(item.max_bid),//need to check other methods of converting and see which is more convenient
        "Ending date": item.end_date,
        Category: item.category,
        "Lot status": item.closed,
        "Bid status":{
          max_bid: item.max_bid, 
          users_bid: item.users_bid,
        },
        "Top bidder": item.top_bidder,
      }));
      setRowData(rows);
    }
  }, [bids]);

  var [colDefs, setColDefs] = useState([
    {
      field: "Lot title",
      cellRenderer: LotTitleRenderer,
      valueFormatter: params => params.value[1],
      minWidth: 300,
      maxWidth: 340,
    },
    {
      field: "Price",
      maxWidth: 110,
    },
    {
      field: "Ending date",
      minWidth: 200,
      maxWidth: 200,
      cellRenderer: LotEndDateRenderer
    },
    {
      field: "Category",
      maxWidth: 160,
    },
    {
      field: "Lot status",
      cellRenderer: LotStatusRenderer,
      maxWidth: 160,

    },
    {
      field: "Bid status",
      cellRenderer: LotBidStatsRenderer,
      valueFormatter: (params) => params.value.max_bid - params.value.users_bid || 'No bids',
      maxWidth: 160
    },
    {
      field: "Top bidder",
      maxWidth: 200,
    }
  ]);
  if (error) {
    return (
      <>
        Error: {error}
      </>
    )
  }
  if (loading) {
    return (
      <>
        Loading...
      </>
    )
  }
  return (
    <div className="ag-theme-quartz" style={{ height: limit * 70 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  )
}
