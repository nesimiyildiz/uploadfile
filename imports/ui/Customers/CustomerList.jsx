import React,{useState}from 'react';
import CustomerCreate from './CustomerCreate';
import { Table,Container,Row } from 'react-bootstrap';
import {useTracker} from 'meteor/react-meteor-data'
import { Customer } from '/imports/api/Customers';
import CustomerDelete from './CustomerDelete';
import CustomerUpdate from './CustomerUpdate';

 const CustomerList = () => {

    const customerListSub=useTracker(()=>{
        const handle=Meteor.subscribe('customerList');
        return !handle.ready();
    },[])

    const customerList=useTracker(()=>{
        return Customer.find().fetch();
    },[customerListSub])
    return (
        <Container>
        <Row className="justify-content-md-center">
        <Table striped bordered hover>
      <thead>
        <tr>
      
          <th>Ad Soyad</th>
          <th>Adres</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
      {
          customerList.map((c,i)=>(
            <tr key={i}>
       
       <td>{c.name}</td>
       <td>{c.adress}</td>
        <td><CustomerDelete delId={c._id}/>
          <CustomerUpdate data={c} />
       </td>
     </tr>
          ))
      }
        
        
      </tbody>
    </Table>
        </Row>
        <CustomerCreate/>
      </Container>
            
            
       
    );
};
export default CustomerList;
