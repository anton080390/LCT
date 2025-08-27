import React from "react";
import Grid from "@mui/material/Grid";
import MainButton from "../components/MainButton";
import "./style.css";

const HeroSection = () => {
  const h2style = {
    color: "#000000ff",
    fontSize: "3.5rem",
    textAlign: "left",
    textTransform: "uppercase",
    margin: "0rem",
    animation: "fadeIn 2.5s ease-in-out forwards",
  };

  const subtitleStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    color: "#000000ff",
    textAlign: "left",
    animation: "fadeIn 3s ease-in-out forwards",
    marginBottom: "0.5rem",
  };

  return (
    <Grid
      container
      className="hero-container"
      sx={{ flexDirection: { xs: "row", md: "column" } }}
    >
      <div className="hero-background"></div>

      <Grid
        item
        xs={12}
        md={6}
        className="hero-block1"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: "17rem",
        }}
      >
        <h2 style={h2style}>
          LIQUID CARGO <br />
          TERMINAL
        </h2>
        <div style={subtitleStyle}>
          <b>Надійний портовий оператор в Миколаєві та Ізмаїлі</b>
        </div>
      </Grid>

      <Grid
        className="hero-grid-1"
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "flex", sm: "none" },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "2rem",
          fontSize: "2rem",
        }}
      >
        <MainButton text="Дізнатися більше" href="about" />
        <MainButton text="Контакти" href="contacts" />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
