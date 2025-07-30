import React, { useRef } from "react";
import Grid from "@mui/material/Grid";
import Navigation from "../Navigations/Navigation";
import HeroSection from "../pages/HeroSection";
import AboutSection from "../pages/AboutSection";
import ServiceSection from "../pages/ServiceSection";
import Footer from "../pages/FooterSection";

function Main() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (id) => {
    const sectionRefs = {
      hero: heroRef,
      about: aboutRef,
      service: serviceRef,
      footer: footerRef,
    };

    const targetRef = sectionRefs[id];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Прокрутка к началу блока
      });
    }
  };

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div ref={heroRef} id="hero">
            <HeroSection scrollToSection={scrollToSection} />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div ref={aboutRef} id="about">
            <AboutSection />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div ref={serviceRef} id="service">
            <ServiceSection />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div ref={footerRef} id="footer">
            <Footer />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Main;
