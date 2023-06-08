import React from "react";

function Categories ({value, onChangeCategory}) {
  // const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    "Усі",
    "М'ясні",
    "Вегетаріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];
  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
       
      </ul>
    </div>
  );
};

export default Categories;
