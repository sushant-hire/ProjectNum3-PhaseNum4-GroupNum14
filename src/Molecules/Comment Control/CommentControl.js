import React from "react";
import styles from "./CommentControl.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ReplyAtom } from "../../Recoil State/Reply State/ReplyAtom";
import { MyReplyAtom } from "../../Recoil State/Reply State/MyReplyAtom";
import { useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function CommentControl() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));

  const [newReply, setNewReply] = useRecoilState(ReplyAtom);
  const [newMyReply, setMyNewReply] = useRecoilState(MyReplyAtom);
  const [tweetReply, setTweetRelpy] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  function handleTweet(e) {
    setTweetRelpy(e.target.value);
  }
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleTweetPost() {
    let myReply = {
      name: `${matchedUserDetails.Email || matchedUserDetails.Phone}`,
      handlerName: `@${matchedUserDetails.Name}`,
      tweetReplyText: tweetReply,
      tweetPic: image,
      profilePic:
        "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31",
    };
    setNewReply([myReply, ...newReply]);
    setTweetRelpy("");
    setImage("");
    setMyNewReply([myReply, ...newMyReply]);
    console.log(newMyReply, 'This is my newest comment!')
  }

  return (
    <div>
      <ChatBubbleOutlineIcon onClick={handleClickOpen} />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          style: {
            borderRadius: "20px",
            marginBottom: "25em",
          },
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2.5, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-multiline-static"
            label="What's happening?"
            multiline
            rows={8}
          />
        </Box>
        <DialogActions>
          <PermMediaOutlinedIcon
            onClick={handleClose}
            className={styles.DialogTweetIconStyle}
          />
          <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
          <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
          <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
          <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
          <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />

          <button
            className={styles.DialogTweetButtonStyle}
            buttonText="Tweet"
            onClick={handleTweetPost}
          >
            Comment
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommentControl;
