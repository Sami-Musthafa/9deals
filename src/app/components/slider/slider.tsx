"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import LaptopImg from "../../../assets/images/slider-1.jpg";
import MacImg from "../../../assets/images/macbook.jpg";
import IphoneImg from "../../../assets/images/iphone.jpg";
import SamsungImg from "../../../assets/images/samsung.jpg";
import AirpodsImg from "../../../assets/images/airpods.jpg";
import TabImg from "../../../assets/images/tablet.jpg";
import { useEffect, useState } from "react";
import "./styles.slider.css";
import Link from "next/link";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export default function SimpleSlider() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="center"
    >
      <Box width="80%" height="100%" my={5} mx={5}>
        <Slider className="slider-container" {...settings}>
          <Box height={200} component={Link} href={"#"}>
            <motion.div
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={LaptopImg}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "0 20px",
                }}
              />
            </motion.div>
          </Box>
          <Box height={200} className="slide-box" component={Link} href={"#"}>
            <motion.div
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={MacImg}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "0 20px",
                }}
              />
            </motion.div>
          </Box>
          <Box height={200} className="slide-box" component={Link} href={"#"}>
            <motion.div
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={IphoneImg}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "0 20px",
                }}
              />
            </motion.div>
          </Box>
          <Box height={200} className="slide-box" component={Link} href={"#"}>
            <motion.div
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={SamsungImg}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "0 20px",
                }}
              />
            </motion.div>
          </Box>
          <Box height={200} className="slide-box" component={Link} href={"#"}>
            <motion.div
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={AirpodsImg}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "0 20px",
                }}
              />
            </motion.div>
          </Box>
          <Box height={200} className="slide-box" component={Link} href={"#"}>
            <motion.div
              whileHover={{ scale: [null, 1.15, 1.1] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={TabImg}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "0 20px",
                }}
              />
            </motion.div>
          </Box>
        </Slider>
      </Box>
    </motion.div>
  );
}
