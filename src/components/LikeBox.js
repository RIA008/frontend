import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
const LikeBox = (props) => {
  const { likeCount, onLike } = props;
  const theme = useTheme();
  const [liked, setLiked] = useState(props.liked);

  const navigate = useNavigate();

  const handleLike = (e) => {
    if (isLoggedIn()) {
      const newLikedValue = !liked;
      setLiked(newLikedValue);
      onLike(newLikedValue);
    } else {
      navigate("/login");
    }
  };

  return (
    <Stack alignItems="center" display="flex" direction = "row">
      <IconButton sx={{  fontSize: 21 }} onClick={handleLike}>
        {liked ? (
          <IconContext.Provider value={{ color: theme.palette.primary.main }}>
            {/* <AiFillLike /> */}
            {/* <FavoriteOutlinedIcon/> */}
            <FcLike/>
          </IconContext.Provider>
        ) : (
          <FavoriteBorderOutlinedIcon/>
          
          // <AiOutlineLike />
        )}
      </IconButton>
      <Typography sx={{ px:1, fontSize: 21 }} >{likeCount}</Typography>
    </Stack>
  );
};

export default LikeBox;
