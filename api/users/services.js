import checkHash from "../utils/checkHash.js";
import hashPassword from "../utils/hashPassword.js";
import { getUserDataAccess } from "./dataAccess.js";


export const getUserService = async ({email, password}) => {
  const data = await getUserDataAccess(email);
  // const pass = hashPassword(password)
  const checkedPass = checkHash(password, data[0].password)

  return checkedPass
};

// export const getOneProductService = async (id) => {
//   const data = await getOneProductDataAccess(id);

//   return data;
// };

// export const getProductsByBrandService = async (brand) => {
//   const data = await getProductsByBrandDataAccess(brand);

//   return data;
// };

// export const addNewProduct = async ({ title, text }) => {
//   const newProduct = await addProductDataAccess({ title, text });

//   return newProduct;
// };

// export const deleteProductServices = async (id) => {
//   const deletePost = await deleteProductDataAccess(id);

//   return deletePost;
// };
