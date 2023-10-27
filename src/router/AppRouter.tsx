import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Checkout from "../pages/checkout"
import ProductPage from "../pages/pdp"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
    </Routes>
  )
}

export default AppRouter