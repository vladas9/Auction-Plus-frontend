import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FilterBar.module.css";

export default function FilterBar({fetchLots, filters, setFilters}) {

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if ((name === "minprice" || name === "maxprice") && !/^\d*$/.test(value)) {
            return;
        }

        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({
            category: "",
            minprice: "",
            maxprice: "",
            lotstate: ""
        })
    };

    const isSearchDisabled = !Object.values(filters).some((value) => value !== "");

    const isPriceValid = !filters.minprice || !filters.maxprice || parseInt(filters.minprice) <= parseInt(filters.maxprice);

  
    return (
        <>
            <div className={styles.filterTitle}>
                <h2>List of opened lots</h2>
                <Link 
                    className={styles.addLotButton}
                    to="/profile/postlot"
                >
                    + Add lot
                </Link>
            </div>
            <div className={styles.filterContainer}>
                <div className={styles.filters}>
                    <div className={styles.filterField}>
                        <label>Category</label>
                        <select
                            name="category"
                            className={styles.filterInput}
                            value={filters.category}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a category</option>
                            <option value="furniture">Furniture</option>
                            <option value="real estate">Real Estate</option>
                            <option value="electronics">Electronics</option>
                            <option value="arts">Arts</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className={styles.filterField}>
                        <label>Min price</label>
                        <input
                            type="text"
                            name="minprice"
                            className={styles.filterInput}
                            value={filters.minprice}
                            onChange={handleInputChange}
                            placeholder="Min price"
                        />
                    </div>

                    <div className={styles.filterField}>
                        <label>Max price</label>
                        <input
                            type="text"
                            name="maxprice"
                            className={styles.filterInput}
                            value={filters.maxprice}
                            onChange={handleInputChange}
                            placeholder="Max price"
                        />
                    </div>

                    <div className={styles.filterField}>
                        <label>Lot condition</label>
                        <select
                            name="lotcondition"
                            className={styles.filterInput}
                            value={filters.lotstate}
                            onChange={handleInputChange}
                        >
                            <option value="">Lot condition</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>
                    </div>

                    <button
                        className={styles.searchButton}
                        onClick={() => fetchLots(1, filters)}
                        disabled={isSearchDisabled || !isPriceValid}
                    >
                        <i className="fas fa-search"></i> Search
                    </button>

                    <button className={styles.clearButton} onClick={clearFilters}>
                        Clear filters
                    </button>
                </div>

                {!isPriceValid && (
                    <p className={styles.errorMessage}>Min price cannot be greater than Max price.</p>
                )}
            </div>
        </>
    );
}
