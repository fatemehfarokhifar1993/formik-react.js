import { useFormik } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import Input from "./common/Input";
import RadioInput from "./common/RadioInput";
import SelectComponent from "./common/SelectComponent";
const radioOptions = [
  { label: "male", value: "0" },
  { label: "famale", value: "1" },
];
const selectOptions = [
  { label: "select nationality ...", value: "" },
  { label: "Iran", value: "IR" },
  { label: "Germany", value: "GER" },
  { label: "USA", value: "US" },
];

const SignUpForm = () => {
  /*  const savedData = {
    name: "fatemeh",
    email: "f@gmail.com",
    phoneNumber: "12345678910",
    password: "Fatemeh12#",
    passwordConfirm: "Fatemeh12#",
    gender: "1",
  }; */
  const [formValues, setFormValues] = useState(null);

  const formik = useFormik({
    initialValues: formValues || {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
      gender: "",
      nationality: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: Yup.object({
      name: Yup.string()
        .required(" Name is required")
        .min(6, "Name length is not valid"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{11}$/, "Invalid phone number")
        .nullable(),
      password: Yup.string()
        .required(" Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      passwordConfirm: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password"), null], "Password must maych"),
      gender: Yup.string().required("gender is required"),
      nationality: Yup.string().required("Select nationality"),

    }),
    validateOnMount: true,
    enableReinitialize: true,
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/users/1")
      .then((res) => setFormValues(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input formik={formik} name="name" label="Name" />
      <Input formik={formik} name="email" label="Email" />
      <Input formik={formik} name="phoneNumber" label="Phone Number" />
      <Input formik={formik} name="password" label="Password" type="password" />
      <Input
        formik={formik}
        name="passwordConfirm"
        label="Password Confirmation"
        type="password"
      />
      <RadioInput formik={formik} radioOptions={radioOptions} name="gender" />
      <SelectComponent
          selectOptions={selectOptions}
          formik={formik}
          name="nationality"
        />
        
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
