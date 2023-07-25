import { Box, MenuItem, TextField } from "@mui/material";

const colors = {
  black: "Чорний",
  Gray: "Сірий",
  White: "Білий",
  Blue: "Синій",
  Pink: "Рожевий",
};

const OrderData = ({ productColor, productMemory }) => {
  const correctColor = (color) => {
    const result = color.map((el) => {
      return colors[el] || el;
    });
    return result;
  };

  return (
    <form>
      <Box display="flex" flexDirection="column" gap={4}>
        <TextField
          select
          label="Колір"
          defaultValue={correctColor(productColor)[0]}
          helperText="Оберіть бажаний колір"
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
