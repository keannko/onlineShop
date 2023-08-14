import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import changeProductsData from "../../tools/changeProductsData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const ChangeProductModal = ({ isModal, setIsModal }) => {
  const handleOpen = () => setIsModal(true);
  const handleClose = () => setIsModal(false);
  const fieldChange = useSelector((state) => state.products.fieldToChange);
  const itemChange = useSelector((state) => state.products.itemToChange);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = formData.get("newData");
    if(fieldChange === 'memory' || fieldChange === 'price' ) {
      changeProductsData(itemChange._id, fieldChange, newData, true)
    }else{
      changeProductsData(itemChange._id, fieldChange, newData)
    }
    
    setIsModal(false)
  };
  

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={isModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h5" gutterBottom textAlign='center'>Змінити дані</Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', mt: '20px' }}>
              <Typography>{itemChange[fieldChange]}</Typography>
              <form id="newData" onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Нові дані"
                  variant="outlined"
                  name="newData"
                />
              </form>
              <Button variant="contained" form="newData" type="submit">
                Підтвердити
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ChangeProductModal;
