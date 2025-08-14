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
      "Ми забезпечуємо комплексні послуги зі зберігання та перевалки вантажів у двох стратегічних портах — Миколаєві та Ізмаїлі. У Миколаєві розташовані склади відкритого та закритого типу, а також спеціалізовані ємності для наливних вантажів, що дозволяє обробляти широкий спектр продукції, включно з аграрними, промисловими та рідкими товарами. В Ізмаїлі функціонують сучасні склади закритого зберігання, призначені переважно для зернових культур, з дотриманням усіх норм безпеки та якості. Ми пропонуємо як короткострокове, так і довгострокове зберігання з можливістю швидкої та ефективної перевалки, що гарантує безперервність логістичного процесу та збереження якості вантажу.",
  },
  {
    title: "Наливні вантажі",
    description:
      "Обробка та зберігання наливних вантажів відповідно до міжнародних стандартів.",
    image: s2,
    fullDescription:
      "Ми надаємо професійні послуги з обробки та зберігання наливних вантажів у місті Миколаїв. Наша компанія має сучасні ємності для зберігання різних типів рідких вантажів, включаючи хімічні та харчові продукти. Ми забезпечуємо безпечне приймання, тимчасове зберігання та подальшу перевалку на судна чи автомобілі. Всі процеси виконуються з високою точністю та ефективністю, дотримуючись міжнародних стандартів безпеки та охорони навколишнього середовища. Наші спеціалісти володіють досвідом роботи з наливними вантажами будь-якої складності та гарантують надійність кожної операції.",
  },
  {
    title: "Лабораторні послуги",
    description: "Контроль якості, хімічний аналіз та сертифікація продукції.",
    image: s3,
    fullDescription:
      "Наші зернові лабораторії розташовані у двох ключових логістичних центрах — Миколаєві та Ізмаїлі. У Миколаєві додатково функціонує сучасна хімічна лабораторія, оснащена новітнім обладнанням для проведення комплексного аналізу та контролю якості продукції. Ми здійснюємо детальні дослідження фізико-хімічних показників, визначаємо вологість, засміченість, білковий склад та інші параметри відповідно до міжнародних стандартів. Кваліфіковані фахівці з багаторічним досвідом роботи забезпечують високу точність результатів та оперативність обробки зразків. За підсумками досліджень ми надаємо офіційні сертифікати якості, що підтверджують відповідність продукції вимогам ринку та гарантують її конкурентоспроможність.",
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
