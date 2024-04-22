import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.footer.css";
import Link from "next/link";
import SmartphoneTwoToneIcon from "@mui/icons-material/SmartphoneTwoTone";

const Footer = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <hr style={{ margin: "0 10%" }} />
      <div className="footer">
        <Box
          flex={1}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box
            component={Link}
            href={"#"}
            sx={{ textDecoration: "none", color: "white" }}
            className="footer-links"
          >
            <Typography>MOBILES</Typography>
          </Box>

          <Box
            component={Link}
            href={"#"}
            sx={{ textDecoration: "none", color: "white" }}
            className="footer-links"
          >
            <Typography>LAPTOPS</Typography>
          </Box>
          <Box
            component={Link}
            href={"#"}
            sx={{ textDecoration: "none", color: "white" }}
            className="footer-links"
          >
            <Typography>OTHER ELECTRONICS</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
          width="10%"
          height="40%"
          gap={2}
        >
          <Box>
            <SmartphoneTwoToneIcon className="deals-icon" />
          </Box>
          <Box>
            <Typography variant="h4">9DEALS</Typography>
          </Box>
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box
            component={Link}
            href={"#"}
            sx={{ textDecoration: "none", color: "white" }}
            className="footer-links"
          >
            <Typography>COUPONS</Typography>
          </Box>
          <Box
            component={Link}
            href={"#"}
            sx={{ textDecoration: "none", color: "white" }}
            className="footer-links"
          >
            <Typography>OFFERS</Typography>
          </Box>
          <Box
            component={Link}
            href={"#"}
            sx={{ textDecoration: "none", color: "white" }}
            className="footer-links"
          >
            <Typography>CONTACT</Typography>
          </Box>
        </Box>
      </div>
      <div className="center" style={{ marginBottom: "2rem" }}>
        <hr style={{ marginRight: "2%", marginLeft: "10%", flex: "1" }} />
        <Typography>©2024 MICROFOX | all rights reserved</Typography>
        <hr style={{ marginRight: "10%", marginLeft: "2%", flex: "1" }} />
      </div>
    </div>
  );
};

export default Footer;
