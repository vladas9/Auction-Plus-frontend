import React from "react";
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
//import { themeQuartz, iconSetMaterial } from '@ag-grid-community/theming';
import "./PlacedLotsTable.css"
import { useState } from 'react';
import LotTitleRenderer from './Renderers/LotTitleRenderer';
import LotStatusRenderer from './Renderers/LotStatusRenderer';


export default function PlacedLotsTable({lots}){
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
            maxWidth: 180,
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
            field: "Top bidder",
            maxWidth:200,
        }
    ]);
    const [rowData, setRowData]=useState(
        lots.map(item=>({
            "Lot title": [item.photo, item.lot_name],
            Price: item.max_bid,
            "Ending date":item.end_date,
            Category: item.category,
            "Lot status":item.closed,
            "Top bidder":item.top_bidder_username
        }))
    )

    return(
        <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        </div>
    )
}