import { useState } from "react";

const PersonCard = (props) => {
  const {
    item: { firstName, lastName, age, hairColor },
  } = props;

  const [nAge, setNAges] = useState(age);
  const clickHandler = (e) => {
    e.preventDefault();
    setNAges(nAge + 1);
  };

  return (
    <div>
      <h2>
        {firstName}, {lastName}
      </h2>
      <h2>Age: {nAge}</h2>
      <h3>Hair Color: {hairColor}</h3>
      <button onClick={clickHandler}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
};

export default PersonCard;
