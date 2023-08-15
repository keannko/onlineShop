import { Box, Container, Grid, Select, MenuItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const PhonesPage = () => {
  const [products, setProducts] = useState();
  const [brands, setBrands] = useState();
  const { brand } = useParams();

  const isLoading = !products || !brands;

  useEffect(() => {
    const fetchProducts = async () => {
      let response;
      if (brand) {
        response = await axios.get(`http://localhost:3001/products/get/${brand}`);
      } else {
        response = await axios.get("http://localhost:3001/products");
      }
      setProducts(response.data);
    };
    fetchProducts();
  }, [brand]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("http://localhost:3001/brands");
        setBrands(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchBrands();
  }, []);

  return (
    <>
      <Box
        sx={{ backgroundColor: "tomato" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Select
          variant="outlined"
          displayEmpty
          sx={{ color: "black", width: '400px', fontSize: '20px' }}
          value={brands?.find((item) => item.brand.toLowerCase() === brand)?.brand || ""}
        >
          <MenuItem value="" disabled>
            Оберіть виробника
          </MenuItem>
          {brands?.map((item) => (
            <MenuItem
              key={item._id}
              value={item.brand}
              component={NavLink}
              to={`/phones/${item.brand.toLowerCase()}`}
              sx={{ textDecoration: "none", color: "black", fontSize: '20px' }}
            >
              {item.brand}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Container disableGutters>
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: "center", mb: "20px", mt: "20px" }}
        >
          {isLoading ? (
            <Box sx={{backgroundColor: 'yellow'}}>
              Loading...
            </Box>
          ) : (
            products?.map((item) => (
              <Grid item key={item._id} xs={10} sm={6} md={4} lg={4}>
                <ProductCard product={item} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default PhonesPage;
