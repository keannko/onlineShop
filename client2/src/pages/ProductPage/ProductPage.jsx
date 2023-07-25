import { Box, Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import OrderData from "../../components/ProductPage/orderData/orderData";

const ProductPage = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchProducts();
  }, [id]);

  if (!product) {
    // Пока данные загружаются, можно отображать лоадер или сообщение о загрузке
    return <div>Loading...</div>;
  }

  return (
    <>
      <Typography variant="h3" textAlign="center" sx={{ mt: "20px" }}>
        {product.title}
      </Typography>
      <Container
        sx={{
          minHeight: "80vh",
          mt: "20px",
          border: "1px solid black",
          mb: "20px",
        }}
      >
        <Grid container>
          <Grid item md={6}>
            <img
              src={product?.img[0]}
              alt={product?.title}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Grid>
          <Grid item md={6} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: "30px" }}>
              Додаткова інформація:
            </Typography>
            <OrderData
              productColor={product.color}
              productMemory={product.memory}
            />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" sx={{ mt: "10px", mb: "10px" }}>
                Наявність: {product.onStock ? "В наявності" : "Відсутній"}
              </Typography>
              <Typography variant="h6" sx={{ mt: "10px", mb: "10px" }}>
                Ціна: {product.price} USD
              </Typography>
            </Box>

            <Box display="flex" gap={4} justifyContent="center">
              <Button variant="contained">Оформити замовлення</Button>
              <Button variant="contained" component={NavLink} to="/phones">
                Відміна
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductPage;
