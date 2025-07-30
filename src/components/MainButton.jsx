// components/MainButton.jsx
import React from "react";
import Button from "@mui/material/Button";

const MainButton = ({ text, href, sx }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonStyles = {
    backgroundColor: "#ffffff",
    fontFamily: "Roboto",
    color: "black",
    borderRadius: 0,
    boxShadow: "0 .5rem .5rem 0 #00000040",
    fontWeight: 900,
    fontSize: "1rem",
    textAlign: "center",
    letterSpacing: 0,
    width: "15rem",
    opacity: 0.7,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
    ...sx, // чтобы можно было передавать дополнительные стили
  };

  return (
    <Button variant="contained" onClick={handleClick} sx={buttonStyles}>
      {text}
    </Button>
  );
};

export default MainButton;
