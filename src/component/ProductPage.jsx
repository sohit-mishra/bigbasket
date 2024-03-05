import { Link } from 'react-router-dom';
import Productcard from './Productcard';
import './Product.css';

export default function ProductPage({ data, heading }) {
  return (
    <div>
      <div className="container">
        <div className="top ProductRow">
          <h1>{heading}</h1>
          <div className="right">
            <Link to="https://www.bigbasket.com/member/smart-basket/">View All</Link>
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

        <Productcard />
      </div>
    </div>
  );
}
