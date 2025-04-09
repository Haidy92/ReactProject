import React, { memo } from "react";
import { Card, CardContent, Divider, Typography, CardActions, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const Product = ({ product }) => {
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        p: 2,
        textAlign: "center",
        animation: "scaleAnimation 2s infinite alternate ease-in-out",
        "@keyframes scaleAnimation": {
          "0%": { transform: "scale(1)" },
          "60%":{ transform: "scale(1.1)" },
          
        }, backgroundColor: "#9991",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          backgroundColor: "#9994",
          transform: "scale(1.05)",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <img
        src={product.image}
        loading="lazy"
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "8px" }}
      />
      <CardContent>
        
        <Typography variant="body2" color="textSecondary">
          <strong style={{ color: "#d32f2f" }}>Category:</strong> {product.category}
        </Typography>
        <Typography variant="h6" color="primary" fontWeight={600}>
          ${product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </Typography>
      </CardContent>
      <Divider sx={{ marginY: 1 }} />
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={() => addToCart(product)}
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0", transform: "scale(1.05)" },
          }}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0", transform: "scale(1.05)" },
          }}
        >
          BUY
        </Button>
        <Button
      variant="contained"
      sx={{
        backgroundColor: "#1976d2",
        "&:hover": { backgroundColor: "#1565c0" },
        padding: "10px 20px", 
        borderRadius: "20%",  
           
      }}
    >
      <StarIcon sx={{  fontSize: 30  ,"&:hover": { color: "#FFD700"}, }} /> {/* Adjust icon size and color */}
    </Button>
      </CardActions>
    </Card>
  );
};

export default memo(Product);