import React from "react";
import styles from "../static/PersonCard.module.css";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div className={styles.container}>
      <h1>
        {lastName} {firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

export default PersonCard;
