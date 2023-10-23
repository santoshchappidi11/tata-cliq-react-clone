import React, { useContext, useEffect, useState } from "react";
import "./SingleProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContexts } from "../Context/AuthContext";
import EditProduct from "./EditProduct";
import { toast } from "react-hot-toast";
import api from "../../ApiConfig";
// import mensData from "../../data/ProdDetailsMen.json";

const SingleProduct = () => {
  const navigateTo = useNavigate();
  const { singleProdId } = useParams();
  const { state } = useContext(AuthContexts);
  const [product, setProduct] = useState({});
  const [isShowEditBtn, setIsShowEditBtn] = useState(false);
  const [isShowScreenPopup, setIsShowScreenPopup] = useState(false);
  const [isShowEditProdPopup, setIsShowEditProdPopup] = useState(false);

  // console.log(singleProdId, "ID here");

  useEffect(() => {
    if (state?.currentUser?.role == "Seller") {
      setIsShowEditBtn(true);
    } else {
      setIsShowEditBtn(false);
    }
  }, [state]);

  useEffect(() => {
    const getSingleProductData = async () => {
      try {
        const response = await api.post("/get-singleproduct-data", {
          productId: singleProdId,
        });

        if (response.data.success) {
          setProduct(response.data.product);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getSingleProductData();
  }, [singleProdId]);

  const openEditProdPopup = () => {
    setIsShowScreenPopup(true);
    setIsShowEditProdPopup(true);
  };

  const addToCart = async (productId) => {
    const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));

    if (token) {
      try {
        const response = await api.post("/add-to-cart", { token, productId });

        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const deleteProduct = async (productId) => {
    const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));

    if (token) {
      try {
        const response = await api.post("/delete-your-product", {
          token,
          productId,
        });

        if (response.data.success) {
          navigateTo("/");
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
    <>
      <div id="single-product">
        <div id="left">
          <div id="main-images-1">
            <div className="img-1">
              <img src={product.image} alt="single-product" />
            </div>
            <div className="img-1">
              <img src={product.image} alt="single-product" />
            </div>
          </div>
          <div id="main-images-2">
            <div className="img-2">
              <img src={product.image} alt="single-product" />
            </div>
            <div className="img-2">
              <img src={product.image} alt="single-product" />
            </div>
            <div className="img-2">
              <img src={product.image} alt="single-product" />
            </div>
          </div>
        </div>
        <div id="right">
          <div id="sec-1">
            <div id="p-name">
              <h3>{product?.name?.toUpperCase()}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                id felis sed risus auctor bibendum. Nulla purus libero, volutpat
                vitae semper eget, tempus nec enim.
              </p>
            </div>
            <div id="p-price">
              <h3>MRP: ₹{product.price}</h3>
              <p>Inclusive of all taxes</p>
            </div>
            <p
              style={{
                color: "rgb(251,37,94)",
                fontSize: "13px",
                fontWeight: "500",
                margin: "10px 0",
              }}
            >
              Use MENSEOSS coupon to get 10% off on cart value 1999/- and above.
            </p>
            <div id="p-rating">
              <div id="rating">
                <b style={{ paddingRight: "5px" }}>4</b>
                <i class="fa-solid fa-star" style={{ fontSize: "12px" }}></i>
              </div>
              <b>
                105 <span>Ratings</span>
              </b>
            </div>
          </div>
          <div id="sec-2">
            <div id="p-size-header">
              <h4>Select Size</h4>
              <h4 style={{ color: "rgb(251,37,94)" }}>Size Guide</h4>
            </div>
            <div id="p-size">
              <div className="size-box">
                <p>S</p>
              </div>
              <div className="size-box">
                <p>M</p>
              </div>
              <div className="size-box">
                <p>L</p>
              </div>
              <div className="size-box">
                <p>XL</p>
              </div>
              <div className="size-box">
                <p>XXL</p>
              </div>
            </div>
            <div id="p-size-desc">
              <p>
                Model is 6'0"/185 cms and is wearing size M 100% Cotton, Machine
                Wash
              </p>
            </div>
          </div>
          <div id="sec-3">
            <div id="offers-header">
              <h4>Available Offers</h4>
            </div>
            <div id="offers-body">
              <div className="offer">
                <div className="offer-img">
                  <img
                    src="https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png"
                    alt="offer"
                  />
                </div>
                <div className="offer-desc">
                  <div className="desc-top">
                    <p>10% Instant Discount on Kotak Bank Credit Cards only.</p>
                  </div>
                  <div className="desc-down">
                    <p>
                      Min Purchase: ₹2500 | Max Discount: ₹1000{" "}
                      <b style={{ color: "blue", fontWeight: "500" }}>more</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="offer">
                <div className="offer-img">
                  <img
                    src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png"
                    alt="offer"
                  />
                </div>
                <div className="offer-desc">
                  <div className="desc-top">
                    <p>15% off on ICICI Credit Cards</p>
                  </div>
                  <div className="desc-down">
                    <p>
                      Use Code: ICICIWEEKEND | Min Purchase: ₹1500
                      <b style={{ color: "blue", fontWeight: "500" }}> more</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="offer">
                <div className="offer-img">
                  <img
                    src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png"
                    alt="offer"
                  />
                </div>
                <div className="offer-desc">
                  <div className="desc-top">
                    <p>15% off on ICICI Netbanking</p>
                  </div>
                  <div className="desc-down">
                    <p>
                      Use Code: ICICINB | Min Purchase: ₹2000
                      <b style={{ color: "blue", fontWeight: "500" }}> more</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="offer">
                <div className="offer-img">
                  <img
                    src="https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg"
                    alt="offer"
                  />
                </div>
                <div className="offer-desc">
                  <div className="desc-top">
                    <p style={{ lineHeight: "18px" }}>
                      Use Code CLIQ500 get 10% off on min. Purchase of Rs.2500 |
                      Max discount 500
                    </p>
                  </div>
                  <div className="desc-down">
                    <p>
                      Use Code: CLIQ500 | Min Purchase: ₹2500
                      <b style={{ color: "blue", fontWeight: "500" }}> more</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="offers-footer">
              <h4>See 5 More Offers</h4>
            </div>
          </div>
          <div id="sec-4">
            <h4>Ship To</h4>
            <div id="pincode">
              <p>Delhi, 110001</p>
              <b>Change Pincode</b>
            </div>
            <div id="delivery-perks">
              <div className="perks">
                <img
                  src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg"
                  alt="perks"
                />
                <p style={{ fontSize: "14px" }}>
                  Delivery by <b style={{ fontWeight: "600" }}>15th Jul</b>
                </p>
              </div>
              <div className="perks">
                <img
                  src="https://www.tatacliq.com/src/general/components/img/cod.svg"
                  alt="perks"
                />
                <p style={{ fontSize: "14px", fontWeight: "600" }}>
                  Cash on Delivery |{" "}
                  <b style={{ fontWeight: "600", color: "green" }}>Available</b>
                </p>
              </div>
              <div className="perks">
                <img
                  src="https://www.tatacliq.com/src/general/components/img/returnReplacementIcon.svg"
                  alt="perks"
                />
                <p style={{ fontSize: "14px", fontWeight: "600" }}>
                  30 Days Easy Return |{" "}
                  <b style={{ fontWeight: "600", color: "rgb(241, 13, 108)" }}>
                    Know More
                  </b>
                </p>
              </div>
            </div>
            <div id="sold-by">
              <h4>Sold By 1 Arvind Life Style Brands Ltd</h4>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div id="sec-5">
            <div id="p-details-header">
              <h4>Product Details</h4>
              <i class="fa-solid fa-angle-down fa-lg"></i>
            </div>
            <div id="p-details-desc">
              <p>
                Sport this ivory regular fit polo t-shirt from U.S. Polo Assn.
                and amaze everyone. Tailored to sartorial perfection from
                premium quality fabric, it assures a soft and...
              </p>
            </div>
            <div id="p-type">
              <div className="type">
                <p>Fit</p>
                <span>Regular Fit</span>
              </div>
              <div className="type">
                <p>Pattern</p>
                <span>Solid</span>
              </div>
            </div>
            <div id="p-details-more">
              <div id="more-left">
                <img
                  style={{ height: "40px", width: "40px" }}
                  src="https://www.tatacliq.com/src/pdp/components/img/moreProduct.svg"
                  alt="prod"
                />
                <div id="p-info">
                  <h4>More Product Information</h4>
                  <p>Manufacturing, Packaging & Import info</p>
                </div>
              </div>
              <div id="more-right">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div id="sec-6">
            {!isShowEditBtn && (
              <div className="side-button">
                <img
                  src="https://www.tatacliq.com/src/pdp/components/img/new-share-icon.svg"
                  alt="side-button"
                />
              </div>
            )}
            {!isShowEditBtn && (
              <div className="side-button">
                <img
                  src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                  alt="side-button"
                />
              </div>
            )}
            {!isShowEditBtn && (
              <div className="main-button">
                <button
                  style={{
                    color: "rgb(241, 13, 108)",
                    border: "1px solid rgb(241, 13, 108)",
                  }}
                >
                  Buy Now
                </button>
              </div>
            )}
            <div className="main-button">
              {!isShowEditBtn && (
                <button
                  style={{
                    color: "white",
                    backgroundColor: "rgb(241, 13, 108)",
                  }}
                  onClick={() => addToCart(product._id)}
                >
                  Add To Bag
                </button>
              )}
              {isShowEditBtn && (
                <>
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "rgb(241, 13, 108)",
                    }}
                    onClick={() => openEditProdPopup()}
                  >
                    Edit Product
                  </button>

                  <button
                    style={{
                      color: "rgb(241, 13, 108)",
                      backgroundColor: "white",
                      border: "2px solid rgb(241, 13, 108)",
                    }}
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete Product
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}

      {/* <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          margin: "50px 0 5px 80px",
        }}
      >
        Similar Products
      </h2>
       <div id="similar-prod">
        {mensData &&
          mensData?.map((prod) => (
            <div className="single-product">
              <div className="product-img">
                <img src={prod.img} alt="product-img" />
              </div>
              <div className="product-desc">
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
                <h4>{prod.price}</h4>
                {prod.rating && (
                  <div className="product-rating">
                    <div className="rating">
                      <p>{prod.rating}</p>
                      <i
                        class="fa-solid fa-star"
                        style={{ fontSize: "12px", color: "green" }}
                      ></i>
                    </div>
                    <span>{prod.totalRatings}</span>
                  </div>
                )}
                {prod.limited && (
                  <div className="limited">
                    <p>{prod.limited}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div> */}
      <EditProduct
        isShowScreenPopup={isShowScreenPopup}
        isShowEditProdPopup={isShowEditProdPopup}
        setIsShowScreenPopup={setIsShowScreenPopup}
        setIsShowEditProdPopup={setIsShowEditProdPopup}
      />
    </>
  );
};

export default SingleProduct;
