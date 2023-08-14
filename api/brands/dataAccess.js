import { BrandModel } from "./BrandModel.js";

export const getBrandsDataAccess = async () => {
  const data = await BrandModel.find();

  return data;
};
