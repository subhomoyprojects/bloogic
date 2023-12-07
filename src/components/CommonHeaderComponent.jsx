import { CommonHeader } from "../style/CommonHeaderStyle";
import PropTypes from "prop-types";

export default function CommonHeaderComponent({ title, variant }) {
  return <CommonHeader variant={variant}>{title}</CommonHeader>;
}

CommonHeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
