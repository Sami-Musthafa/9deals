"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.offer-cards.css";
import Image from "next/image";
import MobileImg from "../../../assets/images/mobiles-1.jpg";
import MacImg from "../../../assets/images/macbook.jpg";
import OffersImg from "../../../assets/images/offers.jpg";
import CouponsImg from "../../../assets/images/coupons.jpg";
import Link from "next/link";
import SimpleSlider from "../slider/slider";

const { motion } = require("framer-motion");

const OfferCards = () => {
  return (
    <Box mt={5}>
      <Box pt={3} pb={8} bgcolor="#C68484">
        <Typography className="center" variant="h4">
          Grab the best deals on electronics.
        </Typography>
        <SimpleSlider />
      </Box>
      <Box height="100%" py={5}>
        <Typography pb={5} className="center" variant="h4">
          Get best offers today <span className="hurry">Hurry</span> before they
          ends.
        </Typography>
        <Box
          display="flex"
          gap={3}
          width="100%"
          justifyContent="center"
          flexWrap="wrap"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="box"
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Box className="imgCard " component={Link} href={"#"}>
                <Image
                  src={MobileImg}
                  alt="Mobile Offer"
                  width={200}
                  height={150}
                />
                <Box className="center card-details">
                  <Typography
                    fontWeight={700}
                    variant="h5"
                    color="rgb(47, 28, 5)"
                  >
                    Mobile Offers
                  </Typography>
                  <Typography color="black" variant="h4">
                    Click
                  </Typography>
                  <Typography fontWeight={700} variant="h6">
                    to know more
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.div
              className="box"
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Box className="imgCard" component={Link} href={"#"}>
                <Image
                  src={MacImg}
                  alt="Mobile Offer"
                  width={200}
                  height={150}
                />
                <Box className="center card-details2">
                  <Box className="center-column">
                    <Typography
                      fontWeight={700}
                      variant="h5"
                      color="rgb(47, 28, 5)"
                    >
                      Macbook
                    </Typography>
                    <Typography variant="subtitle2">
                      1,09,999<span>(15% 0ff)</span>
                    </Typography>
                  </Box>

                  <Typography color="black" variant="h4">
                    Click
                  </Typography>
                  <Typography fontWeight={700} variant="h6">
                    to know more
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <motion.div
              className="box"
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Box className="imgCard" component={Link} href={"#"}>
                <Image
                  src={CouponsImg}
                  alt="Mobile Offer"
                  width={200}
                  height={150}
                />
                <Box className="center card-details">
                  <Typography
                    fontWeight={700}
                    variant="h5"
                    color="rgb(47, 28, 5)"
                  >
                    Coupons
                  </Typography>
                  <Typography color="black" variant="h4">
                    Click
                  </Typography>
                  <Typography fontWeight={700} variant="subtitle1">
                    to get latest coupons
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
          >
            <motion.div
              className="box"
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Box className="imgCard" component={Link} href={"#"}>
                <Image
                  src={OffersImg}
                  alt="Mobile Offer"
                  width={200}
                  height={150}
                />
                <Box className="center card-details">
                  <Typography
                    fontWeight={700}
                    variant="h5"
                    color="rgb(47, 28, 5)"
                  >
                    Electronics
                  </Typography>
                  <Typography color="black" variant="h4">
                    Click
                  </Typography>
                  <Typography
                    fontWeight={700}
                    variant="subtitle2"
                    textAlign="center"
                  >
                    to get latest offers on electronics
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferCards;
