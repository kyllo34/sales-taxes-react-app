import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./Basket.scss";
import { addBasket, clearBasket } from "../../Actions";

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

const mapDispatchToProps = { addBasket, clearBasket };

const Basket = ({ basket, addBasket, clearBasket }) => {
  return (
    <div className="Basket">
      <h1>Basket</h1>
      <ul>
        {basket.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {basket.items.length > 0 && (
        <div className="summary">
          <div>Sales Tax: {basket.summary.salesTax}</div>
          <div>Total: {basket.summary.total}</div>
        </div>
      )}
      <Button
        variant="primary"
        onClick={() => {
          addBasket(basket);
          clearBasket();
        }}
      >
        Add to Receipt
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          clearBasket();
        }}
      >
        Clear Basket
      </Button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
