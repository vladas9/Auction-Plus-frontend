import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { useState } from 'react';
import LotTitleRenderer from '../TableCellsRenderers/LotTitleRenderer';
import LotStatusRenderer from '../TableCellsRenderers/LotStatusRenderer';
import LotBidStatsRenderer from '../TableCellsRenderers/LotBidStatsRenderer'
import './PlacedBidsTable.css'
import LotEndDateRenderer from '../TableCellsRenderers/LotEndDateRenderer';

export default function PlacedBidsTable({bids}){
  const [colDefs, setColDefs] = useState([
    { 
      field: "Lot title",
      cellRenderer: LotTitleRenderer,   
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
      valueFormatter:(params) => params.value.max_bid-params.value.users_bid || 'No bids',
      maxWidth:160
    },
    { 
      field: "Top bidder",
      maxWidth:200,
    }
  ]);
  const [rowData, setRowData]=useState(
    bids.map(item=>({
      "Lot title": [item.photo, item.lot_name],
      Price: item.start_price,
      "Ending date":item.end_date,
      Category: item.category,
      "Lot status":item.closed,
      "Bid status":{
        closed: item.closed ,
        max_bid: item.max_bid,
        top_bidder_username: item.top_bidder_username,
        users_bid: item.users_bid
      },
      "Top bidder":item.top_bidder_username
    }))
  )
  return (
    <div className="ag-theme-quartz" // applying the Data Grid theme
          style={{ height: 500 }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs}/>
    </div>
  )
}
