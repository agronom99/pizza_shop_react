import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://6457ce9b0c15cb1482118f8f.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Похибка отримання даних");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>

      <h4>{pizza.price} $</h4>
    </div>
  );
};

export default FullPizza;
