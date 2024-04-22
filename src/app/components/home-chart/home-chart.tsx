"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.home-card.css";
import { motion } from "framer-motion";

const HomeChart = () => {
  return (
    <div className="home-page">
      <div className="home-card">
        <div className="home-img">
          <Box width="50%" height="100%">
            <Typography
              pl="5rem"
              pr="15rem"
              pt="3rem"
              variant="h3"
              fontWeight={600}
              sx={{ opacity: 0.5 }}
            >
              Get the best Prices and Offers for your desired products.
            </Typography>
          </Box>
          <Box width="50%" height="100%">
            <motion.div
              whileHover={{ scale: [null, 1.5, 1.4], opacity: [null, 0.2, 1] }}
              transition={{ duration: 0.3 }}
            >
              <Typography textAlign="center" variant="h2" className="deals-9">
                9DEALS
              </Typography>
            </motion.div>

            <Typography
              textAlign="center"
              variant="subtitle2"
              sx={{ opacity: 0.5 }}
            >
              Never miss a deal.
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default HomeChart;
