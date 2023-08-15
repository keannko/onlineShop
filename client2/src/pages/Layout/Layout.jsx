import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Box >
        <Header />
        <Box >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
