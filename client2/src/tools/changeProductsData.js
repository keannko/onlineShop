import axios from "axios";

const changeProductsData = async (id, field, newFieldValue, array = false) => {
  let body = {
    [field]: newFieldValue,
  };

  if (array) {
    const newValueArray = newFieldValue.split(",").map(item => item.trim());
    body = {
      [field]: newValueArray,
    };
  }

  try {
    const response = await axios.put(
      `http://localhost:3001/products/${id}`,
      body
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product data:", error);
  }
};

export default changeProductsData;
