import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import { fetchProducts } from "../store/productSlice";

const Products = () => {
  //const [products, Setproducts] = useState([]);
  const dispatch = useDispatch();
  //destructuring using curly bracket - means object desctuctring.
  const {data:products, status} =  useSelector(state => state.product);
  //console.log(data);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   Setproducts(data);
    // };
    // fetchProducts();
  },[]);

  const handleAdd = (product) => {
    dispatch(add(product));

  }

  return (
    <div className="productsWrapper">
      {products?.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>

          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
