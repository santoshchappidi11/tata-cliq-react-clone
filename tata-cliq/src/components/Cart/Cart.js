import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
// import mensData from "./../../data/ProdDetailsMen.json";
import { useNavigate } from "react-router-dom";
import { AuthContexts } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import api from "../../ApiConfig";

const Cart = () => {
  const { state } = useContext(AuthContexts);
  const [currentUser, setCurrentUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (state?.currentUser) {
      setIsUserLoggedIn(true);
      setCurrentUser(state.currentUser);
    } else {
      setIsUserLoggedIn(false);
      setCurrentUser({});
    }
  }, [state]);

  useEffect(() => {
    const getAllCartProducts = async () => {
      const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));
      if (token) {
        try {
          const response = await api.post("/get-cart-products", { token });

          if (response.data.success) {
            setCartProducts(response.data.products);
          } else {
            setCartProducts([]);
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
    };

    getAllCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts?.length) {
      let totalPrice = 0;
      for (let i = 0; i < cartProducts.length; i++) {
        totalPrice = totalPrice + parseInt(cartProducts[i].price);
      }
      setCartTotalPrice(totalPrice);
    } else {
      setCartTotalPrice(0);
    }
  }, [cartProducts]);

  const removeProduct = async (productId) => {
    const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));

    if (token) {
      try {
        const response = await api.post("/remove-cart-product", {
          token,
          productId,
        });

        if (response.data.success) {
          setCartProducts(response.data.products);
          toast.success(response.data.message);
        } else {
          toast.success(response.data.message);
          setCartProducts([]);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const removeAllProducts = async () => {
    const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));

    if (token) {
      try {
        const response = await api.post("/remove-all-cart-products", { token });

        if (response.data.success) {
          setCartProducts([]);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div id="cart">
      <div id="cart-header">
        <h2>My Bag</h2>
        <div id="cart-pincode">
          <p>Delhi, 110001</p>
          <span>Change PIN code</span>
        </div>
      </div>
      <div id="cart-coupon">
        <p>
          Apply a relevant <b>coupon code</b> here to avail any additional
          discount. Applicable <b>cashback</b> if any will be credited to your
          account as per T&C.
        </p>
      </div>
      <div id="cart-body">
        <div id="main-cart">
          <div id="cart-left">
            <div id="cart-neupass">
              <img
                src="https://www.tatacliq.com/src/cart/components/img/Delivery.svg"
                alt="cart"
              />
              <p>
                Congratulations NeuPass User!! Your order is eligible for
                <b> FREE Shipping!</b>
              </p>
            </div>
            <div id="cart-products">
              {cartProducts?.length ? (
                cartProducts.map((product, index) => (
                  <div key={product._id} className="cart-product">
                    <div className="cart-product-left">
                      <div className="product-img">
                        <img src={product.image} alt="product" />
                      </div>
                    </div>
                    <div className="cart-product-right">
                      <div className="product-up">
                        <div className="product-name-delivery">
                          <div className="product-name">
                            <p>{product.name}</p>
                          </div>
                          <div className="product-delivery">
                            <img
                              style={{
                                height: "25px",
                                width: "25px",
                                margin: "0 10px",
                              }}
                              src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg"
                              alt="delivery"
                            />
                            <p>
                              Delivery by{" "}
                              <span style={{ fontWeight: "500" }}>
                                16th July
                              </span>{" "}
                              |<b style={{ color: "green" }}> FREE</b>
                            </p>
                          </div>
                        </div>
                        <div className="product-price">
                          <h5>{product.price}</h5>
                        </div>
                        <div className="product-others">
                          <div className="product-color">
                            <p
                              style={{
                                fontWeight: "300",
                                fontSize: "14px",
                              }}
                            >
                              Color: Ivory
                            </p>
                          </div>
                          <div className="product-size">
                            <p
                              style={{
                                fontWeight: "300",
                                fontSize: "14px",
                              }}
                            >
                              Size: XL
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="product-down">
                        <div className="quantity">
                          <p style={{ fontWeight: "300", fontSize: "14px" }}>
                            Quantity:
                          </p>
                          <span>1</span>
                          <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="wishlist">
                          <img
                            src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                            alt="wishlist"
                          />
                          <p style={{ marginLeft: "5px" }}>Save to wishlist</p>
                          <span
                            onClick={() => removeProduct(product._id)}
                            style={{ marginLeft: "30px", cursor: "pointer" }}
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div id="no-prod-msg">
                  <h2>No products in the cart!</h2>
                </div>
              )}
            </div>
            {/* ---------------continue shopping--------------------------- */}
            <div id="continue-shop">
              <button onClick={() => navigateTo("/")}>Continue Shopping</button>
            </div>
          </div>
          <div id="cart-right">
            <div id="cart-right-header">
              <div id="right-coupons">
                <img
                  style={{
                    height: "25px",
                    width: "25px",
                    marginRight: "10px",
                  }}
                  src="https://www.tatacliq.com/src/general/components/img/coupon.png"
                  alt="coupon"
                />
                <h4 style={{ fontWeight: "600" }}>Check for Coupons</h4>
              </div>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div id="cart-right-body">
              <div id="price-details">
                <div className="details">
                  <p>Bag Total</p>
                  <span>₹{cartTotalPrice}</span>
                </div>
                <div className="details">
                  <p>Shipping Charge</p>
                  <h4 style={{ color: "rgb(0,150,77)" }}>FREE</h4>
                </div>
                <div className="details">
                  <p>Bag Subtotal</p>
                  <span>₹{cartTotalPrice}</span>
                </div>
              </div>
              <div id="price-total">
                <div id="total">
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "rgb(61, 61, 61)",
                    }}
                  >
                    Total
                  </h3>
                  <span style={{ fontSize: "20px", fontWeight: "500" }}>
                    ₹ {cartTotalPrice}
                  </span>
                </div>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => removeAllProducts()}
                >
                  Checkout
                </button>
              </div>
            </div>
            <div id="cart-right-footer">
              <img
                src="https://www.tatacliq.com/src/cart/components/img/lock.svg"
                alt="cart"
              />
              <p>
                Safe and secure payments. Easy returns. 100% Authentic products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
