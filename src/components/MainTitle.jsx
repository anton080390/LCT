import * as React from "react";
import { Typography } from "@mui/material";

export default function MainTitle({ text, sx }) {
  return (
    <Typography variant="h2" style={sx}>
      {text}
    </Typography>
  );
}
