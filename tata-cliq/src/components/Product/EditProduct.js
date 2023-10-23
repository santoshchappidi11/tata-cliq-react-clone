import React, { useContext, useEffect, useState } from "react";
import "./EditProduct.css";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
// import { AuthContexts } from "../Context/AuthContext";
import api from "../../ApiConfig";

const EditProduct = (props) => {
  const { singleProdId } = useParams();
  const navigateTo = useNavigate();
  // const { state, contextProducts } = useContext(AuthContexts);
  // const [user, setUser] = useState([]);

  const [editProduct, setEditProduct] = useState({
    image: "",
    name: "",
    price: "",
    category: "Men",
  });

  useEffect(() => {
    const getEditProductData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));

        if (token) {
          const response = await api.post("/get-editproduct-data", {
            productId: singleProdId,
            token,
          });

          if (response.data.success) {
            setEditProduct(response.data.product);
          } else {
            toast.error(response.data.message);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getEditProductData();
  }, [singleProdId]);

  const handleChangeValues = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const handleEditProductSubmit = async (e) => {
    e.preventDefault();

    if (
      editProduct.name &&
      editProduct.image &&
      editProduct.price &&
      editProduct.category
    ) {
      try {
        const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));
        const response = await api.patch("/update-your-product", {
          editProduct,
          token,
          productId: singleProdId,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          props.setIsShowScreenPopup(false);
          props.setIsShowEditProdPopup(false);
          // navigateTo(`/${response?.data?.product?.category}`);
          navigateTo("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please fill all the fields!");
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
