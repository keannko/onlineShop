import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { display } from "@mui/system";

const ProductCard = (props) => {
  const exchange = useSelector((state) => state.user.exchangeRate);
  const { product } = props;
  return (
    <Card sx={{ border: "1px solid black", maxWidth: '350px' }}>
      <CardActionArea component={NavLink} to={`/phone/${product._id}`}>
        <CardMedia sx={{display: 'flex', justifyContent: 'center', pt: '30px'}}>
          <img src={product.img} height='300px'></img>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {product.title}
          </Typography>
          <Typography variant="h5">
            {product.price[0] * exchange} грн.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
