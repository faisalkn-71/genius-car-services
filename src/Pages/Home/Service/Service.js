import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {_id, name, img, description, price} = props.service
    const nevigate = useNavigate();
    const nevigateToServiceDetail = id =>{
            nevigate(`service/${id}`)
    }
    return (
        <div>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => nevigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;