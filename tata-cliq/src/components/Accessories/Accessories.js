import React, { useContext, useEffect, useState } from "react";
import "./Accessories.css";
// import accessoriesData from "./../../data/ProdDetailsAccessories.json";
import { useNavigate } from "react-router-dom";
import { AuthContexts } from "../Context/AuthContext";

const Accessories = () => {
  const { state } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    // const allProducts = JSON.parse(localStorage.getItem("products")) || [];
    if (state.allProducts?.length) {
      const newProducts = state?.allProducts.filter(
        (prod) => prod.category == "Accessories"
      );
      setProducts(newProducts);
    }
  }, [state]);

  function redirectToSingleProduct(id) {
    navigateTo(`/single-product/${id}`);
  }

  return (
    <div id="multiple-products">
      <div id="header">
        <h1>Wearable Devices</h1>
        <span>449 Products</span>
      </div>
      <div id="sort-by">
        <div id="sort">
          <span>
            Sort by : <b>Popularity</b>
          </span>
          <i
            class="fa-solid fa-arrow-down-long fa-sm"
            style={{ color: "rgb(99, 99, 99)" }}
          ></i>
        </div>
      </div>
      {/* -------------------------------- */}
      <div id="products-main">
        <div id="left">
          <div id="filters">
            <h4>Filters</h4>
            <h4>Clear All</h4>
          </div>
          <div id="department">
            <h4>Department</h4>
            <p>Watches</p>
          </div>
          <div id="category">
            <h4>Category</h4>
            <div id="category-cross">
              <p>Wearable Devices</p>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div id="p-type">
            <h4>Product Type</h4>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Fitness Tracker</p>
              </div>
              <h5>40550</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Smart Watch</p>
              </div>
              <h5>30527</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Sweatshirts</p>
              </div>
              <h5>7370</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Jackets</p>
              </div>
              <h5>6529</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Sweaters</p>
              </div>
              <h5>3662</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Jeans</p>
              </div>
              <h5>10273</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Trousers & Chinos</p>
              </div>
              <h5>7195</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Shorts</p>
              </div>
              <h5>4376</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Blazers</p>
              </div>
              <h5>331</h5>
            </div>
            <div className="type-structure">
              <div className="type">
                <input type="radio" />
                <p>Others</p>
              </div>
              <h5>31</h5>
            </div>
          </div>
          {/* ---------------------------------------------- */}
          <div className="left-common">
            <h4>Brand</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Size</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Type</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Colour</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Price</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Fit</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Discount</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Fabric Family</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Sleeve</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Collar</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Pattern</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Occasion</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>All Discount</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="left-common">
            <h4>Availability</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        {/* ------------------------------------------------------------------ */}
        <div id="right">
          {products &&
            products.map((prod) => (
              <div
                className="single-product"
                onClick={() => redirectToSingleProduct(prod.id)}
              >
                <div className="product-img">
                  <img src={prod.image} alt="product-img" />
                </div>
                <div className="product-desc">
                  <h3>{prod.name}</h3>
                  <p>{prod.category}</p>
                  <h4>{prod.price}</h4>
                  {prod && (
                    <div className="product-rating">
                      <div className="rating">
                        <p>{4}</p>
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "12px", color: "green" }}
                        ></i>
                      </div>
                      <span>(105)</span>
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
        </div>
      </div>
    </div>
  );
};

export default Accessories;
