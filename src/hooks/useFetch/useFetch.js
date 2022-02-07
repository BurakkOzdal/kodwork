import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);
    return{data}
}

export default useFetch;