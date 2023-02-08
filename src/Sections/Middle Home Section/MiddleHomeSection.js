import React from "react";
import styles from "./MiddleHomeSection.module.css";
import MiddleHomeTopBox from "../../Components/Middle Home Top Box/MiddleHomeTopBox";
import { useRecoilState, useRecoilValue } from "recoil";
import { DefaultPosts } from "../../Recoil State/Default Posts/DefaultPosts";
import { useNavigate } from "react-router-dom";
import CommentControl from "../../Molecules/Comment Control/CommentControl";
import RetweetControl from "../../Molecules/Retweet Control/RetweetControl";
import LikeControl from "../../Molecules/Like Control/LikeControl";
import ViewControl from "../../Molecules/View Control/ViewControl";
import MiddleTweetBox from "../../Components/Middle Tweet Box/MiddleTweetBox";
import UserTweetTemplate from "../../Components/User Tweet Template/UserTweetTemplate";
import { ThreadAtom } from "../../Recoil State/Thread Atom/ThreadAtom";
import { ReplyAtom } from "../../Recoil State/Reply State/ReplyAtom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MiddleHomePopover from "../../Molecules/Middle Home Popover/MiddleHomePopover";

function MiddleHomeSection() {
  const postData = useRecoilValue(DefaultPosts);
  const navigate = useNavigate();
  const [threadData, setThreadData] = useRecoilState(ThreadAtom);
  const [myReply, setMyReply] = useRecoilState(ReplyAtom);

  function redirectToPeopleProfile(element) {
    // setTweetDetailsProfile(element)
    localStorage.setItem("otherUserDetails", JSON.stringify(element));
    const name = element.name.replace(/ /g, "-");
    navigate(`/peopleprofile/${name}`);
  }

  function redirectToThread(element) {
    setThreadData(element);
    setMyReply(element.tweets[0].TweetReplies);
    navigate("/thread");
  }

  return (
    <div className={styles.MiddleParentContainer}>
      <MiddleHomeTopBox />
      <MiddleTweetBox />
      <UserTweetTemplate />

      {postData.map((element, index) => (
        <div key={index} className={styles.MiddleHomeTweetBoxButtonContainer}>
          <div className={styles.MiddleHomeTweetBoxGrid}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "1.2rem", cursor: "pointer" }}>
                {" "}
                <img
                  onClick={() => redirectToPeopleProfile(element)}
                  className={styles.userProfle}
                  src={element.profilePic}
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
                {element.name}
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
                {element.handlerName}
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
            onClick={() => redirectToThread(element)}
            style={{
              fontSize: "1rem",
              textAlign: "left",
              marginLeft: "5.55rem",
              position: "relative",
              bottom: "3.2rem",
              cursor: "pointer",
            }}
          >
            {" "}
            {element.tweets[0].tweetText}
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
              onClick={() => redirectToThread(element)}
              className={styles.tweetPic}
              src={element.tweets[0].tweetPic}
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
      ))}
    </div>
  );
}

export default MiddleHomeSection;
