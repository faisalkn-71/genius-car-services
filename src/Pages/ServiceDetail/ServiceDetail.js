import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetails(serviceId)
    return (
        <div>
            <h2>Service: {service.name} </h2>
            <Link to={`/checkout/${serviceId}`}>
            <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;