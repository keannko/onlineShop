import { Box, MenuItem, TextField } from "@mui/material";

const colors = {
  black: "Чорний",
  Gray: "Сірий",
  White: "Білий",
  Blue: "Синій",
  Pink: "Рожевий",
  Green: "Зелений",
  Orange: "Помаранчевий",
  Red: "Червоний",
  Purple: "Фіолетовий",
  Gold: "Золотий",
};

const OrderData = ({ productColor, productMemory, setselectedMemory, setselectedColor }) => {
  const correctColor = (color) => {
    const result = color.map((el) => {
      return colors[el] || el;
    });
    return result;
  };

  const handleChangeColor = (event) => {
    setselectedColor(event)
  }

  const handleChangeMemory= (event) => {
    setselectedMemory(event)
  }

  return (
    <form>
      <Box display="flex" flexDirection="column" gap={4}>
        <TextField
          select
          label="Колір"
          defaultValue={correctColor(productColor)[0]}
          helperText="Оберіть бажаний колір"
          onChange={(e) => {handleChangeColor(e.target.value)}}
        >
          {correctColor(productColor).map((color) => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Пам'ять"
          defaultValue= {productMemory[0]}
          helperText="Оберіть об'єм пам'яті"
          onChange={(e) => {handleChangeMemory(e.target.value)}}
        >
          {productMemory.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </form>
  );
};

export default OrderData;
