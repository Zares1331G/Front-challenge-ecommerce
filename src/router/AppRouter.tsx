import { Routes, Route } from "react-router-dom"
import Home from "../views/home"
import Checkout from "../views/checkout"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Checkout />} />
    </Routes>
  )
}

export default AppRouter