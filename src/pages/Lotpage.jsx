import React from 'react'
import styles from "../styles/Lotpage.module.css"
import LotDisplay from '../components/LotDisplay/LotDisplay'
const Lot = () => {
  
  return (
    <div className={styles.lot}>
      <LotDisplay/>
    </div>
  )
}

export default Lot