import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

const init = {
  title: "",
  price: "",
  image: "",
  description: "",
};

function EditProductPage() {
  const { editProduct, getOneProduct, oneProduct } = useContext(productContext);
  const { id } = useParams();
  const [product, setProduct] = useState(init);
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, product);
    setProduct(init);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }
  return (
    <div style={{ marginLeft: "50px", marginTop: "50px" }}>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="title"
          name="title"
          value={product.title}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="price"
          name="price"
          value={product.price}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image"
          name="image"
          value={product.image}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="description"
          name="description"
          value={product.description}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>edit</button>
      </form>
    </div>
  );
}

export default EditProductPage;
