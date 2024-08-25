import Home from "./pages/home/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "@/pages/login/Login"
import Layout from "./pages/layout/Layout"
import Detail from "./pages/detail/Detail"
import Wishlist from "./pages/wishlist/Wishlist"
import Cart from "./pages/cart/Cart"

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="product/:id" element={<Detail/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App