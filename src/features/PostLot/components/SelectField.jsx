import React from "react";
import styles from "./SelectField.module.css";

export default function SelectField({ name, label, options, value, onChange }) {
  return (
    <div className={styles.filterGroup}>
      <label className={styles.label}>{label}</label>
      <select name={name} value={value} onChange={onChange} className={styles.filterInput}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
