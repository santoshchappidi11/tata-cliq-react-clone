import React from "react";
import "./Wishlist.css";
import wishlistData from "./../../data/ProdDetailsMen.json";

const Wishlist = () => {
  return (
    <div id="wishlist">
      <div id="wishlist-header">
        <h2>My Wishlist</h2>
      </div>
      <div id="wishlist-body">
        <div id="wishlist-products">
          {wishlistData.map((product) => (
            <div className="product">
              <div className="product-img">
                <div className="main-img">
                  <img src={product.img} alt="product" />
                </div>
                <div className="remove">
                  <img
                    src="https://www.tatacliq.com/src/wishlist/components/img/Delete.svg"
                    alt="product"
                  />
                </div>
              </div>
              <div className="add-button">
                <button>Add to Bag</button>
              </div>
              <div className="info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h5>{product.price}</h5>
                {product.limited && <span>{product.limited}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
