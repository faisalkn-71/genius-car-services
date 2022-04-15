import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='services' className='container-fluid mt-5'>
            
            <div class="row">
                <div class="col"><hr/></div>
                <div class="col-auto">
                    <h2 className='text-primary mb-5'>Our Services</h2>
                </div>
                <div class="col"><hr/></div>
            </div>
           
           <div className='services-container'>
           {
                services.map(service => <Service
                    key = {service.id}
                    service = {service}
                ></Service>)
            }
           </div>

        </div>
    );
};

export default Services;