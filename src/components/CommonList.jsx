import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { ListItemStyle } from "../style/ListStyle";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryValue } from "../redux/slice/BlogSlice";

export default function CommonList({ value, icon }) {
  const [lowercaseValue, setLowercaseValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    lowercaseValue !== "" && dispatch(getCategoryValue(lowercaseValue));
  }, [dispatch, lowercaseValue]);

  return (
    <ListItemStyle>
      <ListItemButton
        onClick={() => {
          setLowercaseValue(value.trim().split(" ").join("").toLowerCase());
          lowercaseValue !== "" && dispatch(getCategoryValue(lowercaseValue));
        }}
      >
        {icon && <ListItemAvatar>{<Avatar>{icon}</Avatar>}</ListItemAvatar>}
        <ListItemText primary={value} />
      </ListItemButton>
    </ListItemStyle>
  );
}
CommonList.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.node,
};
