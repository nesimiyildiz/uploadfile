import React from 'react';
import 'bootstrap'
import popper from 'popper.js'
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import CustomerList from './Customers/CustomerList'
import {ImageUpload} from './ImageUpload/ImageUpload';


export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    {/* <CustomerList/> */}
  <ImageUpload/>
  </div>
);