import React from 'react'

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
     const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
      name:"популярності",
      sortProperty:"rating"
    });

    
     React.useEffect(() => {
      setIsLoading(true);

      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.sortProperty.replace('-','');
      const category = categoryId  > 0 ? `category=${categoryId}` : ''

       fetch(
        `https://6457ce9b0c15cb1482118f8f.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
         .then((res) => res.json())
         .then((arr) => {
           setItems(arr);
           setIsLoading(false);
           // setTimeout(() => {.........}, 1000);
         });
         window.scroll(0,0);
     }, [categoryId, sortType]);
    return (
      <>
        {isLoading && "Загрузка..."}
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={(i)=> setCategoryId(i)} />
          <Sort value={sortType} onChangeSort={(i)=> setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => (
                <PizzaBlock
                  key={obj.id}
                  {...obj}
                  // price={obj.price}
                  // title={obj.title}
                  // image={obj.imageUrl}
                  // sizes={obj.sizes}
                  // types={obj.types}
                />
              ))}
        </div>
      </>
    );
}
 
export default Home;