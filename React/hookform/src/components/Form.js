const Form = (props) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
  } = props;

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div>
      <form action="" className="Container">
        <div className="input">
          <label htmlFor="">First Name:</label>
          <input type="text" name="firstName" onChange={handleFirstName} />
        </div>
        <div className="input">
          <label htmlFor="">Last Name:</label>
          <input type="text" name="lastName" onChange={handleLastName} />
        </div>
        <div className="input">
          <label htmlFor="">Email:</label>
          <input type="text" name="email" onChange={handleEmail} />
        </div>
        <div className="input">
          <label htmlFor="">Password:</label>
          <input type="text" name="password" onChange={handlePassword} />
        </div>
        <div className="input">
          <label htmlFor="">Confirm Password:</label>
          <input
            type="text"
            name="confirmPassword"
            onChange={handleConfirmPassword}
          />
        </div>
      </form>

      <div>
        <h2>Your Form Data</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default Form;
