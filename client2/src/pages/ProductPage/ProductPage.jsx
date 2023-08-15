import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { useDebugValue } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import OrderData from "../../components/ProductPage/orderData/orderData";
import { addOrderProduct } from "../../redux/slices/orderSlice";

const ProductPage = () => {
  const [product, setProduct] = useState();
  const [selectedColor, setselectedColor] = useState();
  const [selectedMemory, setselectedMemory] = useState();
  const { id } = useParams();
  const dispatch = useDispatch()
  const exchange = useSelector(state => state.user.exchangeRate)
  const theme = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
        setselectedColor(response.data.color[0]);
        setselectedMemory(response.data.memory[0]);
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

  const handleClick = () => {
    // Это на будущее
    // const orders = localStorage.getItem("order")
    //   ? JSON.parse(localStorage.getItem("order"))
    //   : [];

    // if (!orders.includes(id)) {
    //   orders.push(id);
    //   localStorage.setItem("order", JSON.stringify(orders));
    // }
    localStorage.setItem("order", `${id},${selectedColor},${selectedMemory}`);
    dispatch(addOrderProduct(product));
  };

  

  const handlePrice = () => {
    if(product.memory.length>1){
    const index = product.memory.indexOf(selectedMemory)
      return product.price[index]
    }

    return product.price
  }

  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          mt: "20px",
          fontSize: {
            xs: theme.typography.h5.fontSize,
            md: theme.typography.h3.fontSize,
          },
        }}
      >
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
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={6}>
            <img
              src={product?.img}
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
              setselectedColor={setselectedColor}
              setselectedMemory={setselectedMemory}
            />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" sx={{ mt: "10px", mb: "10px" }}>
                Наявність: {product.onStock ? "В наявності" : "Відсутній"}
              </Typography>
              <Typography variant="h6" sx={{ mt: "10px", mb: "10px" }}>
                Ціна: {handlePrice()*exchange}грн.
              </Typography>
            </Box>

            <Box display="flex" gap={4} justifyContent="center">
              <Button
                variant="contained"
                component={NavLink}
                to="/orderprocess"
                onClick={handleClick}
              >
                Оформити замовлення
              </Button>
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
