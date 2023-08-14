import { getUserService } from "./services.js";

export const getUserController = async (req, res) => {
  try {
    const data = await getUserService(req.body);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// export const getOneProductController = async (req, res) => {
//   try {
//     const data = await getOneProductService(req.params.id)

//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const getProductsByBrandController = async (req, res) => {
//   try {
//     const data = await getProductsByBrandService(req.params.brand)

//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const addProductController = async (req, res) => {
//   try {
//     const data = await addNewPost(req.body);

//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const deleteProductController = async (req, res) => {
//   try {
//     const data = await deleteProductServices(req.params.id);

//     console.log(req.params.id);
//     if (!data) {
//       res.status(404).json({ message: "not found" });
//       return;
//     }

//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
