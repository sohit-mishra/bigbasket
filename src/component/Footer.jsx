import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import footerLogo from '../assets/footerLogo.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instgram from '../assets/instgram.svg';
import pinterest from '../assets/pinterest.svg';
import GooglePay from '../assets/GooglePay.svg';
import AppleStore from '../assets/AppleStore.svg';
import seller from '../assets/seller.svg';

export default function Footer({url}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://bigbasketjson.netlify.app/${url}`);
      const jsonData = await response.json();
      setData(jsonData);
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
    <footer>
      <div className="container">
        <div id="top">
          <div className="left">
            <h4>Bigbasket</h4>
            <ul>
              {data.about_section.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="center">
            <h4>Help</h4>
            <ul>
              {data.help_section.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="right">
            <img src={footerLogo} alt="" id="logo" />
            <div className="store">
              <img src={GooglePay} alt="" />
              <img src={AppleStore} alt="" />
            </div>
            <div className="flex">
              <img src={facebook} alt="" />
              <img src={instgram} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
            </div>
            <h4>Vendor Connect</h4>
            <button><img src={seller} alt="" />Become a Seller</button>
          </div>
        </div>

        <hr />

        <div className="cities">
          <h4>Cities We Serve</h4>
          <p>
            {data.cities.map((item, index) => (
              <span key={item.id}>
                {item.name}
                {index !== data.cities.length - 1 && " | "}
              </span>
            ))}
          </p>
        </div>


        <hr />

        <div id="footerPopular">
          <div className="left" style={{ width: "50%" }}>
            <h4>Popular Categories</h4>
            <ul style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
              {data.popular_categories.map((item) => (
                <li key={item.id}>
                  <Link>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="right" style={{ width: "50%" }}>
            <h4>Popular Brands</h4>
            <ul style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
              {data.popular_brands.map((item) => (
                <li key={item.id}>
                  <Link>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
      <div className="bottom">
        <div className="container"><span>Copyright © 2023-2025 Supermarket Grocery Supplies Pvt Ltd</span></div>
      </div>
    </footer>
  );
}
