import React from "react";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddleThreadSection from "../../Sections/Middle Thread Section/MiddleThreadSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import styles from "./Thread.module.css";

function Thread() {
  return (
    <div className={styles.ThreadContainer}>
      <LeftHomeSection />
      <MiddleThreadSection />
      <RightHomeSection />
    </div>
  );
}

export default Thread;
