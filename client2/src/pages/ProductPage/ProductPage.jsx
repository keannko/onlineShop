import { Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductPage = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
          axios
            .get(`http://localhost:3001/products/${id}`)
            .then((response) => {
              setProduct(response.data);
            })
            .catch((error) => {
              console.error("Error:", error.message);
            });
        };
        fetchProducts();
      }, [id]);


  return (
    <>
      <Container disableGutters>
        {product?.title}  
      </Container>
    </>
  );
};

export default ProductPage;