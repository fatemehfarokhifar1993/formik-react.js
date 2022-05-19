const SignUpForm = () => {
  return (
    <form>
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input type="text" name="email" />
      </div>
      <div className="formControl">
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" />
      </div>
      <div className="formControl">
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div className="formControl">
        <label>Password Confirm</label>
        <input type="password" name="passwordConfirm" />
      </div>
      <button type="submit">
          Submit
        </button>
    </form>
  );
};

export default SignUpForm;
