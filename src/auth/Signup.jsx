import { FormHelperText, InputLabel, OutlinedInput, Typography } from "@mui/material";
import AuthWrapper from "../components/AuthWrapper";
import { CustomInputHolder } from "../style/CustomInputStyle";
import { CommonBtn } from "../style/CommonBtnStyle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onHandelSubmit = () => {};

  return (
    <AuthWrapper title="Sign Up" variant="h1">
      <form onSubmit={handleSubmit(onHandelSubmit)}>
        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Name</InputLabel>
          <OutlinedInput label="Enter Your Name" {...register("name", { required: true, minLength: 3 })} error={!!errors.name} />
          <FormHelperText>{errors.name?.type === "required" ? "Please Input Your Name" : errors.name?.type === "minLength" ? "Minimum three characters required" : ""}</FormHelperText>
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Email</InputLabel>
          <OutlinedInput type="email" label="Enter Your Email" />
          <FormHelperText></FormHelperText>
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Phone Number</InputLabel>
          <OutlinedInput type="number" label="Enter Your Phone Number" />
          <FormHelperText></FormHelperText>
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Password</InputLabel>
          <OutlinedInput type="password" label="Enter Your Password" />
          <FormHelperText></FormHelperText>
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
