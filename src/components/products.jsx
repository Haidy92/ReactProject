import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { Typography, Stack } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
    <div className="pt-28">


      <Typography component="h1" variant="h3" textAlign="center" mb={4} color="primary.dark" fontWeight={700}>
        Our Products
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={5} m={5}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Stack>
      </div>
    </>
  );
};

export default Products;
