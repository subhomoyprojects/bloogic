import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { ListItemStyle } from "../style/ListStyle";
import PropTypes from "prop-types";

export default function CommonList({ value, icon }) {
  return (
    <ListItemStyle>
      {icon && <ListItemAvatar>{<Avatar>{icon}</Avatar>}</ListItemAvatar>}
      <ListItemText primary={value} />
    </ListItemStyle>
  );
}
CommonList.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.node,
};
