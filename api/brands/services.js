import { getBrandsDataAccess } from "./dataAccess.js";


export const getBrandsService = async () => {
  const data = await getBrandsDataAccess();

  return data;
};
