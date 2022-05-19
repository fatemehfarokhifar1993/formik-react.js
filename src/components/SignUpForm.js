import { useFormik } from "formik";
const SignUpForm = () => {
    const formik = useFormik({
        initialValues:{
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          passwordConfirm: "",
        },
    });
  return (
    <form >
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" {...formik.getFieldProps("name")}/>
      </div>
      <div className="formControl">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" {...formik.getFieldProps("email")}/>
      </div>
      <div className="formControl">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="text" name="phoneNumber" {...formik.getFieldProps("phoneNumber")}/>
      </div>
      <div className="formControl">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" {...formik.getFieldProps("password")}/>
      </div>
      <div className="formControl">
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input id="passwordConfirm" type="password" name="passwordConfirm" {...formik.getFieldProps("passwordConfirm")}/>
      </div>
      <button type="submit">
          Submit
        </button>
    </form>
  );
};

export default SignUpForm;
