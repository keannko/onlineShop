import {
  addNewProduct,
  deleteProductServices,
  getOneProductService,
  getProductsByBrandService,
  getProductService,
  updateProductService,
} from "./services.js";

export const getProductsController = async (req, res) => {
  try {
    const data = await getProductService();

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOneProductController = async (req, res) => {
  try {
    const data = await getOneProductService(req.params.id)
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const updatedFields = { ...req.body };
    const updatedProduct = await updateProductService(
      req.params.id,
      updatedFields
    );
    
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductsByBrandController = async (req, res) => {
  try {
    const data = await getProductsByBrandService(req.params.brand)
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addProductController = async (req, res) => {
  try {
    const data = await addNewPost(req.body);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const data = await deleteProductServices(req.params.id);

    console.log(req.params.id);
    if (!data) {
      res.status(404).json({ message: "not found" });
      return;
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
