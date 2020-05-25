import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import './ItemForm.scss'
import { addItem } from '../../Actions'
import { connect } from 'react-redux'

const ItemForm = ({ addItem }) => {
const { register, handleSubmit, reset} = useForm();
const onSubmit = data => {
  addItem(data);
  reset();
}

  return (
    <div className="item-form">
      <h1>ItemForm</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Item Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" name="description" ref={register} />
        </Form.Group>

        <Form.Group controlId="formBasicCategory">
          <Form.Label>Item Category</Form.Label>
          <Form.Control as="select" name="category" ref={register} custom>
            <option value="goods">Goods</option>
            <option value="books">Books</option>
            <option value="food">Food</option>
            <option value="medical">Medical Products</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" min="0" step="0" defaultValue="1" name="quantity" ref={register} />
        </Form.Group>

        <Form.Group controlId="formBasicImported">
          <Form.Check type="checkbox" label="Imported" name="imported" ref={register} />
        </Form.Group>

        <Form.Group controlId='formBasicCost'>
          <Form.Label>Cost</Form.Label>
          <Form.Control type="number" name="cost" step="0.01" defaultValue="0" ref={register} />
        </Form.Group>
        
        <Button type="submit">Add to basket</Button>
      </Form>
    </div>
  );
};

export default connect(null, {addItem})(ItemForm);
