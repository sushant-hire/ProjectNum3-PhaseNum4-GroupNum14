import React, { useRef, useState } from "react";
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
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import { useRecoilState } from "recoil";

function CommentControl() {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = useState("");
  const [tweetPost, setTweetPost] = useRecoilState(UserPost);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleTweetPost() {
    let commentText = {
      name: "Sushant",
      commentText: comment,
      tweetPic: image,
    };
    setTweetPost([commentText, ...tweetPost]);
    setOpen(false);
    setImage("");
    setComment("");
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
        <CloseRoundedIcon
          onClick={handleClose}
          style={{
            position: "relative",
            left: "0.5rem",
            top: "0.5rem",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        />
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Box>
        <DialogActions>
          <PermMediaOutlinedIcon
            onClick={handleImageClick}
            className={styles.DialogTweetIconStyle}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
            value=""
          />
          <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
          <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
          <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
          <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
          <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />

          <button
            className={styles.DialogTweetButtonStyle}
            // onClick={handleTweetPost}
          >
            Comment
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommentControl;
