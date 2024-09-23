import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./PlacedLotsTable.css"
import LotTitleRenderer from '../TableCellsRenderers/LotTitleRenderer';
import LotStatusRenderer from '../TableCellsRenderers/LotStatusRenderer';
import LotEndDateRenderer from "../TableCellsRenderers/LotEndDateRenderer";

export default function PlacedLotsTable() {
    var [loading, setLoading] = useState(true);
    var [lots, setLots] = useState([]);
    var [error, setError] = useState(null);
    var [rowData, setRowData] = useState([]);
    var limit = 10;
    var offset = 1;
    useEffect(() => {
        var fetchPlacedLots = async () => {
            await fetch(`http://localhost:1169/api/get-lots-table?limit=${limit}&offset=${offset}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("auth-token")}`
                }
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                setLots(data.lots_table);
            }).catch(err => {
                setError(err.message);
            }).finally(() => {
                setLoading(false);

            })
        }
        fetchPlacedLots();
    }, [])
    useEffect(() => {
        if (lots.length > 0) {
            const rows = lots.map((item) => ({
                "Lot title": [item.img_src, item.lot_title],
                Price: Number(item.max_bid),//need to check other methods of converting and see which is more convenient
                "Ending date": item.end_date,
                Category: item.category,
                "Lot status": item.closed,
                "Top bidder": item.top_bidder,
            }));
            setRowData(rows);
        }
    }, [lots]);

    const [colDefs, setColDefs] = useState([
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