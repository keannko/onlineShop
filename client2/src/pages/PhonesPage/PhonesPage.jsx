import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const PhonesPage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      axios
        .get("http://localhost:3001/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Container disableGutters>
        <Grid container  spacing={1}>
          {products?.map((item) => (
            <Grid item key={item._id} xs={8} sm={6} md={4} lg={4}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PhonesPage;