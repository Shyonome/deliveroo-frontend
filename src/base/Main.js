import { useState, useEffect } from "react";
import axios from "axios"

import MainPage from "../components/MainPage";
import IsLoading from "../components/IsLoading";

const Main = () => {

    console.log("LOOP DETECTOR");

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get("https://my-deliveroo-server.herokuapp.com/");
            setData(response.data);
            setIsLoading(false);
        }

        fetchData();

    }, []);

    return (
        <div>
            {isLoading ? <IsLoading/> : <MainPage data = {data} /> }
        </div>
    );
}

export default Main;