import { useEffect } from "react";
import axios from "axios";

const Cards = (props) => {
  const { cardView, setCardView } = props;

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((res) => {
        console.log(res.data.results);
        setCardView(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {cardView.map((card, index) => (
        <div key= {index}>
          {card.name} 
        </div>
      ))}
    </div>
  );
};

export default Cards;
