import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { ListItemStyle } from "../style/ListStyle";
import { Category } from "@mui/icons-material";

export default function CommonList() {
  return (
    <ListItemStyle>
      <ListItemAvatar>
        <Avatar>
          <Category />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Single-line item" />
    </ListItemStyle>
  );
}
