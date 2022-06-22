import React,{useState} from 'react';
import { Button,Col,Modal,Container,Form} from "react-bootstrap";
import {useTracker} from 'meteor/react-meteor-data'
import { BiEditAlt } from "react-icons/bi";
import { Customer } from '/imports/api/Customers';
const CustomerUpdate= (props) => {

    const [name,setName]=useState('');
    const [adress,setAdress]=useState("");
    const [upId,setUpId]=useState("");
   
    const [show, setShow] = useState(false);
   


    const handleClose = () => setShow(false);
    const handleShow = () => {
      const {_id,name,adress} =props.data
        setName(name),
        setAdress(adress);
        setUpId(_id)
        setShow(true)
       
    };

    
  
    const handleUpdate=(id)=>{

      let data={
        name,
        adress
      }
      Meteor.call('customer.update',id,data,(err)=>{
        if(err){
          console.log(err.reason);
        }else{
          alert("güncelleme gerçekleşti");
        }
      })
    }

    
    return (
     <Container>
        
            <Col>
          <Button variant="outline-warning" onClick={handleShow}>
            <BiEditAlt />
          </Button>
        </Col>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <Modal.Title> {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
   
        <Form.Label>Ad Soyad</Form.Label>
        <Form.Control
          type="text"
          value={name}
          placeholder="Ad Soyad"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Adres </Form.Label>
        <Form.Control
          type="text"
          value={adress}
          placeholder="Adres"
          onChange={(e) => setAdress(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => {handleUpdate(upId)}}>
        Submit
      </Button>
    </Form>
        </Modal.Body>
       
      </Modal>
      </Container>
        
    );
};

export default CustomerUpdate;