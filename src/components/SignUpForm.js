import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
    const formik = useFormik({
        initialValues:{
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          passwordConfirm: "",
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
          password: Yup.string().required(" Password is required").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
          passwordConfirm: Yup.string()
            .required("Password confirmation is required")
            .oneOf([Yup.ref("password"), null], "Password must maych"),
        }),
        validateOnMount:true,
    });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" {...formik.getFieldProps("name")}/>
        {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
      </div>
      <div className="formControl">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" {...formik.getFieldProps("email")}/>
        {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
      </div>
      <div className="formControl">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="text" name="phoneNumber" {...formik.getFieldProps("phoneNumber")}/>
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="error">{formik.errors.phoneNumber}</div>
          )}
      </div>
      <div className="formControl">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" {...formik.getFieldProps("password")}/>
        {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
      </div>
      <div className="formControl">
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input id="passwordConfirm" type="password" name="passwordConfirm" {...formik.getFieldProps("passwordConfirm")}/>
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="error">{formik.errors.passwordConfirm}</div>
          )}
      </div>
      <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
    </form>
  );
};

export default SignUpForm;
