import React from "react";
import { Grid } from "@mui/material";
import MainButton from "./MainButton";
import checked from "../images/icons/checked_selected_icon.png";
import "../pages/style.css";

const PriceItem = ({ title, items }) => {
  const containerStyle = {
    boxShadow:
      "0px 8px 10px -5px #00000033, 0px 4px 25px 0px #0000001F, 0px 16px 38px -12px #0000008F",
    maxWidth: "42rem",
  };

  const swiperTitle = {
    fontFamily: "Montserrat",
    color: "#E8511C",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "2rem",
    lineHeight: "1.8rem",
    fontWeight: "bold",
  };

  const liText = {
    fontFamily: "Font Awesome 5 Free",
    fontSize: { md: "1.5rem", xs: "1rem" },
    lineHeight: "2rem",
  };

  return (
    <Grid container className="slide-container" style={containerStyle}>
      <Grid>
        <h3 style={swiperTitle}>{title}</h3>
      </Grid>
      <Grid>
        <ul style={{ listStyleType: "none", padding: "1rem" }}>
          {items.map((item, i) => (
            <li key={i} style={liText}>
              <img src={checked} style={{ width: "1.5rem" }} alt="check" />{" "}
              {item}
            </li>
          ))}
        </ul>
      </Grid>
      <Grid>
        <MainButton
          text={"Купити курс"}
          sx={{
            margin: ".3rem",
            width: "15rem",
            height: "3.6875rem",
            fontSize: { md: "1.7rem", xs: "1rem" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PriceItem;
