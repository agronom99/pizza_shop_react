// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";


import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from './pages/Cart'
import NotFound from "./pages/NotFound";

// import pizzas from "./assets/pizzas.json";

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div class Name="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          {/* <NotFound /> */}
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
