import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/admin/AddProduct";
import AddShop from "./pages/admin/AddShop";
import AllProducts from "./pages/admin/AllProducts";
import Dashboard from "./pages/admin/Floors";
import Products from "./pages/admin/Products";
import Shops from "./pages/admin/Shops";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/user/Cart";
import ConfirmOrder from "./pages/user/confirmOrder";
import Home from "./pages/user/Home";
import ProductDetail from "./pages/user/ProductDetail";
import UserProduct from "./pages/user/products";
import AllShops from "./pages/user/shops";
import CustomerProducts from "./pages/user/customerProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addshop" element={<AddShop />} />
        <Route path="/allshops" element={<AllShops />} />
        <Route path="/allAdminShops" element={<AllProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customerProducts" element={<CustomerProducts />} />
        <Route path="/" element={<Home />} />
        <Route path="userProducts/:id" element={<UserProduct />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
      </Routes>
    </>
  );
}

export default App;
