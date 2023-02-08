import React from "react";
import styles from "./MiddleHomeTopBox.module.css";

function MiddleHomeTopBox() {
  return (
    <div className={styles.MiddleHomeTopBoxContainer}>
      <h3 className={styles.MiddleHomeTopBoxHeadingContainer}>Home</h3>
      <div style={{display: 'flex'}} >
        <button className={styles.MiddleHomeTopBoxButtonContainer}>
          For you
        </button>
        <button className={styles.MiddleHomeTopBoxButtonContainer}>
          Following
        </button>
      </div>
    </div>
  );
}

export default MiddleHomeTopBox;