import React from "react";
import { connect } from "react-redux";
import "./Receipt.scss";

const mapStateToProps = (state) => {
  return {
    receipt: state.receipt,
  };
};

const Receipt = (receipt) => {
  return (
    <div className="Receipt">
      <h1>Receipt</h1>
      <ul>
        {receipt.receipt.map((basket, index) => (
          <li key={index}>
            <h4>
              Basket {index + 1}
            </h4>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(Receipt);
