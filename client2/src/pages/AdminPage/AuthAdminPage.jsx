import { Box, Button, Grid, Tab, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { isAuth, setExchangeR } from "../../redux/slices/userSlice";
import { NavLink } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import axios from "axios";
import ChangeProductModal from "../../components/Modal/ChangeProductModal";
import { addFieldToChange, addItemToChange } from "../../redux/slices/productsSlice";

const AuthAdminPage = () => {
  const [value, setValue] = useState("1");
  const [exchangeRate, setExchangeRate] = useState();
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  const exchange = useSelector((state) => state.user.exchangeRate);
  const [isModal, setIsModal] = useState(false);
  const [productSelected, setProductSelected] = useState();

  const handleClick = () => {
    dispatch(isAuth(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const exchangeRateValue = event.target.elements.exchangeR.value;
    setExchangeRate(exchangeRateValue);
    dispatch(setExchangeR(exchangeRateValue));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, [products]);

const handleChangeClick = (field, item) => {
  setIsModal(true)
  dispatch(addFieldToChange(field))
  dispatch(addItemToChange(item))
}



  return (
    <>
    <ChangeProductModal isModal={isModal} setIsModal={setIsModal} productSelected={productSelected}/>
      <Button
        component={NavLink}
        to="/admin"
        variant="contained"
        onClick={handleClick}
      >
        Exit
      </Button>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Курс долара" value="1" />
              <Tab label="Телефони" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <form
              style={{ display: "flex", alignItems: "center", gap: "30px" }}
              onSubmit={handleSubmit}
            >
              <Typography
                sx={{ fontSize: "25px" }}
              >{`${exchange} грн.`}</Typography>
              <TextField
                name="exchangeR"
                id="outlined-basic"
                label=""
                variant="outlined"
              />
              <Button variant="contained" type="submit">
                Подтвердить
              </Button>
            </form>
          </TabPanel>
          <TabPanel value="2">
            {products?.map((item) => (
              <Grid container key={item._id} gap={'10px'}>
                <Grid item md={1} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  {item.brand}
                  <Button variant="contained" onClick={() => handleChangeClick('brand',item)}>Змінити</Button>
                </Grid>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  {item.title}
                  <Button variant="contained" onClick={() => handleChangeClick('title',item)}>Змінити</Button>
                </Grid>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  {item.memory[0]}/
                  {item.memory[1]}/
                  {item.memory[2]}/
                  <Button variant="contained" onClick={() => handleChangeClick('memory',item)}>Змінити</Button>
                </Grid>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  {item.article}
                  <Button variant="contained" onClick={() => handleChangeClick('article',item)}>Змінити</Button>
                </Grid>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  {item.price[0]}/
                  {item.price[1]}/
                  {item.price[2]}/
                  <Button variant="contained" onClick={() => handleChangeClick('price',item)}>Змінити</Button>
                </Grid>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  {item.price[0]*exchange}/
                  {item.price[1]*exchange}/
                  {item.price[2]*exchange}/
                </Grid>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default AuthAdminPage;
