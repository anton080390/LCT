import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import "./Navigation.css";

const MENU = [
  { name: "Домашня сторінка", id: "hero" },
  { name: "Про нас", id: "about" },
  { name: "Послуги", id: "service" },
  { name: "Контакти", id: "footer" },
];

export default function Navigation({ scrollToSection }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Открытие Drawer
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  // Закрытие Drawer
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Обработчик перехода к секциям
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId); // Плавный скролл к секции
    handleDrawerClose(); // Закрытие меню на мобильных устройствах
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: "rgba(20, 20, 20, 0.6)",
          boxShadow: "none",
          position: "fixed",
          zIndex: 100,
          top: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Меню-кнопка для мобильных устройств */}
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              color="inherit"
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Ссылки для десктопа */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 3,
                  width: "100%",
                }}
              >
                {MENU.map(({ name, id }, index) => (
                  <a
                    key={index}
                    className="navLink"
                    onClick={() => handleScrollToSection(id)}
                  >
                    {name}
                  </a>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer для мобильных устройств */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(20, 20, 20, 0.3)",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            paddingTop: 2,
          }}
        >
          {MENU.map(({ name, id }, index) => (
            <a
              key={index}
              className="drawerNavLink"
              onClick={() => handleScrollToSection(id)}
            >
              {name}
            </a>
          ))}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
