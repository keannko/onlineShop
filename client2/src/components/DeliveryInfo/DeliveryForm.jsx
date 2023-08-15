import {
  Autocomplete,
  Box,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDeliveryArea, addDeliveryCity, addDeliveryWarehouse } from "../../redux/slices/orderSlice";
import addresses from "../../tools/NovaPost/addresses";
import { getAreas } from "../../tools/NovaPost/getAreas";
import { getCities } from "../../tools/NovaPost/getCities";
import { getWarehouses } from "../../tools/NovaPost/getWarehouses";

const DeliveryForm = () => {
  const [allAddresses, setAllAddresses] = useState([]);
  const [areas, setAreas] = useState([]);
  const [cities, setCities] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const addressesData = await addresses();
        setAllAddresses(addressesData.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch(addDeliveryArea(selectedArea))
  }, [dispatch, selectedArea]);

  useEffect(() => {
    dispatch(addDeliveryCity(selectedCity))
  }, [dispatch, selectedCity]);

  useEffect(() => {
    dispatch(addDeliveryWarehouse(selectedWarehouse))
  }, [dispatch, selectedWarehouse]);

  useEffect(() => {
    setAreas(getAreas(allAddresses));
  }, [allAddresses]);

  useEffect(() => {
    setCities(getCities(allAddresses, selectedArea));
  }, [allAddresses, selectedArea]);

  useEffect(() => {
    if (selectedCity) {
      const fetchWarehouses = async () => {
        const warehousesData = await getWarehouses(selectedCity);
        setWarehouses(warehousesData);
      };
      fetchWarehouses();
    }
  }, [selectedCity]);

  const handleAreaChange = (event, newValue) => {
    setSelectedArea(newValue);
    setSelectedCity(null);
    setSelectedWarehouse(null);
  };

  const handleCityChange = (event, newValue) => {
    setSelectedCity(newValue);
    setSelectedWarehouse(null);
  };

  const handleWarehouseChange = (event, newValue) => {
    setSelectedWarehouse(newValue);
  };

  return (
    <>
      <Container disableGutters>
        <Typography variant="h4" p={2} mt="20px" sx={{textAlign: "center"}}>
          Доставка
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
        >
          <TextField
            disabled
            variant="outlined"
            label="Нова Пошта"
            sx={{ width: "80%" }}
          />
          <Autocomplete
            disablePortal
            options={areas}
            value={selectedArea}
            onChange={handleAreaChange}
            sx={{ width: "80%" }}
            renderInput={(params) => <TextField {...params} label="Область" />}
          />
          {selectedArea === null ? (
            ""
          ) : (
            <Autocomplete
              disablePortal
              options={cities}
              value={selectedCity}
              onChange={handleCityChange}
              sx={{ width: "80%" }}
              renderInput={(params) => <TextField {...params} label="Місто" />}
            />
          )}
          {selectedCity === null || selectedArea === null ? (
            ""
          ) : (
            <Autocomplete
              disablePortal
              options={warehouses}
              value={selectedWarehouse}
              onChange={handleWarehouseChange}
              sx={{ width: "80%" }}
              renderInput={(params) => (
                <TextField {...params} label="Відділення" />
              )}
            />
          )}
          {/* <TextField
            multiline
            rows={3}
            variant="outlined"
            label="Коментар(за необхідності)"
            sx={{ width: "80%" }}
          /> */}
        </Box>
      </Container>
    </>
  );
};

export default DeliveryForm;
