import { Link } from 'react-router-dom';

export default function Productcard({ data, baseUrl }) {


  const handleChange= (e)=>{
    e.preventDefault();
  }
  return (
    <div>
     <Link to={data.url}>  
        <div className='top'>
          <img src={baseUrl + data.image_url} alt="" />
          <span>{data.options[data.options.length - 1].percentage}% off</span>
          <div className='box'>
            <div className='radius'></div>
          </div>
        </div>

        <p>{data.category}</p>
        <h3>{data.name}</h3>

        <select name="" id="" onChange={handleChange}>
          {data.options?.map((item, index) => (
            <option value={item.quantity} key={index}>{item.quantity}</option>
          ))}
        </select>

        <h2> ₹ {data.options[data.options.length - 1].seller_price}<del>₹ {data.options[data.options.length - 1].fixed_price}</del></h2>

        <div className="bottom">
          <button><img src="https://bigbasketjson.netlify.app/savelater.svg" /></button>
          <button>Add</button>
        </div>
      </Link>
    </div>
  );
}
