import { Link } from 'react-router-dom';
import Productcard from './Productcard';
import { useEffect, useState } from "react";
import './Product.css';

export default function ProductPage({ url, heading }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [baseUrl, setBaseUrl] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.products);
      setBaseUrl(jsonData.base_url);
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
    <div>
      <div className="container">
        <div className="top ProductRow">
          <h1>{heading}</h1>
        </div>

        <div className='ProductRowBottom'>
          {
            data.map((item, index) => (
              <Productcard data={item} baseUrl={baseUrl} key={index} />
            ))
          }

        </div>
      </div>
    </div>
  );
}
