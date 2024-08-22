import Home from "./pages/home/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import Wishlist from "@/pages/wishlist/Wishlist"
import Login from "@/pages/login/Login"
import Layout from "./pages/layout/Layout"
import Cart from "./pages/cart/Cart"

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App