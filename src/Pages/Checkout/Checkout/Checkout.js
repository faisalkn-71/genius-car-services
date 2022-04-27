import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios'
import {toast } from 'react-toastify';


const Checkout = () => {
     const {serviceId} = useParams()
     const [service] = useServiceDetails(serviceId)
     const [user] = useAuthState(auth);
     if(user){
         console.log(user)
     }
    //  const [user, setUser] = useState({
    //      name: 'Faisal Karim',
    //      email: 'faisalkn19@gmail.com',
    //      address: 'Oxygen, Chittagong, Bangladesh', 
    //      phone: '01882847658'
    //  })

    //  const handleAddress = event => {
    //      console.log(event.target.value)
    //      const {address, ...rest} = user;
    //      const newAddress = event.target.value;
    //      const newUser = {address: newAddress, ...rest};
    //      console.log(newUser)
    //      setUser(newUser)
    //     //  console.log(address, rest)
    //  }
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email : user.email,
            service : service.name, 
            serviceId : serviceId,
            address : event.target.address.value,
            phone : event.target.phone.value,
            
        }
        axios.post('https://lit-sierra-17511.herokuapp.com/order', order)
        .then(response => {
           if(order){
               const {data} = response;
               toast("Your order is booked!!")
               event.target.reset()
           }
        })
    }
        

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Order: {service.name}</h1>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-2' type="text" value={user.displayName} name='name' placeholder='name' required readOnly disabled />
                
                <input className='w-100 mb-2' type="text" value={user.email} name='email' placeholder='email' required readOnly disabled />
                
                <input className='w-100 mb-2' type="text" value={service.name} name='service name' placeholder='service name' required readOnly />
                
                <input className='w-100 mb-2' type="text"  name='address' placeholder='address' required />
               
                <input className='w-100 mb-2' type="text"  name='phone' placeholder='phone' required  />
                
                <input className='btn btn-primary' type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default Checkout;