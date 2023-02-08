import React from "react";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddleProfileSection from "../../Sections/Middle Profile Section/MiddleProfileSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.ProfileContainer}>
      <LeftHomeSection />
      <MiddleProfileSection />
      <RightHomeSection />
    </div>
  );
}

export default Profile;
