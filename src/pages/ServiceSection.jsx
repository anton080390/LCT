import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import "./service.css";

// Импорт изображений
import s1 from "../images/service/s1.jpeg.webp";
import s2 from "../images/service/s2.jpeg";
import s3 from "../images/service/s3.jpeg";
import s4 from "../images/service/s4.jpeg";

const services = [
  {
    title: "Зберігання та перевалка",
    description:
      "Організоване зберігання вантажів із можливістю оперативної перевалки.",
    image: s1,
    fullDescription:
      "Пропонуємо сучасні склади для коротко- і довгострокового зберігання вантажів з ефективною системою перевалки.",
  },
  {
    title: "Наливні вантажі",
    description:
      "Обробка та зберігання наливних вантажів відповідно до міжнародних стандартів.",
    image: s2,
    fullDescription:
      "Ми надаємо професійні послуги з обробки та зберігання наливних вантажів. Всі процеси виконуються з високою точністю та ефективністю.",
  },
  {
    title: "Лабораторні послуги",
    description: "Контроль якості, хімічний аналіз та сертифікація продукції.",
    image: s3,
    fullDescription:
      "Наша лабораторія проводить точний хімічний аналіз для визначення складу та якості продукції, надаючи сертифікати відповідності.",
  },
  {
    title: "Команда професіоналів",
    description:
      "Наша команда — це досвідчені фахівці з логістики та перевалки вантажів.",
    image: s4,
    fullDescription:
      "Ми — команда кваліфікованих спеціалістів, які допомагають клієнтам зберігати, перевалювати та транспортувати вантажі з максимальним комфортом і безпекою. Ми працюємо з кожним клієнтом індивідуально: аналізуємо потреби, підбираємо оптимальні логістичні рішення, забезпечуємо супровід на всіх етапах співпраці. Завдяки злагодженій роботі команди, сучасному обладнанню та глибокому розумінню галузі ми гарантуємо надійність, швидкість і прозорість усіх процесів.",
  },
];

const ServiceSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
  };

  return (
    <section id="services">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: "bold", marginBottom: "2rem", fontSize: "3.5rem" }}
        >
          Наші послуги
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <div className="card-wrapper">
                <Card
                  className="hover-scale"
                  onClick={() => handleOpenDialog(service)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", md: 500 },
                    height: { md: 300 },
                    borderRadius: "16px",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        className="custom-dialog"
      >
        <DialogTitle>{selectedService?.title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="300"
            image={selectedService?.image}
            alt={selectedService?.title}
          />
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            {selectedService?.fullDescription}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Закрити</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default ServiceSection;
