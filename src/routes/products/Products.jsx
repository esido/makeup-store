// Products.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { likedProduct } from "../../redux/likeSlice";
import { addProduct } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.slice(0, 150).map((product) => ({
            ...product,
            liked: savedLikes.some(
              (likedProduct) => likedProduct.id === product.id
            ),
          }))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleLikeProduct = (product) => {
    dispatch(likedProduct(product));
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id
          ? { ...prevProduct, liked: !prevProduct.liked }
          : prevProduct
      )
    );
  };

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className="products-products">
      <div className="container">
        <h1 className="products-products-title">ALL PRODUCTS</h1>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <div className="products-products-content">
            {products.map((product) => (
              <div className="products-products-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.api_featured_image}
                    onError={(e) =>
                      (e.target.src =
                        "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")
                    }
                    alt=""
                    width={"290px"}
                    height={"290"}
                  />
                </Link>
                <div className="products-products-card-content">
                  <h3 className="products-products-card-title">
                    {product.name}
                  </h3>
                  <span className="products-products-card-price">
                    {product.price_sign}
                    {product.price}
                  </span>
                  <div className="products-products-card-action-bar">
                    <button
                      onClick={() => handleLikeProduct(product)}
                      className={product.liked ? "liked" : ""}
                    >
                      Like
                    </button>
                    <button onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
