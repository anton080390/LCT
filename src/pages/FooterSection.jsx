import { Grid, Box } from "@mui/material";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Footer() {
  const phoneNumber = "+380503948155";
  const emailAddress = "atkachenko@gmail.com";
  const companyDescription = "Наші контакти:";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kdgfocc",
        "template_713i9v7",
        e.target,
        "fmoGGolBajMSGggZs"
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);

        e.target.reset();
        const { name, email, message } = e.target.elements;

        const data = {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        };

        console.log("Имя:", name.value);
        console.log("Email:", email.value);
        console.log("Сообщение:", message.value);
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
      });
  };

  return (
    <Grid container spacing={2} className="grid-container" id="contacts">
      <Grid item xs={12}>
        <p className="company-description">{companyDescription}</p>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        className="contacts"
        sx={{ textAlign: "center" }}
      >
        <div className="contact-block">
          <p>Перевалка, зберігання, логістика:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380992399565</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Відділ з адміністративної роботи:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503944865</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Наша пошта:</p>
          <a href={`mailto:${emailAddress}`} className="contact-link">
            <EmailIcon className="icon" />
            <span>office@lct.org.ua</span>
          </a>
        </div>
      </Grid>

      {/* <Grid item xs={12} md={3} sx={{ textAlign: "center", padding: "0" }}>
        <p style={{ fontSize: "2rem" }}>Напишіть нам</p>
        <form onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="from_email"
              placeholder="Ваш Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Сообщение" required />
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              className="submit"
            >
              Отправить
            </Button>
          </div>
        </form>
      </Grid> */}

      <Grid item xs={12} sx={{ padding: 0 }}>
        <h1>Працюємо у Миколаєві:</h1>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18830.09930135226!2d31.98165362865043!3d46.853377584007376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5cdc84e00bc09%3A0x423e2668d6f735d9!2z0KLQntCSICLQm9GW0LrQstGW0LQg0JrQsNGA0LPQviDQotC10YDQvNGW0L3QsNC7Ig!5e1!3m2!1sru!2sua!4v1756982063164!5m2!1sru!2sua"
          sx={{
            width: "100%",
            height: {
              xs: "300px",
              sm: "350px",
              md: "450px",
            },
            maxHeight: "450px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Grid>
      <Grid item xs={12} sx={{ padding: 0 }}>
        <h1>Працюємо у Ізмаїлі:</h1>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8912.573696266205!2d28.807033755519633!3d45.355389424378785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b76fa1f063e9b7%3A0x74c5eb9eaa442d7!2z0KLQntCSICLQm9GW0LrQstGW0LQg0JrQsNGA0LPQviDQotC10YDQvNGW0L3QsNC7Ig!5e1!3m2!1sru!2sua!4v1756982155622!5m2!1sru!2sua"
          sx={{
            width: "100%",
            height: {
              xs: "300px",
              sm: "350px",
              md: "450px",
            },
            maxHeight: "450px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Grid>
    </Grid>
  );
}

export default Footer;
