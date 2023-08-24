import React, { useContext, useEffect, useState } from "react";
import "./EditProduct.css";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { AuthContexts } from "../Context/AuthContext";

const EditProduct = (props) => {
  const singleProd = useParams();
  const { state, contextProducts } = useContext(AuthContexts);
  const [user, setUser] = useState([]);

  const [editProduct, setEditProduct] = useState({
    image: "",
    name: "",
    price: "",
    category: "Men",
  });

  useEffect(() => {
    if (state?.allProducts?.length) {
      const singleProdData = state?.allProducts?.find(
        (prod) => prod.id == singleProd.id
      );
      setEditProduct(singleProdData);
    }
  }, [state, singleProd]);

  useEffect(() => {
    if (state?.currentUser) {
      setUser(state.allProducts);
    } else {
      setUser([]);
    }
  }, [state]);

  const handleChangeValues = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const handleEditProductSubmit = (e) => {
    e.preventDefault();

    if (
      editProduct.image &&
      editProduct.name &&
      editProduct.price &&
      editProduct.category
    ) {
      //   const allProducts = JSON.parse(localStorage.getItem("products")) || [];

      for (let i = 0; i < user?.length; i++) {
        if (user[i].id == singleProd.id) {
          user[i].id = editProduct.id;
          user[i].image = editProduct.image;
          user[i].name = editProduct.name;
          user[i].price = editProduct.price;
          user[i].category = editProduct.category;
        }
      }
      contextProducts(user);
      //   localStorage.setItem("products", JSON.stringify(allProducts));
      setEditProduct({
        image: "",
        name: "",
        price: "",
        category: "Men",
      });
      props.setIsShowScreenPopup(false);
      props.setIsShowEditProdPopup(false);
      toast.success("Product updated successfully!");
    } else {
      toast.error("Please fill all the details!");
    }
  };

  const closeEditProdPopup = () => {
    props.setIsShowScreenPopup(false);
    props.setIsShowEditProdPopup(false);
  };

  return (
    <>
      {props.isShowScreenPopup && (
        <div id="screen">
          {props.isShowEditProdPopup && (
            <div id="edit-product">
              <div className="close">
                <i
                  class="fa-solid fa-xmark fa-xl"
                  onClick={closeEditProdPopup}
                ></i>
              </div>
              <div className="header">
                <h1>Edit Product</h1>
              </div>
              <form onSubmit={handleEditProductSubmit}>
                <input
                  type="text"
                  name="image"
                  placeholder="Product Image"
                  value={editProduct.image}
                  onChange={handleChangeValues}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={editProduct.name}
                  onChange={handleChangeValues}
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Product Price"
                  value={editProduct.price}
                  onChange={handleChangeValues}
                />
                <select
                  name="category"
                  onChange={handleChangeValues}
                  value={editProduct.category}
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
                <button type="submit">Update Product</button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EditProduct;
