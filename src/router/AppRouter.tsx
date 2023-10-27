import { Routes, Route } from "react-router-dom"
import Home from "../views/home"
import Checkout from "../views/checkout"
import ProductPage from "../views/pdp"

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