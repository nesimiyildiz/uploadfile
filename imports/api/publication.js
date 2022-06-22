import {Meteor} from 'meteor/meteor';
import { Customer } from './Customers';

Meteor.publish('customerList',(query,opt)=>{
    let res;
    if(!opt){
        opt={name:1}
    }
    if(query){
        res=Customer.find(query,opt);
    }else{
        res=Customer.find({},opt);
    }
    return res;
});

