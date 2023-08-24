import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div id="payment">
      <div id="payment-header">
        <h1>Checkout</h1>
      </div>
      <div id="payment-body">
        {/* ----------------------left--------------------------------- */}
        <div id="payment-left">
          <div id="payment-left-header">
            <div id="shipping-address">
              <div className="circle-number">1</div>
              <h4>Add Shipping Address</h4>
            </div>
            <span>Clear All</span>
          </div>
          <div id="payment-fields">
            <div className="fields-left">
              <div className="name-fields">
                <input type="text" placeholder="First Name(Required)*" />
                <input type="text" placeholder="Last Name(Required)*" />
              </div>
              <input type="text" placeholder="City/district(Required)*" />
              <input type="text" placeholder="State(Required)*" />
              <select>
                <option>Landmark</option>
              </select>
            </div>
            <div className="fields-right">
              <input
                type="text"
                placeholder="Enter your PIN code(Required)*
"
              />

              <textarea
                placeholder="Flat/House No., Floor, Building/Company/Apartment Name, Road/Street Name, Area, Colony,Sector, Village (Required)*
"
              ></textarea>

              <input
                type="number"
                placeholder="Enter 10 digit mobile number
"
              />
            </div>
          </div>
          <div id="payment-radio">
            <div className="radio-payment">
              <input type="radio" />
              <p>Home</p>
            </div>
            <div className="radio-payment">
              <input type="radio" />
              <p>Office</p>
            </div>
          </div>
          <div id="payment-footer">
            <div className="cancel">
              <button>Cancel</button>
            </div>
            <div className="continue">
              <button>Save & Continue</button>
            </div>
          </div>
        </div>
        {/* -----------------------right------------------------- */}
        <div id="payment-right">
          <div id="payment-right-body">
            <div id="price-details">
              <div className="details">
                <p>Bag Total</p>
                <span>₹1899.00</span>
              </div>
              <div className="details">
                <p>Shipping Charge</p>
                <h4 style={{ color: "rgb(0,150,77)" }}>FREE</h4>
              </div>
              <div className="details">
                <p>Bag Subtotal</p>
                <span>₹1899.00</span>
              </div>
              <div className="details">
                <p>Product Discount(s)</p>
                <span>₹399.00</span>
              </div>
              <p
                style={{
                  color: "rgb(95,139,44)",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                You will save ₹399 on this order
              </p>
            </div>
            <div id="price-total">
              <h2>Total Payable</h2>
              <span>₹1500.00</span>
            </div>
          </div>
          <div id="payment-right-footer">
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
  );
};

export default Payment;
