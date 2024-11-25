import React from "react";
import styles from "./InputField.module.css";
export default function InputField({name, type = "text", label, placeholder, value, onChange, ...props}) {
    return (
        <div className={styles.inputGroup}>
         {label && <label htmlFor={name} className={styles.label}>{label}</label>}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                className={styles.input}
                {...props}
            />
        </div>
    );
}
