import { FormHelperText, InputLabel, OutlinedInput, Typography } from "@mui/material";
import AuthWrapper from "../components/AuthWrapper";
import { CustomInputHolder } from "../style/CustomInputStyle";
import { CommonBtn } from "../style/CommonBtnStyle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginAuth } from "../redux/slice/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const payload = {
        email: email,
        password: password,
      };
      await dispatch(LoginAuth(payload));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AuthWrapper title="Login" variant="h1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInputHolder variant="outlined">
            <InputLabel>Enter Your Email</InputLabel>
            <OutlinedInput type="email" label="Enter Your Email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} error={!!errors.email} />
            <FormHelperText>{errors.email?.type === "required" ? "Please Input Email" : errors.email?.type === "pattern" ? "Please put valid email address" : ""}</FormHelperText>
          </CustomInputHolder>

          <CustomInputHolder variant="outlined">
            <InputLabel>Enter Your Password</InputLabel>
            <OutlinedInput type="password" label="Enter Your Password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} error={!!errors.password} />
            <FormHelperText>{errors.password?.type === "required" ? "Password is required" : errors.password?.type === "pattern" ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character" : ""}</FormHelperText>
          </CustomInputHolder>

          <CommonBtn type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </CommonBtn>
        </form>
        <Typography variant="body1" className="pageGo">
          New to member access? <Link to="/signup">Signup</Link>
        </Typography>
      </AuthWrapper>
    </>
  );
}
