import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { AuthContexts } from "./Context/AuthContext";
import AddProduct from "./Product/AddProduct";

const Navbar = () => {
  const { state, Logout } = useContext(AuthContexts);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowSidePopup, setIsShowSidePopup] = useState(false);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);
  const [isShowScreen, setIsShowScreen] = useState(false);
  const [isShowLoginPopup, setIsShowLoginPopup] = useState(false);
  const [isShowRegisterPopup, setIsShowRegisterPopup] = useState(false);
  const [isShowLogoutPopup, setIsShowLogoutPopup] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isShowAddProductPopup, setIsShowAddProductPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigateTo = useNavigate();

  useEffect(() => {
    // const currentUserDetails = JSON.parse(localStorage.getItem("current-user"));
    if (state?.currentUser?.email) {
      setIsUserLoggedIn(true);
      setCurrentUser(state.currentUser);
    } else {
      setIsUserLoggedIn(false);
      setCurrentUser({});
    }
  }, [state]);

  function openAddProductPopup() {
    setIsShowScreen(true);
    setIsShowAddProductPopup(true);
  }

  function openPopup() {
    setIsShowPopup(true);
    setIsBackgroundWhite(true);
  }

  function closePopup() {
    setIsShowPopup(false);
    setIsBackgroundWhite(false);
  }

  function openSidePopup() {
    setIsShowSidePopup(true);
  }
  function closeSidePopup() {
    setIsShowSidePopup(false);
  }

  function openLogoutPopup() {
    setIsShowLogoutPopup(true);
  }

  function closeLogoutPopup() {
    setIsShowLogoutPopup(false);
  }

  function registerLogin() {
    setIsShowScreen(true);
    setIsShowRegisterPopup(true);
  }

  function showLoginPopup() {
    setIsShowRegisterPopup(false);
    setIsShowLoginPopup(true);
  }

  function showRegisterPopup() {
    setIsShowLoginPopup(false);
    setIsShowRegisterPopup(true);
  }

  function closeScreenPopup() {
    setIsShowLoginPopup(false);
    setIsShowRegisterPopup(false);
    setIsShowAddProductPopup(false);
    setIsShowScreen(false);
  }

  function RedirectToHomePage() {
    navigateTo("/");
  }

  function RedirectToMens() {
    navigateTo("/mens-multiple-products");
  }

  function RedirectToWomens() {
    navigateTo("/womens-multiple-products");
  }

  function RedirectToKids() {
    navigateTo("/kids-multiple-products");
  }

  function RedirectToHomeKitchen() {
    navigateTo("/home-kitchen-multiple-products");
  }

  function RedirectToBeauty() {
    navigateTo("/beauty-multiple-products");
  }

  function RedirectToGadgets() {
    navigateTo("/gadgets-multiple-products");
  }

  function RedirectToJewellery() {
    navigateTo("/jewellery-multiple-products");
  }

  function RedirectToAccessories() {
    navigateTo("/accessories-multiple-products");
  }

  function RedirectToProfile() {
    navigateTo("/profile");
  }

  function RedirectToCart() {
    navigateTo("/cart");
  }

  function RedirectToWishlist() {
    navigateTo("/wishlist");
  }

  return (
    <>
      <div id="navbar">
        <div id="navbar-left">
          <div id="logo" onClick={RedirectToHomePage}>
            <img
              src="https://www.tatacliq.com/src/general/components/img/group.svg"
              alt="logo"
            />
          </div>
        </div>
        <div id="navbar-right">
          <div id="navbar-right-up">
            <div id="right-up-left">
              <h5>Tata CLiQ Luxury</h5>
            </div>
            <div id="right-up-right">
              <h5>CLiQ Cash</h5>
              <h5>Gift Card</h5>
              <h5>CliQ Care</h5>
              <h5>Track Orders</h5>
              {!isUserLoggedIn && (
                <h5 onMouseOver={openSidePopup} onMouseLeave={closeSidePopup}>
                  Sign in/Sign Up
                </h5>
              )}
              {isUserLoggedIn && (
                <h5
                  onMouseOver={openLogoutPopup}
                  onMouseLeave={closeLogoutPopup}
                >
                  Hi {currentUser?.name?.toUpperCase()} ({currentUser?.role})
                </h5>
              )}
            </div>
          </div>
          <div id="navbar-right-down">
            <div id="right-down-1">
              <div
                id="categories"
                style={{
                  backgroundColor: isBackgroundWhite
                    ? "white"
                    : "rgb(33, 33, 33)",
                  color: isBackgroundWhite ? "black" : "white",
                }}
                onMouseOver={openPopup}
                onMouseLeave={closePopup}
              >
                <h4>Categories</h4>
                <i
                  class={
                    isShowPopup
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }
                  style={{
                    paddingTop: "3px",
                    paddingLeft: "3px",
                    fontSize: "18px",
                  }}
                ></i>
              </div>
              <div id="brands">
                <h4>Brands</h4>
                <i
                  class="fa-solid fa-angle-down"
                  style={{
                    paddingTop: "3px",
                    paddingLeft: "3px",
                    fontSize: "18px",
                  }}
                ></i>
              </div>
            </div>
            <div id="right-down-2">
              <div id="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for products" />
              </div>
            </div>
            <div id="right-down-3">
              <i
                class="fa-regular fa-heart fa-lg"
                onClick={RedirectToWishlist}
                style={{ cursor: "pointer" }}
              ></i>
              {currentUser.role == "Buyer" && (
                <i
                  class="fa-solid fa-bag-shopping fa-lg"
                  onClick={RedirectToCart}
                  style={{ cursor: "pointer" }}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------navbar-showpopup----------------------- */}
      {isShowPopup && (
        <div
          id="navbar-popup"
          onMouseOver={openPopup}
          onMouseLeave={closePopup}
        >
          <div id="popup-left">
            <div className="left-menu-items" onClick={RedirectToWomens}>
              <span>Women's Fashion</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="left-menu-items" onClick={RedirectToMens}>
              <span>Men's Fashion</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="left-menu-items" onClick={RedirectToKids}>
              <span>Kid's Fashion</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="left-menu-items" onClick={RedirectToHomeKitchen}>
              <span>Home & Kitchen</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="left-menu-items" onClick={RedirectToBeauty}>
              <span>Beauty</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="left-menu-items" onClick={RedirectToGadgets}>
              <span>Gadgets</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="left-menu-items" onClick={RedirectToJewellery}>
              <span>Jewellery</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="left-menu-items" onClick={RedirectToAccessories}>
              <span>Accessories</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          {/* <div id="popup-right"></div> */}
        </div>
        //<--------------------------Nvabar-Login/Register-popup----------------------------------------->
      )}
      {isShowSidePopup && (
        <div
          id="account-popup"
          onMouseOver={openSidePopup}
          onMouseLeave={closeSidePopup}
        >
          <div id="login-register-btn" onClick={registerLogin}>
            <button>Login/Register</button>
          </div>
          <div className="side-popup" onClick={RedirectToProfile}>
            <img
              src="https://www.tatacliq.com/src/general/components/img/profile.png"
              alt="profile"
              style={{ height: "25px", width: "25px" }}
            />
            <p>My Account</p>
          </div>
          <div className="side-popup">
            <img
              src="https://www.tatacliq.com/src/general/components/img/order-history.svg"
              alt="profile"
            />
            <p>Order History</p>
          </div>
          <div className="side-popup">
            <img
              src="https://www.tatacliq.com/src/general/components/img/WL5.svg"
              alt="profile"
            />
            <p>My Wishlist</p>
          </div>
          <div className="side-popup">
            <img
              src="https://www.tatacliq.com/src/account/components/img/alert.svg"
              alt="profile"
            />
            <p>Alert & Coupon</p>
          </div>
          <div className="side-popup">
            <img
              src="https://www.tatacliq.com/src/account/components/img/giftCards.svg"
              alt="profile"
            />
            <p>Gift Card</p>
          </div>
          <div className="side-popup">
            <img
              src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg"
              alt="profile"
            />
            <p>CLiQ Cash</p>
          </div>
        </div>
      )}

      {/* <--------------------------Nvabar-Logout/Profile-popup-----------------------------------------> */}
      {isShowLogoutPopup && (
        <div
          id="account-popup"
          style={{ width: "12%" }}
          onMouseOver={openLogoutPopup}
          onMouseLeave={closeLogoutPopup}
        >
          <div
            className="side-popup"
            style={{ width: "50%" }}
            onClick={RedirectToProfile}
          >
            <img
              src="https://www.tatacliq.com/src/general/components/img/profile.png"
              alt="profile"
              style={{ height: "28px", width: "28px" }}
            />
            <p>Profile</p>
          </div>
          {currentUser.role == "Seller" && (
            <div
              className="side-popup"
              style={{ width: "50%" }}
              onClick={openAddProductPopup}
            >
              <i style={{ marginRight: "12px" }} class="fa-solid fa-plus"></i>
              <p>Add Product</p>
            </div>
          )}
          <div className="side-popup" style={{ width: "50%" }} onClick={Logout}>
            <img
              src="https://www.tatacliq.com/src/account/components/img/settingsRed.svg"
              alt="logout"
            />
            <p>Logout</p>
          </div>
        </div>
      )}

      {/* ----------------------------Register-Login-popup---------------------------------------------- */}
      {isShowScreen && (
        <div id="screen">
          <Register
            isShowRegisterPopup={isShowRegisterPopup}
            closeScreenPopup={closeScreenPopup}
            showLoginPopup={showLoginPopup}
            setIsShowLoginPopup={setIsShowLoginPopup}
            setIsShowRegisterPopup={setIsShowRegisterPopup}
          />
          <Login
            isShowLoginPopup={isShowLoginPopup}
            closeScreenPopup={closeScreenPopup}
            showRegisterPopup={showRegisterPopup}
            setIsShowScreen={setIsShowScreen}
            setIsShowLoginPopup={setIsShowLoginPopup}
            setIsShowRegisterPopup={setIsShowRegisterPopup}
          />
          <AddProduct
            isShowAddProductPopup={isShowAddProductPopup}
            closeScreenPopup={closeScreenPopup}
            setIsShowScreen={setIsShowScreen}
            setIsShowAddProductPopup={setIsShowAddProductPopup}
          />
          {/* {isShowRegisterPopup && (
            <div id="register">
              <div className="close">
                <i
                  class="fa-solid fa-xmark fa-xl"
                  onClick={closeScreenPopup}
                ></i>
              </div>
              <div className="header">
                <h1>Welcome To Tata CLiQ</h1>
              </div>
              <form >
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <input type="password" placeholder="Enter Your Password" />
                <button type="submit">Register</button>
              </form>
              <p>
                Already have an account?
                <span onClick={showLoginPopup}> Login here</span>
              </p>
              <div className="policies">
                <span>
                  By continuing, you agree to our <b>Terms of Use</b> and{" "}
                  <b>Privacy Policy</b>
                </span>
              </div>
            </div>
          )} */}
          {/* {isShowLoginPopup && (
            <div id="login">
              <div className="close">
                <i
                  class="fa-solid fa-xmark fa-xl"
                  onClick={closeScreenPopup}
                ></i>
              </div>
              <div className="header">
                <h1>Welcome To Tata CLiQ</h1>
              </div>
              <form>
                <input type="email" placeholder="Enter Your Email" />
                <input type="password" placeholder="Enter Your Password" />
                <button>Login</button>
              </form>
              <p>
                Don't have an account?
                <span onClick={showRegisterPopup}> Register here</span>
              </p>
              <div className="policies">
                <span>
                  By continuing, you agree to our <b>Terms of Use</b> and
                  <b> Privacy Policy</b>
                </span>
              </div>
            </div>
          )} */}
        </div>
      )}
    </>
  );
};

export default Navbar;
