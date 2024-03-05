import { useState } from 'react';
import './Navbar.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg';

export default function Navbar() {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const baseUrl = "https://www.bigbasket.com/media/uploads/banner_images/";
    const fetchData = async () => {
        try {
            setLoading(true);
            const req = await fetch('http://localhost:8080/https://bigbasketjson.netlify.app/header.json');
            const finalData = await req.json();
            setData(finalData.top_links);
        } catch (error) {
            setError(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (error) {
        return (<h1>Something is Wrong</h1>)
    }

    if (Loading) {
        return (<h1>Loading</h1>)
    }
    return (
        <header>
            <div className="container">
                <div className="top">
                    <img src='' />
                    <input type='text' placeholder='Search for Products...' />
                    <button> Select Location</button>
                    <button> Login/Sign Up</button>
                    <img src={cart} alt="" />
                </div>

                <div className='bottom'>
                    {console.log(data)}
                    <button>Shop by Category</button>
                    <ul>
                        {data?.map((item,index) => (
                            <li key={index}><Link to={item.url}>{item.display_name}</Link></li>
                        ))}
                    </ul>

                    <img src={baseUrl + 'hp_cmc_m_offer_28_220921_all.png'} alt="" />
                    <img src={baseUrl + 'Smart_basket-250124-1.png'} alt="" />
                </div>


            </div>
        </header>
    )
}
