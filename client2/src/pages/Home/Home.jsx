import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import homeImage from "./home.png";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "89vh",
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Button
          component={NavLink} 
          to="/phones" 
          variant="contained"
          sx={{
            padding: "20px 70px",
            backgroundColor: "yellow",
          }}
        >
          Мобільні телефони
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
