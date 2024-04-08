import React from "react";
import { useDispatch } from "react-redux";
import "./Like.css";
import { useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Like = () => {
  const dispatch = useDispatch();
  const likedata = useSelector((state) => state.likes.likes);

  const addToCart = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className="container">
      <div className="liked-product">
        {likedata.map((product) => (
          <div className="liked-products-card" key={product.id}>
            <img
              src={product.api_featured_image}
              onError={(e) =>
                (e.target.src =
                  "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")
              }
              alt=""
              width={"290px"}
              height={"290px"}
            />
            <div className="liked-products-card-content">
              <h3 className="liked-products-card-title">{product.name}</h3>

              <div className="liked-products-card-action-bar">
                <span className="liked-products-card-price">
                  {product.price_sign}
                  {product.price}
                </span>
                <button
                  className="liked-products-card-add-btn"
                  onClick={() => addToCart(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                  >
                    <g>
                      <g>
                        <path d="M22.5 45C34.926 45 45 34.927 45 22.5S34.926 0 22.5 0 0 10.073 0 22.5 10.074 45 22.5 45z"></path>
                      </g>
                      <g>
                        <path
                          fill="#fff"
                          d="M23.389 13.833c-.859 0-1.556.697-1.556 1.556v1.944h3.111V15.39c0-.86-.696-1.556-1.555-1.556zm0-1.166a2.722 2.722 0 0 1 2.722 2.722v1.944h3.111v6.223l.346 1.555h-1.195l-.317-1.427V18.5H26.11v1.167h-1.167V18.5h-3.11v1.167h-1.167V18.5h-1.945v5.184l-1.268 5.705h7.88v1.167H16l1.556-7v-6.223h3.11V15.39a2.723 2.723 0 0 1 2.723-2.722zm7.389 14V29h2.333v1.556h-2.333v2.333h-1.556v-2.333H26.89V29h2.333v-2.333z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
