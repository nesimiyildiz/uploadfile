import { Customer } from "../Customers";


Meteor.methods( {
    'customer.insert'(data){

        const{name,adress}=data;
        check(name,String);
        check(adress,String);
        Customer.insert(data);
    },
    'customer.update'(id,data){
        Customer.update({_id:id},{$set:data})
    },
    'customer.remove'(id){
        Customer.remove({_id:id})
    },
   

});
