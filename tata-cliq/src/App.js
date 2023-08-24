import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "./App.css";
import MensFashion from "./components/Mens/MensFashion";
import MensMultipleProducts from "./components/Mens/MensMultipleProducts";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import HomeKitchen from "./components/Home&Kitchen/HomeKitchen";
import Gadgets from "./components/Gadgets/Gadgets";
import Beauty from "./components/Beauty/Beauty";
import Accessories from "./components/Accessories/Accessories";
import Jewellery from "./components/Jewellery/Jewellery";
import WomensMultipleProducts from "./components/Womens/WomensMultipleProducts";
import KidsMultipleProducts from "./components/Kids/KidsMultipleProducts";
import Payment from "./components/Payment/Payment";
import Wishlist from "./components/wishlist/Wishlist";
import SingleProduct from "./components/Product/SingleProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/single-product/:id" element={<SingleProduct />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route
          exact
          path="/jewellery-multiple-products"
          element={<Jewellery />}
        />
        <Route
          exact
          path="/accessories-multiple-products"
          element={<Accessories />}
        />
        <Route exact path="/beauty-multiple-products" element={<Beauty />} />
        <Route exact path="/gadgets-multiple-products" element={<Gadgets />} />
        <Route
          exact
          path="/home-kitchen-multiple-products"
          element={<HomeKitchen />}
        />
        <Route
          exact
          path="/kids-multiple-products"
          element={<KidsMultipleProducts />}
        />
        <Route
          exact
          path="/womens-multiple-products"
          element={<WomensMultipleProducts />}
        />
        <Route
          exact
          path="/mens-multiple-products"
          element={<MensMultipleProducts />}
        />
        <Route exact path="/mens-fashion" element={<MensFashion />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
