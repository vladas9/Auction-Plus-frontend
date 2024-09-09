import React from "react";
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { useState } from 'react';
import LotImageRenderer from './Renderers/LotImageRenderer';
import LotStatusRenderer from './Renderers/LotStatusRenderer';
export default function PlacedLotsTable({lots}){
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
        { 
          field: "Top bidder",
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
            "Top bidder":item.top_bidder_username
        }))
    )
    return(
        <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        </div>
    )
}