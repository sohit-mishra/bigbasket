import './Navbar.css';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg';
import bigbasket from '../assets/bigbasket.svg';

export default function Navbar() {
    const baseUrl = "https://www.bigbasket.com/media/uploads/banner_images/";

    return (
        <header>
            <div className="container">
                <div className="top">
                    <img src={bigbasket} id='logo'/>
                    <input type='text' placeholder='Search for Products...' />
                    <button> Select Location</button>
                    <button> Login/Sign Up</button>
                    <img src={cart} alt="" id='cart'/>
                </div>

                <div className='bottom'>
                    <button>Shop by Category</button>
                    <ul>
                       <li><Link to="https://www.bigbasket.com/pc/fruits-vegetables/exotic-fruits-veggies">Exotic Fruits & Veggies</Link></li>
                       <li><Link to="https://www.bigbasket.com/pc/beverages/tea">Tea</Link></li>
                       <li><Link to="https://www.bigbasket.com/pc/foodgrains-oil-masala/edible-oils-ghee/ghee-vanaspati">Ghee</Link></li>
                       <li><Link to="https://www.bigbasket.com/pb/nandini">Nandini</Link></li>
                       <li><Link to="https://www.bigbasket.com/pc/fruits-vegetables/fresh-vegetables/">Fresh Vegetables</Link></li>
                       {/* <li><Link to="https://www.bigbasket.com/pb/kelloggs">Kelloggs</Link></li> */}

                    </ul>


                    <img src={baseUrl + 'hp_cmc_m_offer_28_220921_all.png'} alt="" />
                    <img src={baseUrl + 'Smart_basket-250124-1.png'} alt="" />
                </div>


            </div>
        </header>
    )
}
