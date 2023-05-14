import React from "react";

import style from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>🤔</span>
        <br />
        Нічого не знайдено
      </h1>
      <p> *нажаль дана сторінка відсутня у нашому інтернет-магазині</p>
    </div>
  );
};

export default NotFoundBlock;
