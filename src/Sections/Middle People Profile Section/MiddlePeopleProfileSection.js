import React from "react";
import styles from "./MiddlePeopleProfileSection.module.css";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserTweetTemplate from "../../Components/User Tweet Template/UserTweetTemplate";
import { Link } from "react-router-dom";
import CommentControl from "../../Molecules/Comment Control/CommentControl";
import RetweetControl from "../../Molecules/Retweet Control/RetweetControl";
import LikeControl from "../../Molecules/Like Control/LikeControl";
import ViewControl from "../../Molecules/View Control/ViewControl";

function MiddlePeopleProfileSection() {
  const UserTweets = JSON.parse(localStorage.getItem("otherUserDetails"));

  return (
    <div className={styles.ProfileMainContainer}>
      <div className={styles.ProfileHeadingContainer}>
        <h3 className={styles.ProfileHeading3Container}>
          {" "}
          <Link to="/home">
            <ArrowBackIcon
              style={{
                marginRight: "1.5rem",
                position: "relative",
                top: "0.7rem",
              }}
            />
          </Link>
          {UserTweets.name}{" "}
        </h3>
        <p className={styles.ProfileHeadingParaContainer}>0 Tweets</p>
      </div>
      <span className={styles.ProfilePhotoContainer}>
        <img
          style={{
            height: "7.9rem",
            width: "7.9rem",
            border: "4px solid white",
            borderRadius: "555px",
            position: "relative",
            top: "4.6rem",
            right: "1rem",
            cursor: "pointer",
          }}
          src={UserTweets.profilePic}
          alt="snub"
        ></img>
      </span>
      <div className={styles.ProfileDetailsContainer}>
        <p
          style={{
            position: "relative",
            top: "4.2rem",
            marginLeft: "1rem",
            fontSize: "large",
            fontWeight: "bolder",
          }}
        >
          {UserTweets.name}{" "}
        </p>
        <p
          style={{
            position: "relative",
            top: "3rem",
            marginLeft: "0.9rem",
            fontSize: "0.96rem",
          }}
        >
          {UserTweets.handlerName}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            position: "relative",
            top: "2.4rem",
          }}
        >
          <CalendarMonthIcon
            style={{
              position: "relative",
              top: "1.1rem",
              marginLeft: "0.8rem",
              fontSize: "1.2rem",
            }}
          />
          <p
            style={{
              position: "relative",
              right: "0.6rem",
              fontSize: "1rem",
            }}
          >
            {" "}
            Joined January 2023
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginLeft: "1rem",
            fontSize: "0.9rem",
            position: "relative",
            top: "1rem",
          }}
        >
          <p>
            <span style={{ fontWeight: "bolder" }}> 8</span> Following{" "}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bolder" }}> 0</span> Followers
          </p>
        </div>
        <CustomButton
          className={styles.ProfileEditButton}
          buttonText="Edit Profile"
        />{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            borderBottom: "1px solid gainsboro",
          }}
        >
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Tweets"
          />
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Tweets & Replies"
          />
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Media"
          />
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Likes"
          />
        </div>
      </div>

      <div className={styles.MiddleHomeTweetBoxButtonContainer}>
        <div className={styles.MiddleHomeTweetBoxGrid}>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "1.2rem", cursor: "pointer" }}>
              {" "}
              <img
                className={styles.userProfle}
                src={UserTweets.profilePic}
                alt="profilePic"
              />
            </div>
            <div
              style={{
                fontWeight: "bold",
                marginTop: "1.2rem",
                fontSize: "0.9375rem",
                cursor: "pointer",
                position: "relative",
                right: "0.4rem",
              }}
            >
              {" "}
              {UserTweets.name}
            </div>
            <div
              style={{
                marginTop: "1.2rem",
                fontSize: "0.9375rem",
                marginLeft: "0.3rem",
                cursor: "pointer",
                position: "relative",
                right: "0.4rem",
              }}
            >
              {" "}
              {UserTweets.handlerName}
            </div>
          </div>
          {/* <div
                style={{
                  textAlign: "right",
                  marginTop: "0.8rem",
                  marginRight: "0.3rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                <MiddleHomePopover />
              </div> */}
        </div>

        <div
          style={{
            fontSize: "1rem",
            textAlign: "left",
            marginLeft: "5.55rem",
            position: "relative",
            bottom: "3.2rem",
          }}
        >
          {" "}
          {UserTweets.tweets[0].tweetText}
        </div>
        <div
          style={{
            marginLeft: "1rem",
            position: "relative",
            left: "1rem",
            bottom: "1.2rem",
            cursor: "pointer",
          }}
        >
          {" "}
          <img
            className={styles.tweetPic}
            src={UserTweets.tweets[0].tweetPic}
            alt="tweetPic"
            width="450rem"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.5rem",
            marginLeft: "7rem",
            marginRight: "4rem",
            cursor: "pointer",
            position: "relative",
            bottom: "0.8rem",
            cursor: "pointer",
          }}
        >
          <CommentControl />
          <RetweetControl style={{ fontSize: "5rem" }} />
          <LikeControl style={{ fontSize: "1.4rem" }} />
          <ViewControl />
        </div>
      </div>

      {/* <img
        style={{
          height: "7.9rem",
          width: "7.9rem",
          border: "4px solid white",
          borderRadius: "555px",
          position: "relative",
          left: "1.2rem",
          bottom: "23rem",
          cursor: "pointer",
        }}
        src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
        alt="snub"
      ></img> */}
    </div>
  );
}

export default MiddlePeopleProfileSection;
