import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { useState } from 'react';
import LotImageRenderer from './LotImageRenderer';
import LotStatusRenderer from './LotStatusRenderer';
import LotBidStatsRenderer from './LotBidStatsRenderer'

/*{
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 2",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": false,
          "max_bid": 50,
          "top_bidder_username": "username1"
        },*/
export default function PlacedBidsTable({lots}){
  const [colDefs, setColDefs] = useState([
    { 
      field: "Photo",
      cellRenderer: LotImageRenderer,
    },
    { field: "Lot name" },
    { field: "Price" },
    { field: "Ending date" },
    { 
      field: "Lot status",
      cellRenderer: LotStatusRenderer,
    },
    { field: "Max bid"},
    { field: "Bid status",
      cellRenderer: LotBidStatsRenderer,
    }
  ]);
  const [rowData, setRowData]=useState(
    lots.map(item=>({
      Photo: item.photo,
      "Lot name": item.lot_name,
      Price: item.start_price,
      "Ending date":item.end_date,
      "Lot status":item.closed,
      "Max bid":item.max_bid,
      "Bid status":{
        closed: item.closed ,
        max_bid: item.max_bid,
        start_price:item.start_price,
        top_bidder_username: item.top_bidder_username,
      }
    }))
  )
  return (
    <div className="ag-theme-quartz-dark" // applying the Data Grid theme
          style={{ height: 700 }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs}/>
    </div>
  )
}
