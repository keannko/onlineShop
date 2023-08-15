import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import DeliveryInfo from "../../components/DeliveryInfo/DeliveryInfo";
import Order from "../../components/Order/Order";

const OrderProcess = () => {
  const [product, setProduct] = useState();
  const localStorageData = localStorage.getItem("order").split(",");
  const color = localStorageData[1];
  const id = localStorageData[0];
  const memory = localStorageData[2];
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

  return (
    <>
      <Container
        sx={{
          minHeight: "80vh",
          mt: "20px",
          border: "1px solid black",
          mb: "20px",
        }}
      >
        <Grid container>
          <Grid item md={6} xs={12}>
            <DeliveryInfo />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: "10px", mb: "20px" }}>
            <Typography
              variant="h4"
              sx={{ p: 1, textAlign: "center", mb: "10px" }}
            >
              Ваше замовлення:
            </Typography>
            <Order product={product} color={color} productMemory={memory} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OrderProcess;
