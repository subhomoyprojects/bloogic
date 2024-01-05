import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { ListItemStyle } from "../style/ListStyle";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getCategoryValue } from "../redux/slice/BlogSlice";

export default function CommonList({ value, icon, id }) {
  const dispatch = useDispatch();

  return (
    <ListItemStyle>
      <ListItemButton
        onClick={() => {
          dispatch(getCategoryValue(id));
        }}
      >
        {icon && <ListItemAvatar>{<Avatar>{icon}</Avatar>}</ListItemAvatar>}
        <ListItemText primary={value} />
      </ListItemButton>
    </ListItemStyle>
  );
}
CommonList.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.node,
};
