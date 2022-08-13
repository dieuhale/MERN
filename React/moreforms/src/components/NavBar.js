const NavBar = (props) => {
  const { initialValue, setUser } = props;

  const handleReset = (e) => {
    console.log(e);
    setUser(initialValue);
  };
  return (
    <div onSelect={handleReset}>
      <div href="#" eventKey="Register">
        
      </div>
    </div>
  );
};

export default NavBar;
