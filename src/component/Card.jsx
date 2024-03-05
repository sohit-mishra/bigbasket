import { useEffect, useState } from "react";
import './Card.css';
export default function Footer({url ,heading}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [baseUrl, setbaseUrl] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/https://bigbasketjson.netlify.app/"+url);
            const jsonData = await response.json();
            setData(jsonData.images);
            setbaseUrl(jsonData.baseurl);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading</h1>;
    }

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
