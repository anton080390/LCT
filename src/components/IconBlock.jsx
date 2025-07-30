import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Box, ThemeProvider } from "@mui/system";
import { Grid } from "@mui/material";

export default function IconBlock() {
  const boxStyle = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: 0,
    boxShadow: "0px 0.125rem 0.25rem 0px #00000033",
    bgcolor: "primary.main",
    "&:hover": {
      bgcolor: "primary.dark",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    m: "0.3rem",
  };

  const iconItems = [
    { item: faFacebookF, link: "https://mui.com/" },
    { item: faTwitter, link: "https://mui.com/" },
    { item: faGooglePlusG, link: "https://mui.com/" },
    { item: faLinkedinIn, link: "https://mui.com/" },
  ];

  return (
    <Grid container direction="row" justifyContent="center">
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: "#F9F9F9",
              dark: "#e0e0e0",
            },
          },
        }}
      >
        {iconItems.map((icon, index) => (
          <a key={index} href={icon.link}>
            <Box key={index} sx={boxStyle}>
              <FontAwesomeIcon icon={icon.item} style={{ color: "black" }} />
            </Box>
          </a>
        ))}
      </ThemeProvider>
    </Grid>
  );
}
