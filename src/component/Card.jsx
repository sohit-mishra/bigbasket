import { useEffect, useState } from "react";
import './Card.css';
export default function Footer({url ,heading}) {
    const [data, setData] = useState([]);
    const [baseUrl, setbaseUrl] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.images);
            setbaseUrl(jsonData.baseurl);
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1>{heading}</h1>
            <div id="cardFour">
                {data?.map((item) => (
                    <img src={baseUrl + item} key={item} />
                ))}
            </div>
        </div>
    );
}
