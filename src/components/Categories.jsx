import React from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    "Усі",
    "М'ясні",
    "Вегетаріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li key={i }
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
        {/* <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li> */}
      </ul>
    </div>
  );
};

export default Categories;
