import { Button,Col, Row,Container } from "react-bootstrap";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
const CustomerDelete = (props) => {
  const { delId } = props;
  console.log(delId);

  const onDelete = (id) => {
    Meteor.call("customer.remove", id, (err) => {
      if (err) {
        console.log(err.reason);
      } else {
        alert("Silindi");
      }
    });
  };
  return (
    <Container fluid="md">
      <Row>
        <Col xs={5}>
          <Button variant="outline-danger" onClick={() => onDelete(delId)}>
            <BsFillTrashFill />
          </Button>
        </Col>
        
       
      </Row>
    </Container>
  );
};

export default CustomerDelete;
