import axios from "axios";

const getUserInfo = async (email, password) => {
  const body = {
    email: email,
    password: password
  };

  try {
    const response = await axios.post(
      `http://localhost:3001/users/auth`,
      body
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export default getUserInfo;
