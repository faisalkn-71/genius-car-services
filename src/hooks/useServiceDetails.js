import {useState, useEffect} from 'react'
const useServiceDetails = serviceId => {
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://lit-sierra-17511.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return [service]
}

export default useServiceDetails;