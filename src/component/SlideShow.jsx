import { useEffect, useState } from "react";
import './SlideShow.css';
export default function Footer({ url, heading }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [baseUrl, setbaseUrl] = useState('');
    const [Para, setPara] = useState('');
    const [img ,setImg] = useState(0);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.images);
            setbaseUrl(jsonData.baseurl);
            console.log(jsonData.images[1]);
            setPara(jsonData.paragraphs);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleClickLeft = ()=>{
        if(img === 3){
            setImg(0);
        }else{
            setImg(img+1);
        }
    }


    const handleClickRight = ()=>{
        if(img === 0){
            setImg(3);
        }else{
            setImg(img-1);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading</h1>;
    }

    return (
        <div className="container">
            <div id="SlideShow">
                <button id="left" onClick={handleClickLeft}>{"<"}</button>
                <img src={baseUrl+data[img]} />
                <ul>
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                    <li></li>
                </ul>
                <button id="right" onClick={handleClickRight}>{">"}</button>
            </div>
            <h3>{heading}</h3>
            {Para?.map((item, index) => (
                <p key={index + 1}>{item}</p>
            ))}
        </div>
    );
}
