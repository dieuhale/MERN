import { useState } from "react";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

const initialUser = {
  firstName: {
    value: "",
    error: null,
  },
  lastName: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
  },
  confirmPassword: {
    value: "",
    error: null,
  },
  submitted: false,
};

function App() {
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState(false);

  return (
    <div>
      {!user.submitted ? (
        <Register
          user={user}
          setUser={setUser}
          error={error}
          setError={setError}
        />
      ) : null}

      <NavBar setUser={setUser} initialValue={initialUser} />
    </div>
  );
}

export default App;
