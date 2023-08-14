// import { Box, Typography } from "@mui/material"

// const Footer = () => {
//     return (
//         <>
//           <Box  sx={{
//         backgroundColor: 'tomato',
//         minHeight: '10vh'
//         }}>
//           <Typography></Typography>
//       </Box>
//         </>
//     )
// }

// export default Footer
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{display: 'flex', justifyContent: 'center'}}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "tomato",
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
          }}
        >
          <Container maxWidth="sm" >
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
