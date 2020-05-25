import React from "react";
import { connect } from "react-redux";
import "./Receipt.scss";
import { Button } from "react-bootstrap";
import { clearReceipt } from "../../Actions";

const mapStateToProps = (state) => {
  return {
    receipt: state.receipt,
  };
};

const mapDispatchToProps = { clearReceipt };

const Receipt = ({ receipt, clearReceipt }) => {
  return (
    <div className="Receipt">
      <h1>Receipt</h1>
      <ul>
        {receipt.map((basket, index) => (
          <li key={index}>
            <h4>Basket {index + 1}</h4>
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
      <Button
        variant="danger"
        onClick={() => {
          clearReceipt();
        }}
      >
        Clear Receipt
      </Button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Receipt);
