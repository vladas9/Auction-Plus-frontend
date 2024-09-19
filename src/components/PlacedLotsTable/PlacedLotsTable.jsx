import React from "react";
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
//import { themeQuartz, iconSetMaterial } from '@ag-grid-community/theming';
import "./PlacedLotsTable.css"
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
    // to use myTheme in an application, pass it to the theme grid option
    /*const myTheme = themeQuartz
	  .withPart(iconSetMaterial)
	  .withParams({
        accentColor: "#087AD1",
        backgroundColor: "#FFFFFF",
        borderColor: "#FAFAFA",
        borderRadius: "6px",
        browserColorScheme: "light",
        cellHorizontalPaddingScale: 1.1114285714,
        chromeBackgroundColor: {
            ref: "backgroundColor"
        },
        columnBorder: false,
        fontFamily: {
            googleFont: "Inter"
        },
        fontSize: 16,
        foregroundColor: "#555A60",
        headerBackgroundColor: "#FFFFFF",
        headerFontSize: 13,
        headerFontWeight: 400,
        headerTextColor: "#84868B",
        iconSize: "16px",
        rowBorder: true,
        rowVerticalPaddingScale: 2,
        sidePanelBorder: true,
        spacing: 6,
        wrapperBorder: false,
        wrapperBorderRadius: 2
    });*/



    return(
        <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        </div>
    )
}