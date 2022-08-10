import "./App.css";
import { useState } from "react";
import PersonCard from "./components/PersonCard";

function App() {
  const personCards = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown",
    },
  ];

  return (
    <div className="App">
      {personCards.map((personCard, index) => {
        return <PersonCard key={index} item={personCard} />;
      })}
    </div>
  );
}

export default App;
