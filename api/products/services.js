import {
  addProductDataAccess,
  deleteProductDataAccess,
  getOneProductDataAccess,
  getProductsByBrandDataAccess,
  getProductsDataAccess,
  updateProductDataAccess,
} from "./dataAccess.js";

export const getProductService = async () => {
  const data = await getProductsDataAccess();

  return data?.reverse();
};

export const getOneProductService = async (id) => {
  const data = await getOneProductDataAccess(id);

  return data;
};

export const updateProductService = async (id, updatedFields) => {
  try {
    return await updateProductDataAccess(id, updatedFields);
  } catch (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getProductsByBrandService = async (brand) => {
  const data = await getProductsByBrandDataAccess(brand);

  return data;
};

export const addNewProduct = async ({ title, text }) => {
  const newProduct = await addProductDataAccess({ title, text });

  return newProduct;
};

export const deleteProductServices = async (id) => {
  const deletePost = await deleteProductDataAccess(id);

  return deletePost;
};
