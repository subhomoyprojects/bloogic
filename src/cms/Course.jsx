import { useParams } from "react-router-dom";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import { HeaderHolder } from "../style/CommonHeaderStyle";
import { CustomInputHolder } from "../style/CustomInputStyle";
import { Container, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";
import { CommonBtn } from "../style/CommonBtnStyle";
import { useForm } from "react-hook-form";
import { CourseWrapperStyle } from "../style/CourseWrapperStyle";
import { useDispatch, useSelector } from "react-redux";
import { CourseApplyAsyncThunk } from "../redux/slice/CourseSlice";
import { useEffect, useState } from "react";

export default function Course() {
  const { id } = useParams();
  const [storeFindId, setStoreFindId] = useState("");
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const { courseItems } = useSelector((state) => state.Course);

  useEffect(() => {
    let findId = courseItems.find((items) => items._id === id);
    setStoreFindId(findId.slug);
  }, [courseItems, id]);

  const onSubmit = async (data) => {
    try {
      const { name, email, phone, city, address, qualification, programing_knowledge, experiance } = data;
      const payload = {
        name: name,
        email: email,
        phone: phone,
        city: city,
        address: address,
        qualification: qualification,
        programing_knowledge: programing_knowledge,
        experiance: experiance,
      };
      await dispatch(CourseApplyAsyncThunk({ payload, id }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <HeaderHolder className="text-center">
          <CommonHeaderComponent title={`Apply Course (${storeFindId})`} variant="h2" />
        </HeaderHolder>
        <Container maxWidth="sm">
          <CourseWrapperStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <OutlinedInput type="number" label="Enter Your Phone Number" {...register("phone", { required: true, maxLength: 10 })} error={!!errors.phone} />
                <FormHelperText>{errors.phone?.type == "required" ? "Mobile Number Required" : errors.phone?.type === "maxLength" ? "Put valid mobile number" : ""}</FormHelperText>
              </CustomInputHolder>

              <CustomInputHolder variant="outlined">
                <InputLabel>Enter Your City</InputLabel>
                <OutlinedInput type="text" label="Enter Your City" {...register("city", { required: true })} error={!!errors.city} />
                <FormHelperText>{errors.city?.type == "required" ? "Enter Your City" : ""}</FormHelperText>
              </CustomInputHolder>

              <CustomInputHolder variant="outlined">
                <InputLabel>Enter Your Address</InputLabel>
                <OutlinedInput type="text" label="Enter Your Address" {...register("address", { required: true })} error={!!errors.address} />
                <FormHelperText>{errors.address?.type == "required" ? "Enter Your Address" : ""}</FormHelperText>
              </CustomInputHolder>

              <CustomInputHolder variant="outlined">
                <InputLabel>Enter Your Qualification</InputLabel>
                <OutlinedInput type="text" label="Enter Your Qualification" {...register("qualification", { required: true })} error={!!errors.qualification} />
                <FormHelperText>{errors.qualification?.type == "required" ? "Enter Your Qualification" : ""}</FormHelperText>
              </CustomInputHolder>

              <CustomInputHolder variant="outlined">
                <InputLabel>Enter Your Programming Knowledge</InputLabel>
                <OutlinedInput type="text" label="Enter Your Programming Knowledge" {...register("programing_knowledge", { required: true })} error={!!errors.programing_knowledge} />
                <FormHelperText>{errors.programing_knowledge?.type == "required" ? "Enter Your Programming Knowledge" : ""}</FormHelperText>
              </CustomInputHolder>

              <CustomInputHolder variant="outlined">
                <InputLabel>Enter Your Experience</InputLabel>
                <OutlinedInput type="text" label="Enter Your Experience" {...register("experiance", { required: true })} error={!!errors.experiance} />
                <FormHelperText>{errors.experiance?.type == "required" ? "Enter Your Experience" : ""}</FormHelperText>
              </CustomInputHolder>

              <CommonBtn type="submit" variant="contained" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </CommonBtn>
            </form>
          </CourseWrapperStyle>
        </Container>
      </section>
    </>
  );
}
