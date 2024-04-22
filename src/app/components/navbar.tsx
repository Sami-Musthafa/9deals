"use client";
// import { Box, Button, Typography } from "@mui/material";
// import React from "react";
// import Image from "next/image";
// import 9DEALSLogo from "../../assets/images/logos--blogger.svg";

// const divCenter = [
//   { display: "flex" },
//   { alignItems: "center" },
//   { justifyContent: "center" },
// ];

// const Navbar = () => {
//   return (
//     <Box px={3} py={2}>
//       <Box
//         height={80}
//         p={2}
//         display="flex"
//         alignItems="center"
//         justifyContent="space-between"
//       >
//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="flex-start"
//           flex={1}
//           gap={1}
//         >
//           <Box>
//             <Image src={9DEALSLogo} width={30} height={30} alt="Logo" />
//           </Box>
//           <Box
//             sx={{
//               ...divCenter,
//               color: "white",
//               fontWeight: "600",
//               fontSize: "1.5rem",
//             }}
//           >
//             <p style={{ fontFamily: "sans-serif" }}>
//               9DEALS
//               <span style={{ color: "orange", fontWeight: "bolder" }}>.</span>
//             </p>
//           </Box>
//         </Box>
//         <Box sx={{ ...divCenter, marginX: "3%" }}>
//           <Box flex={1} display="flex" gap={5} color="white">
//             <Box>
//               <Typography fontSize="1rem" fontWeight="600">
//                 EXPLORE
//               </Typography>
//             </Box>
//             <Box>
//               <Typography fontSize="1rem" fontWeight="600">
//                 ROOMS
//               </Typography>
//             </Box>
//             <Box>
//               <Typography fontSize="1rem" fontWeight="600">
//                 ABOUT
//               </Typography>
//             </Box>
//             <Box>
//               <Typography fontSize="1rem" fontWeight="600">
//                 ACTIVITIES
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Box flex={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
//           <Button
//             sx={{
//               border: "2px solid white",
//               borderRadius: "0px",
//               color: "white",
//               paddingY: "8px",
//               paddingX: "15px",
//               width: "200px",
//               mx: "5px",
//               fontWeight: "400",
//             }}
//           >
//             BOOK NOW &nbsp;&nbsp;
//             <span style={{ color: "orange" }}>&rarr;</span>
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SmartphoneTwoToneIcon from "@mui/icons-material/SmartphoneTwoTone";
import { Drawer } from "@mui/material";

import Link from "next/link";

const pages = ["MOBILES", "COUPONS", "DEALS", "ABOUT"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ color: "white", bgcolor: "rgb(47, 28, 5)" }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "0.4rem 3rem",
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box
                  py={5}
                  display="flex"
                  flexDirection="column"
                  px={3}
                  gap={1.5}
                  height="100%"
                  color="White"
                  bgcolor="rgb(84, 65, 41)"
                >
                  {pages.map((page) => (
                    <MenuItem
                      component={Link}
                      href={"#"}
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        "&:hover": {
                          border: "2px solid salmon",
                        },
                      }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Drawer>
            </Box>
            <SmartphoneTwoToneIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              9DEALS
            </Typography>
            <SmartphoneTwoToneIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              9DEALS
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: "5%",
              }}
            >
              {pages.map((page) => (
                <Box
                  component={Link}
                  href={"#"}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "monospace",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  {page}
                </Box>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                className="nav-button"
                sx={{
                  border: "2px solid white",
                  borderRadius: "0px",
                  color: "white",
                  paddingY: "8px",
                  width: "170px",
                  mx: "5px",
                  fontWeight: "400",
                  "&:hover": {
                    border: "2px solid salmon",
                  },
                }}
              >
                BOOK NOW &nbsp;&nbsp;
                <span style={{ color: "orange" }}>&rarr;</span>
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar;
