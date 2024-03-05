import { Route, Routes } from "react-router-dom";
import Home from "../component/Home"

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}
