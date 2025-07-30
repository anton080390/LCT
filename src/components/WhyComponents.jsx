import React, { useEffect } from "react";
import WhyText from "../constants/WhyConstants";
import { Grid } from "@mui/material";
import "../pages/style.css";

const WhyComponents = () => {
  useEffect(() => {
    const handleScroll = () => {
      const whyElements = document.querySelectorAll(".block");

      whyElements.forEach((element, index) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          setTimeout(() => {
            element.classList.add("visible");
          }, index * 350);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {WhyText.map((text, index) => (
        <Grid
          item
          key={index}
          md={6}
          xs={12}
          className="block"
          style={{
            display: "flex",
            margin: "1rem",
            maxWidth: "35.375rem",
            height: "12rem",
            alignContent: "center",
          }}
        >
          <span className="blockText">{text}</span>
        </Grid>
      ))}
    </>
  );
};

export default WhyComponents;
