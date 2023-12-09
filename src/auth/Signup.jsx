import { InputLabel, OutlinedInput, Typography } from "@mui/material";
import AuthWrapper from "../components/AuthWrapper";
import { CustomInputHolder } from "../style/CustomInputStyle";
import { CommonBtn } from "../style/CommonBtnStyle";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <AuthWrapper title="Sign Up" variant="h1">
      <form>
        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Name</InputLabel>
          <OutlinedInput label="Enter Your Name" />
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Email</InputLabel>
          <OutlinedInput type="email" label="Enter Your Email" />
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Phone Number</InputLabel>
          <OutlinedInput type="number" label="Enter Your Phone Number" />
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Password</InputLabel>
          <OutlinedInput type="password" label="Enter Your Password" />
        </CustomInputHolder>

        <CommonBtn type="submit" variant="contained">
          Submit
        </CommonBtn>
      </form>
      <Typography variant="body1" className="pageGo">
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </AuthWrapper>
  );
}
