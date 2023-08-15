import axios from "axios";

export const getWarehouses = async (city) => {
  const body = {
    apiKey: "c71f7c387212729b0b69b515fbb4ff23",
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: `${city}`,
      TypeOfWarehouseRef: "841339c7-591a-42e2-8233-7a0a00f0ed6f",
    },
  };

  try {
    const response = await axios.post(
      "https://api.novaposhta.ua/v2.0/json/",
      body
    );
    const res = response.data.data;
    const result = res.map((el) => {
      return el.Description;
    });

    return result;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};
