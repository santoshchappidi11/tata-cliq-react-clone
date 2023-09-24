import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import { AuthContexts } from "../Context/AuthContext";
// import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import api from "../../ApiConfig";

const AddProduct = (props) => {
  // const { state, contextProducts } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  const [addProductData, setAddProductData] = useState({
    name: "",
    image: "",
    price: "",
    category: "Mens",
  });

  const handleChangeValues = (e) => {
    setAddProductData({ ...addProductData, [e.target.name]: e.target.value });
  };

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault();

    if (
      addProductData.name &&
      addProductData.image &&
      addProductData.price &&
      addProductData.category
    ) {
      try {
        const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));

        if (token) {
          const response = await api.post("/add-product", {
            addProductData,
            token,
          });

          if (response.data.success) {
            toast.success(response.data.message);
            props.setIsShowAddProductPopup(false);
            props.setIsShowScreen(false);
            navigateTo("/");
          } else {
            toast.error(response.data.message);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please fill all the fields!");
    }
  };

  return (
    <>
      {props.isShowAddProductPopup && (
        <div id="add-product">
          <div className="close" onClick={props.closeScreenPopup}>
            <i
              class="fa-solid fa-xmark fa-xl"
              onClick={props.closeScreenPopup}
            ></i>
          </div>
          <div className="header">
            <h1>Add Product</h1>
          </div>
          <form onSubmit={handleSubmitAddProduct}>
            <input
              type="text"
              name="image"
              placeholder="Product Image"
              value={addProductData.image}
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={addProductData.name}
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              value={addProductData.price}
              onChange={handleChangeValues}
            />
            <select
              name="category"
              onChange={handleChangeValues}
              value={addProductData.category}
            >
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Electronics</option>
              <option>Beauty</option>
              <option>Jewellery</option>
              <option>Home&Kitchen</option>
              <option>Accessories</option>
            </select>
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddProduct;
