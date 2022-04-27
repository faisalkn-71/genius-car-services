import axios from 'axios'
import { useState, useEffect } from 'react'
const useToken = user => {
    const [token, setToken] = useState()
    useEffect(() => {
        const getToken = async () => {
            const email = user.user.email;
            if (email) {
                const { data } = await axios.post("https://lit-sierra-17511.herokuapp.com/login", { email })
                // console.log(data)
                setToken(data.accessToken)
                localStorage.setItem('accessToken', data.accessToken);
            }

        }
        getToken()
    }, [user])
    return [token]
}

export default useToken;