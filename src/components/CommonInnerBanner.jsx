import { Container } from "@mui/material";
import { CommonInnerBannerWrapper } from "../style/CommonInnerBannerWrapperStyle";
import CommonHeaderComponent from "./CommonHeaderComponent";
import PropTypes from "prop-types";

export default function CommonInnerBanner({ title, variant }) {
  return (
    <>
      <CommonInnerBannerWrapper>
        <Container>
          <CommonHeaderComponent title={title} variant={variant} />
        </Container>
      </CommonInnerBannerWrapper>
    </>
  );
}

CommonInnerBanner.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
