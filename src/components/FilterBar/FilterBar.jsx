import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FilterBar.module.css";

export default function FilterBar() {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        minPrice: "",
        maxPrice: "",
        lotState: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if ((name === "minPrice" || name === "maxPrice") && !/^\d*$/.test(value)) {
            return;
        }

        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({
            category: "",
            minPrice: "",
            maxPrice: "",
            lotState: ""
        });
    };

    const isSearchDisabled = !Object.values(filters).some((value) => value !== "");

    const isPriceValid = !filters.minPrice || !filters.maxPrice || parseInt(filters.minPrice) <= parseInt(filters.maxPrice);

    const handleAddLotClick = () => {
        navigate('/profile/postlot');
    };

    return (
        <>
            <div className={styles.filterTitle}>
                <h2>List of opened lots</h2>
                <button 
                    className={styles.addLotButton}
                    onClick={handleAddLotClick}
                >
                    + Add lot
                </button>
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
                            <option value="Furniture">Furniture</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Arts">Arts</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className={styles.filterField}>
                        <label>Min price</label>
                        <input
                            type="text"
                            name="minPrice"
                            className={styles.filterInput}
                            value={filters.minPrice}
                            onChange={handleInputChange}
                            placeholder="Min price"
                        />
                    </div>

                    <div className={styles.filterField}>
                        <label>Max price</label>
                        <input
                            type="text"
                            name="maxPrice"
                            className={styles.filterInput}
                            value={filters.maxPrice}
                            onChange={handleInputChange}
                            placeholder="Max price"
                        />
                    </div>

                    <div className={styles.filterField}>
                        <label>Lot condition</label>
                        <select
                            name="lotCondition"
                            className={styles.filterInput}
                            value={filters.lotState}
                            onChange={handleInputChange}
                        >
                            <option value="">Lot condition</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>
                    </div>

                    <button
                        className={styles.searchButton}
                        onClick={() => console.log(filters)}
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
