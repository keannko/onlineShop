import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  const { product } = props
  return (
    <Card sx={{ border: "1px solid black"}} >
      <CardActionArea component={NavLink} to={`/phone/${product._id}`}>
        <CardMedia
          sx={{ mt: "20px" }}
          component="img"
          image={product.img}
          alt="phone image"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="h5" >
            {product.price} USD
          </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
  );
}

export default ProductCard
