import { Route, Routes } from "react-router-dom";
import Home from "../component/Home"
import ProductPage from "../component/ProductPage";

export default function AllRoutes() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<ProductPage/>}/>

      </Routes>
    </div>
  )
}
