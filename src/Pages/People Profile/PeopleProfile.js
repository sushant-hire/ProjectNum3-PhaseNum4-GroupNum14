import React from "react";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddlePeopleProfileSection from "../../Sections/Middle People Profile Section/MiddlePeopleProfileSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import styles from "./PeopleProfile.module.css";

function PeopleProfile() {
  return (
    <div className={styles.PeopleProfileContainer}>
      <LeftHomeSection />
      <MiddlePeopleProfileSection />
      <RightHomeSection />
    </div>
  );
}

export default PeopleProfile;
