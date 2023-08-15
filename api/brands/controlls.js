import { getBrandsService } from "./services.js";


export const getBrandsController = async (req, res) => {
  try {
    const data = await getBrandsService()

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

