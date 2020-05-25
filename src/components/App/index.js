import React from "react";
import "./App.scss";
import ItemForm from "../ItemForm";
import Receipt from "../Receipt";
import Header from "../Header";
import Basket from "../Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemForm />
      <Basket />
      <Receipt />
    </div>
  );
}

export default App;
