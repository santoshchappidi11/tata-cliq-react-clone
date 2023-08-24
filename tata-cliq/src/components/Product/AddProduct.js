import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";
import { v4 as uuidv4 } from "uuid";

const AddProduct = (props) => {
  const { state, contextProducts } = useContext(AuthContexts);
  const [addProduct, setAddProduct] = useState({
    image: "",
    name: "",
    price: "",
    category: "Men",
  });
  const [currentUser, setCurrentUser] = useState({});
  // console.log(addProduct);
  console.log(state);

  useEffect(() => {
    if (state.currentUser) {
      setCurrentUser(state.currentUser);
    } else {
      setCurrentUser({});
    }
  }, [state]);

  const handleChangeValues = (e) => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };

  const handleAddProductSubmit = (e) => {
    e.preventDefault();

    if (
      addProduct.image &&
      addProduct.name &&
      addProduct.price &&
      addProduct.category
    ) {
      if (currentUser?.role == "Seller") {
        const allProducts = JSON.parse(localStorage.getItem("products")) || [];
        let randomId = uuidv4();
        addProduct["id"] = randomId;
        allProducts.push(addProduct);
        contextProducts(allProducts);
        // allProducts.push(addProduct);
        // localStorage.setItem("products", JSON.stringify(allProducts));
        props.setIsShowAddProductPopup(false);
        props.setIsShowScreen(false);
        toast.success("Product Added Successfully!");
      } else {
        toast.error("You are not a valid user!");
      }
    } else {
      toast.error("Please fill all the details");
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
          <form onSubmit={handleAddProductSubmit}>
            <input
              type="text"
              name="image"
              placeholder="Product Image"
              value={addProduct.image}
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={addProduct.name}
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              value={addProduct.price}
              onChange={handleChangeValues}
            />
            <select
              name="category"
              onChange={handleChangeValues}
              value={addProduct.category}
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
