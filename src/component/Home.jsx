// import Footer from "./Footer"
// import Navbar from "./Navbar";
// import Card from "./Card";
// import CardSix from './CardSix';
// import SlideShow from './SlideShow';
import ProductPage from "./ProductPage";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <div className="container">
        <img src="https://www.bigbasket.com/media/uploads/banner_images/B2C022308704-16155-460-DT-all-cm-290224.jpg" style={{ width: "100%", margin: "20px 0" }} />
      </div> */}
      {/* <CardSix url="bigbasketcompnay.json" /> */}
      {/* //------------------My Smart Basket */}
      <ProductPage heading="My Smart Basket"/>
      {/* <Card url="bankoffer.json" heading="Bank Offers" /> */}
      {/* //------------------Best Sellers */}
      {/* <Card url="topoffers.json" heading="Top Offers" />
      <Card url="FruitsandVegetables.json" heading="Fruits and Vegetables" />
      <CardSix url="YourDailyStaples.json" heading="Your Daily Staples" />
      <CardSix url="Beverages.json" heading="Beverages" />
      <Card url="SnacksStore.json" heading="Snacks Store" />
      <Card url="CleaningHousehold.json" heading="Cleaning & Household" />
      <CardSix url="BeautyandHygiene.json" heading="Beauty and Hygiene" />
      <CardSix url="HomeandKitchen.json" heading="Home and Kitchen" />

      <SlideShow url="BigBasketSlideshow.json" heading="bigbasket – online grocery store"/>
      <Footer /> */}
    </div>
  );
}


