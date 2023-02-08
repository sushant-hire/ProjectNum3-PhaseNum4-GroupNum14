import React, { useRef, useState } from "react";
import styles from "./LeftHomeDialog.module.css";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import { useRecoilState } from "recoil";

function LeftHomeDialog() {
  const [open, setOpen] = React.useState(false);
  const [tweet, setTweet] = useState("");
  const [tweetPost, setTweetPost] = useRecoilState(UserPost);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleTweetPost() {
    let tweetText = { name: "Sushant", tweetText: tweet, tweetPic: image };
    console.log([...tweetPost, tweetText]);
    setTweetPost([tweetText, ...tweetPost]);
    setOpen(false);
    setImage("");
    setTweet("");
  }

  return (
    <div>
      <CustomButton
        className={styles.TweetButtonStyle}
        buttonText="Tweet"
        onClick={handleClickOpen}
      />
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
          <input
            className={styles.MiddleHomeUserTweetBoxInput}
            id="outlined-multiline-static"
            placeholder="What's happening?"
            multiline
            rows={8}
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
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

          <CustomButton
            className={styles.DialogTweetButtonStyle}
            buttonText="Tweet"
            onClick={handleTweetPost}
          >
            Tweet
          </CustomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LeftHomeDialog;
