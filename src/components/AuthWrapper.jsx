import { Box } from "@mui/material";
import AuthFooter from "../shared/AuthFooter";
import AuthHeader from "../shared/AuthHeader";
import CommonInnerBanner from "./CommonInnerBanner";
import PropTypes from "prop-types";
import { AuthContainer } from "../style/AuthContainerStyle";

export default function AuthWrapper({ children, title, variant }) {
  return (
    <>
      <AuthHeader />
      <CommonInnerBanner title={title} variant={variant} />
      <AuthContainer>
        <Box className="authHolder commonGap">{children}</Box>
      </AuthContainer>
      <AuthFooter />
    </>
  );
}

AuthWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  //   rightImage: PropTypes.string.isRequired,
};
