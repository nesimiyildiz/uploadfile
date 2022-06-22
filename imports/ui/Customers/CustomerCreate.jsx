import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ToastMessage from "../ToastMessage/ToastMessage";

const CustomerCreate = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");

 
  const onSave = () => {
    console.log(name)
    let data = {
      name,
      adress,
    };
   
    Meteor.call("customer.insert", data, (err) => {
        console.log(data.name);


      if (err) {
        console.log(err.reason);
      } else {

      }
    });
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Ad Soyad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ad Soyad"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Adres </Form.Label>
        <Form.Control
          type="text"
          placeholder="Adres"
          onChange={(e) => setAdress(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => {onSave()}}>
        Submit
      </Button>
    </Form>
  );
};

export default CustomerCreate;
