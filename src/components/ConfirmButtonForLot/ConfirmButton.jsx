// ConfirmButton.jsx
import React from 'react';
import styles from './ConfirmButton.module.css';

const ConfirmButton = ({ higher, callback, isSubmitting }) => {
    return (
        <button 
            className={`${styles.button} ${isSubmitting ? styles.loading : ''}`} 
            onClick={callback} 
            disabled={!higher || isSubmitting}
        >
            {isSubmitting ? 'Submitting...' : 'Confirm Bid'}
        </button>
    );
};

export default ConfirmButton;
