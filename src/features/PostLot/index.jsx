import React, { useState } from "react";
import styles from "./index.module.css";
import { postLot } from "./hooks/usePostLot";
import { convertToBase64 } from "./utils/convertToBase64";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
export default function Post() {
    if (!localStorage.getItem("auth-token")) {
        window.location.replace("/login");
        return <>Redirecting...</>;
    }
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState();
    const [formData, setFormData] = useState({
        title: "Title from the form",
        description: "abracadabra description",
        start_price: 122,
        category_name: "furniture",
        lot_condition: "new",
        end_date: "2024-10-30T13:34",
        img_src: [],
    });

    const convertImages = async (e) => {
        try {
            const images = convertToBase64(e.target.files);
            setFormData((prev) => ({ ...prev, img_src: images }));
        } catch (err) {
            setError("Failed to upload images.");
        }
    };

    var handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    var submit = async (e) => {
        e.preventDefault();

        if (!terms) {
            setError("You must agree with the conditions to post the auction.");
            return;
        }
        if (formData.img_src.length < 1) {
            setError("You must upload a photo!");
            return;
        }
        setError("");
        postLot(formData);
    };
    return (
        <div className={styles.postLotContainer}>
            <h2 className={styles.title}>Place a lot</h2>
            <form onSubmit={submit} className={styles.form}>
                <InputField
                    name="title"
                    placeholder="Title Input"
                    value={formData.title}
                    onChange={handleChange}
                />

                <InputField
                    name="description"
                    type="textarea"
                    placeholder="Description Input"
                    value={formData.description}
                    onChange={handleChange}
                />
                <InputField
                    name="start_price"
                    type="number"
                    placeholder="Price"
                    value={formData.start_price}
                    onChange={handleChange}
                />

                <InputField
                    label="Choose the date and time"
                    name="end_date"
                    type="datetime-local"
                    value={formData.end_date}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 16)}
                />
                <div className={styles.selectionGroup}>
                    <div>
                        <label className={styles.label}>Choose the lot condition</label>
                        <div>
                            <input
                                name="lot_condition"
                                type="radio"
                                value="new"
                                id="new"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="new">New</label>
                        </div>
                        <div>
                            <input
                                name="lot_condition"
                                type="radio"
                                value="old"
                                id="old"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="Old">Old</label>
                        </div>
                    </div>

                    <SelectField
                        name="category_name"
                        label="Category"
                        options={[
                            { value: "", label: "Select a category" },
                            { value: "furniture", label: "Furniture" },
                            { value: "real estate", label: "Real Estate" },
                            { value: "electronics", label: "Electronics" },
                            { value: "arts", label: "Arts" },
                            { value: "others", label: "Others" },
                        ]}
                        value={formData.category_name}
                        onChange={handleChange}
                    />
                </div>

                <InputField
                    label="Upload Photos"
                    name="photos"
                    type="file"
                    id="photos"
                    checked={formData.img_src}
                    multiple
                    onChange={convertImages}
                />

                <div className={`${styles.inputGroup} ${styles.termsGroup}`}>
                    <input
                        type="checkbox"
                        id="terms"
                        checked={terms}
                        onChange={() => setTerms(!terms)}
                        className={styles.checkbox}
                    />
                    <label htmlFor="terms" className={styles.label}>
                        Agree with conditions of lot posting
                    </label>
                </div>

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.submitBtn}>
                    Post
                </button>
            </form>
        </div>
    );
}
