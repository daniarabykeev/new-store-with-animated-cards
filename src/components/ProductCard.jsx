import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";
import "./ProductCard.css";

function ProductCard() {
  const navigate = useNavigate();
  const { getProducts, products, deleteProduct } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div
      style={{
        marginLeft: "50px",
        marginTop: "50px",
        // border: "1px solid black",
        width: "300px",
        borderRadius: "9px",
        display: "flex",
      }}
    >
      {products.map((item) => {
        return (
          <div style={{ marginRight: "30px" }}>
            <article className="card">
              <div className="card__inner">
                <div className="card__body card__body--front">
                  <h3>{item.title}</h3>
                  <img src={item.image} alt="" style={{ width: "300px" }} />
                  <h4>{item.price}</h4>
                </div>
                <div className="card__body card__body--back">
                  <h2 className="card__title">{item.description}</h2>
                  <div>
                    <button
                      onClick={(e) => {
                        navigate(`/edit/${item.id}`);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={(e) => {
                        deleteProduct(item.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;

{
  /* <div key={item.id}>
              <div>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "300px", borderRadius: "9px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ marginLeft: "60px" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h3>{item.title}</h3>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h4>$ {item.price}</h4>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <button
                    onClick={(e) => {
                      navigate(`/edit/${item.id}`);
                    }}
                  >
                    edit
                  </button>
                  <button
                    onClick={(e) => {
                      deleteProduct(item.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div> */
}
