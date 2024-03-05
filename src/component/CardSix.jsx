import { useEffect, useState } from "react";
import './CardSix.css';
import { Link } from "react-router-dom";

export default function Footer({ url, heading }) {
    const [data, setData] = useState([]);
    const [baseUrl, setBaseUrl] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/https://bigbasketjson.netlify.app/${url}`);
            const jsonData = await response.json();
            setData(jsonData.banners);
            setBaseUrl(jsonData.baseurl);
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
            <div id="card">
                {data?.map((item) => (
                    <Link to={item.url} key={item.id}>
                        <img src={baseUrl + item.img} alt={`Image ${item.id}`} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
