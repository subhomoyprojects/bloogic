import { FormHelperText, InputLabel, OutlinedInput, Typography } from "@mui/material";
import AuthWrapper from "../components/AuthWrapper";
import { CustomInputHolder } from "../style/CustomInputStyle";
import { CommonBtn } from "../style/CommonBtnStyle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerAuth } from "../redux/slice/AuthSlice";

export default function Signup() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onHandelSubmit = async (data) => {
    try {
      const { name, email, mobile, password } = data;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("password", password);
      const response = await dispatch(registerAuth(formData));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthWrapper title="Sign Up" variant="h1">
      <form onSubmit={handleSubmit(onHandelSubmit)}>
        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Name</InputLabel>
          <OutlinedInput label="Enter Your Name" {...register("name", { required: true, minLength: 3 })} error={!!errors.name} />
          <FormHelperText>{errors.name?.type === "required" ? "Please Input Your Name" : errors.name?.type === "minLength" ? "Name must be at least 3 characters long." : ""}</FormHelperText>
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Email</InputLabel>
          <OutlinedInput type="email" label="Enter Your Email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} error={!!errors.email} />
          <FormHelperText>{errors.email?.type === "required" ? "Please Input Email" : errors.email?.type === "pattern" ? "Please put valid email address" : ""}</FormHelperText>
        </CustomInputHolder>

        <CustomInputHolder variant="outlined">
          <InputLabel>Enter Your Phone Number</InputLabel>
          <OutlinedInput type="number" label="Enter Your Phone Number" {...register("mobile", { required: true, maxLength: 10 })} error={!!errors.mobile} />
          <FormHelperText>{errors.mobile?.type == "required" ? "Mobile Number Required" : errors.mobile?.type === "maxLength" ? "Put valid mobile number" : ""}</FormHelperText>
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
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </AuthWrapper>
  );
}
