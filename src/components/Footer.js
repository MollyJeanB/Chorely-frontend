import React from "react"
import styles from "../componentStyles/Footer.css"


export default function Footer(props) {
  return (
    <div className={styles.footerContain}>
      <p className={styles.creditText}>Built by <a href="https://www.mollyjeanbennett.com/" target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>Molly Jean Bennett</a></p>  
    </div>
  )
}
