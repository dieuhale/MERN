import "./App.css";
import Form from "./components/Form";
import {useState} from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      <Form
        firstName={firstName}
        lastName ={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
      />
    </div>
  );
}

export default App;
