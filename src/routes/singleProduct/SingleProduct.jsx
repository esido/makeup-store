import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likedProduct } from "../../redux/likeSlice";
import { addProduct } from "../../redux/cartSlice";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [liked, setLiked] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        const savedLikes =
          JSON.parse(localStorage.getItem("likedProducts")) || [];
        const isLiked = savedLikes.some(
          (likedProduct) => likedProduct.id === data.id
        );
        setLiked(isLiked);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

  const handleLikeProduct = () => {
    dispatch(likedProduct(product));
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <div className="single-product-block">
            <img
              width={"500px"}
              height={"500px"}
              src={product.api_featured_image}
              alt=""
            />
          </div>
          <div className="single-product-block">
            <h1 className="single-product-title">{product.name}</h1>
            <p className="single-product-descr">{product.description}</p>
            <span className="single-product-price">
              {product.price_sign}
              {product.price}
            </span>
            <div className="single-product-action-bar">
              <button
                className="single-product-add-btn"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <button
                className="single-product-like-btn"
                onClick={handleLikeProduct}
              >
                {liked ? (
                  <svg
                    height="36"
                    viewBox="0 0 36 36"
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-wishlist"
                  >
                    <path
                      fill="red"
                      stroke="black"
                      d="M25.9683552 9.21882515c3.2608181.80024215 5.5472476 3.70843205 5.5302621 7.02070785.0167706.8151169-.1192457 1.6262091-.4011081 2.3920749l-.0747211.2030295-12.8022428 9.8639172-12.75640108-9.9236157-.07145807-.2171752c-.24888993-.7564256-.38125398-1.5457388-.39268615-2.3532254.00533124-3.3241785 2.30112936-6.21297878 5.5578425-6.99897615 2.9473775-.7113402 5.994845.46537879 7.693908 2.88167155 1.7058655-2.42023178 4.7647874-3.59281834 7.7166047-2.86840855z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    height="36"
                    viewBox="0 0 36 36"
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-wishlist"
                  >
                    <path
                      fill="none"
                      stroke="black"
                      d="M25.9683552 9.21882515c3.2608181.80024215 5.5472476 3.70843205 5.5302621 7.02070785.0167706.8151169-.1192457 1.6262091-.4011081 2.3920749l-.0747211.2030295-12.8022428 9.8639172-12.75640108-9.9236157-.07145807-.2171752c-.24888993-.7564256-.38125398-1.5457388-.39268615-2.3532254.00533124-3.3241785 2.30112936-6.21297878 5.5578425-6.99897615 2.9473775-.7113402 5.994845.46537879 7.693908 2.88167155 1.7058655-2.42023178 4.7647874-3.59281834 7.7166047-2.86840855z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
