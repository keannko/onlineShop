import { Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Order = ({ product, color, productMemory }) => {
  const dispatch = useDispatch();
  const exchange = useSelector((state) => state.user.exchangeRate);
  if (!product) {
    return <div>Loading...</div>;
  }

  const handlePrice = () => {
    if (product.memory.length > 1) {
      const index = product.memory.indexOf(productMemory);
      return product.price[index];
    }
    return product.price;
  };

  return (
    <>
      <Grid container sx={{ border: "1px solid black", p: 3 }}>
        <Grid item md={4}>
          <img
            src={product.img}
            alt={product.title}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={8}>
          <Typography
            sx={{ textAlign: "left", fontSize: "16px", fontWeight: 700 }}
          >
            {product.title}
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: "15px" }}>
            Колір: {color}
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: "15px" }}>
            Пам'ять: {productMemory}
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: "15px" }}>
            Код товару: {product.article}
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: "15px" }}>
            Ціна: {handlePrice() * exchange} грн.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Order;
