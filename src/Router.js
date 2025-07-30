import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import HeroSection from "./pages/HeroSection"; // Исправлено на правильное название
import AboutSection from "./pages/AboutSection";
import ServiceSection from "./pages/ServiceSection";
import Footer from "./pages/FooterSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HeroSection />, // Главная страница
      },
      {
        path: "/about", // Страница "О нас"
        element: <AboutSection />,
      },
      {
        path: "/service", // Страница "О нас"
        element: <ServiceSection />,
      },
      {
        path: "/footer", // Страница "Контакты"
        element: <Footer />,
      },
    ],
  },
]);

export default router;
