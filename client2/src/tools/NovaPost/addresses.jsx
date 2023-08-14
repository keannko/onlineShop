import axios from "axios";

const addresses = async () => {
  const body = {
    apiKey: "c71f7c387212729b0b69b515fbb4ff23",
    modelName: "Address",
    calledMethod: "getCities",
  };

  try {
    const response = await axios.post(
      "https://api.novaposhta.ua/v2.0/json/Address/getCities",
      body
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};

export default addresses;
