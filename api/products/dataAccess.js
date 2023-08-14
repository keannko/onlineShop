import { ProductModel } from "./ProductModel.js";

export const getProductsDataAccess = async () => {
  const data = await ProductModel.find();

  return data;
};

export const getOneProductDataAccess = async (id) => {
  const data = await ProductModel.findById(id)

  return data;
};

export const updateProductDataAccess = async (id, updatedFields) => {
  try {
    return await ProductModel.findByIdAndUpdate(id, updatedFields, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getProductsByBrandDataAccess = async (brand) => {
  const data = await ProductModel.find({brand: brand})

  return data;
};

export const addProductDataAccess = async ({ title, text }) => {
  const newPost = await new ProductModel({ title, text }).save();

  return newPost;
};

export const deleteProductDataAccess = async (id) => {
  const deleteProduct = await ProductModel.findByIdAndDelete(id);

  return deleteProduct;
};
