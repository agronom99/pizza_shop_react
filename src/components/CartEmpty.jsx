import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div>
      <div className="cart cart--empty">
        <h2>
          Кошик порожній 
          {/* <icon>😕</icon> */}
        </h2>
        <p>
          Швидше за все, ви ще не замовляли піцу.
          <br />
          Для того, щоб замовити піцу, перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </div>
  );
};
export default CartEmpty;
