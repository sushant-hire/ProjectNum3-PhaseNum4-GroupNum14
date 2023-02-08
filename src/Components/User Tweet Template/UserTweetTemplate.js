import React from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import styles from "./UserTweetTemplate.module.css";
import CommentControl from "../../Molecules/Comment Control/CommentControl";
import RetweetControl from "../../Molecules/Retweet Control/RetweetControl";
import LikeControl from "../../Molecules/Like Control/LikeControl";
import ViewControl from "../../Molecules/View Control/ViewControl";

function UserTweetTemplate() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));

  const UserPostData = useRecoilValue(UserPost);
  const navigate = useNavigate();

  function redirectToProfile() {
    // navigate(`/profile/${matchedUserDetails.Name}`);
  }

  function redirectToStatus(element) {
    console.log(
      element,
      " i am from user side post file and want to be set in recoil"
    );
    // setThreadData(element);

    navigate("/mystatus");
  }

  return (
    <div>
      {UserPostData.map((element, index) => (
        <button
          key={index}
          className={styles.MiddleHomeTweetBoxButtonContainer}
        >
          <div className={styles.MiddleHomeTweetBoxGrid}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0.7rem", cursor: "pointer" }}>
                {" "}
                <img
                  className={styles.userProfle}
                  src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
                  alt="profilePic"
                />
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  marginTop: "0.9rem",
                  fontSize: "0.9375rem",
                  marginLeft: "0.2rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                {matchedUserDetails.Email || matchedUserDetails.Phone}
              </div>
              <div
                style={{
                  marginTop: "0.9rem",
                  fontSize: "0.9375rem",
                  marginLeft: "0.3rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                @{matchedUserDetails.Name}
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
              marginLeft: "5.1rem",
              position: "relative",
              bottom: "2.4rem",
            }}
          >
            {" "}
            {element.tweetText}
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
            {element.tweetPic ? (
              <img
                className={styles.tweetPic}
                src={element.tweetPic}
                alt="tweetPic"
                width="450rem"
              />
            ) : (
              ""
            )}
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
        </button>
      ))}
    </div>
    // <div className={style.mainContainer}>
    //   {UserPostData.map((element) => (
    //     <div className={style.postContainer} key={element.name}>
    //       <span onClick={() => redirectToProfile()}>
    //         <img
    //           className={style.userProfle}
    //           src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
    //           alt="profilePic"
    //         />
    //       </span>
    //       <div className={style.postSubContainer}>
    //         <div>
    //           <span className={style.postUserName}>
    //             {/* {matchedUserDetails.Name} */}
    //             Sushant Hire
    //           </span>
    //           <span className={style.postHandleName}>
    //             {/* {element.handlerName} */}
    //             @reachbarsonist
    //           </span>
    //         </div>
    //         <div onClick={() => redirectToStatus(element)}>
    //           <span>{element.tweetText}</span>
    //           {element.tweetPic ? (
    //             <img
    //               className={style.tweetPic}
    //               src={element.tweetPic}
    //               alt="tweetPic"
    //               width="450rem"
    //             />
    //           ) : (
    //             ""
    //           )}
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           marginTop: "0.5rem",
    //           marginLeft: "7rem",
    //           marginRight: "4rem",
    //           cursor: "pointer",
    //           position: "relative",
    //           bottom: "0.8rem",
    //           cursor: "pointer",
    //         }}
    //       >
    //         <CommentControl />
    //         <RetweetControl style={{ fontSize: "5rem" }} />
    //         <LikeControl style={{ fontSize: "1.4rem" }} />
    //         <ViewControl />
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default UserTweetTemplate;
