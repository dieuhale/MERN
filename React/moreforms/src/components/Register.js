const Register = (props) => {
  const { user, setUser, error, setError } = props;
  
  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      if (e.target.value.trim().length < 2) {
        setUser({
          ...user,
          firstName: {
            value: e.target.value,
            error: "First name must be at least 2 characters!",
          },
        });
        setError(true);
      } else {
        setUser({ ...user, firstName: { value: e.target.value, error: null } });
        setError(false);
      }
    }
    if (e.target.name === "lastName") {
      if (e.target.value.trim().length < 2) {
        setUser({
          ...user,
          lastName: {
            value: e.target.value,
            error: "Last name must be at least 2 characters!",
          },
        });
        setError(true);
      } else {
        setUser({ ...user, lastName: { value: e.target.value, error: null } });
        setError(false);
      }
    }
    if (e.target.name === "email") {
      if (e.target.value.trim().length < 2) {
        setUser({
          ...user,
          email: {
            value: e.target.value,
            error: "Email must be at least 2 characters!",
          },
        });
        setError(true);
      } else {
        setUser({ ...user, email: { value: e.target.value, error: null } });
        setError(false);
      }
    }
   
    if (e.target.name === "password") {
      if (e.target.value.trim().length < 8) {
        setUser({
          ...user,
          password: {
            value: e.target.value,
            error: "Password must be at least 8 characters.",
          },
        });
        setError(true);
      } else {
        setUser({
          ...user,
          password: { value: e.target.value, error: null },
        });
        setError(false);
      }
    }
    if (e.target.name === "confirmPassword") {
      if (e.target.value !==user.password.value) {
        setUser({
          ...user,
          confirmPassword: {
            value: e.target.value,
            error: "Passwords must match",
          },
        });
        setError(true);
      } else {
        setUser({
          ...user,
          confirmPassword: { value: e.target.value, error: null },
        });
        setError(false);
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    if (
      user.firstName.value === "" ||
      user.lastName.value === "" ||
      user.email.value === "" ||
      user.password.value === "" ||
      user.confirmPassword.value === ""
    ) {
      console.log("not a valid attempt");
      return;
    }
    if (error) {
      console.log("not a valid attempt");
      return;
    } else {
      setUser({ ...user, submitted: true });
      console.log("valid attempt");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input onChange={handleChange} value={user.firstName.value} name="firstName"></input>
        {user.firstName.error ? (
          <p id="passwordHelpBlock" muted>
            {user.firstName.error}
          </p>
        ) : null}
      </div>
      <div>
        <label>Last Name:</label>
        <input onChange={handleChange} value={user.lastName.value} name="lastName"></input>
        {user.lastName.error ? (
          <p id="passwordHelpBlock" muted>
            {user.lastName.error}
          </p>
        ) : null}
      </div>
      <div>
        <label>Email:</label>
        <input onChange={handleChange} value={user.email.value} name="email"></input>
        {user.email.error ? (
          <p>
            {user.email.error}
          </p>
        ) : null}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={user.password.value}
          onChange={handleChange}
          name="password"
        ></input>
        {user.password.error ? (
          <p id="passwordHelpBlock" muted>
            {user.password.error}
          </p>
        ) : null}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={user.confirmPassword.value}
          onChange={handleChange}
          name="confirmPassword"
        ></input>
        {user.confirmPassword.error ? (
          <p>
            {user.confirmPassword.error}
          </p>
        ) : null}
      </div>
      <div>
        {error ? (
          <button disabled type="submit">
            Register
          </button>
        ) : (
          <button type="submit" >Register</button>
        )}
      </div>
    </form>
  );
 };
  
  
 export default Register;