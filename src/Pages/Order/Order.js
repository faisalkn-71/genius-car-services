import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../../api/axiosPrivate'

const Order = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getOrder = async () => {
            const email = user.email;
            const url = `https://lit-sierra-17511.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setOrder(data);

            }
            catch (error) {
                console.log(error.message)
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth)
                    navigate('/login')
                }
            }
        }

        getOrder();

    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your Orders: {order.length}</h2>
            {
                order.map(ord => <div
                key={ord._id}
                >
                    <p>{ord.email} : {ord.service}</p>
                </div>)
            }
        </div>
    );
};

export default Order;