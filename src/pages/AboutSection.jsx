import React, { useState } from "react";
import "../pages/about.css";
import "../pages/style.css";
import a1 from "../images/about/a1.jpg";
import a2 from "../images/about/a2.jpeg";
import a3 from "../images/about/a3.jpeg";
import a4 from "../images/about/a4.jpg";
import a5 from "../images/about/a5.jpg";
import i1 from "../images/izmail/i1.jpeg";
import i2 from "../images/izmail/i2.jpeg";
import i3 from "../images/izmail/i3.jpeg";
import i4 from "../images/izmail/i4.jpg";
import i5 from "../images/izmail/i5.jpeg";

function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div id="about">
      {/* Hero-блок сверху страницы */}
      <section className="hero-header">
        <div className="hero-content">
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", margin: "1rem" }}>
            Про нас
          </h1>
        </div>
      </section>

      {/* Контент ниже */}
      <div className="about-grid-container">
        {/* Первая пара: текст + картинки */}
        <div className="block1">
          <div className="text-block">
            <h1 style={{ textAlign: "center" }}>Миколаїв</h1>
            <p>
              ТОВ "Ліквід Карго Термінал" пропонує послуги з приймання,
              відповідального зберігання та відвантаження за варіантом як «сухий
              порт» широкого спектру вантажів, у т.ч.: зернові, зернобобові,
              олійні культури та продукти їх переробки (шрот, висівки та
              рослинна олія) у спеціалізованих складах, харчові та хімічні
              наливні вантажі, вантажі у біг-бегах та генеральні, навалочні
              вантажі відкритого та критого складування. Виконуємо комплекс
              послуг із транспортного опрацювання вантажів, та надання
              додаткових супутніх послуг: накопичення автотранспорту та
              залізничного транспорту на власних майданчиках та залізничних
              коліях, сушіння і доробка зерна, відбір проб та визначення якості
              зернових і олійних культур, зважування транспорту, фасування та
              інші. Термінал має власну сертифіковану лабораторію, яка
              забезпечує контроль якості зернових, зернобобових та продуктів їх
              переробки на всіх етапах перевалки. Зберігання вантажів
              здійснюється у складських приміщеннях – силосах, критих та
              відкритих складах, а також у наливних резервуарах. Норма
              одночасного зберігання в кількості: сільськогосподарської
              продукції 330 тис. тон, навалочних вантажів – 300 тис. тон,
              наливні вантажі – 63 тис. куб. м. При відвантаженні вантажу на
              експорт залізницею зі станції «Вітовська» надається знижка до
              залізничного тарифу у розмірі 30%.
            </p>
          </div>
          <div className="image-block">
            <img
              src={a1}
              alt="Изображение 1"
              onClick={() => openModal(a1)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(25deg)",
                gap: "0px",
              }}
              className="about-image rotate-left"
            />
            <img
              src={a2}
              alt="Изображение 2"
              onClick={() => openModal(a2)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(-25deg)",
                gap: "0px",
              }}
              className="about-image rotate-right"
            />
            <img
              src={a3}
              alt="Изображение 3"
              onClick={() => openModal(a3)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(-25deg)",
                gap: "0px",
              }}
              className="about-image rotate-right"
            />
            <img
              src={a4}
              alt="Изображение 4"
              onClick={() => openModal(a4)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(25deg)",
                gap: "0px",
              }}
              className="about-image rotate-left"
            />
            <img
              src={a5}
              alt="Изображение 5"
              onClick={() => openModal(a5)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(-25deg)",
                gap: "0px",
              }}
              className="about-image rotate-left"
            />
          </div>
        </div>
        {/* Вторая пара: картинки + текст */}
        <div className="block2">
          <div className="image-block">
            <img
              src={i1}
              alt="Изображение 1"
              onClick={() => openModal(i1)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(25deg)",
              }}
              className="about-image rotate-left"
            />
            <img
              src={i2}
              alt="Изображение 2"
              onClick={() => openModal(i2)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(-25deg)",
              }}
              className="about-image rotate-right"
            />
            <img
              src={i3}
              alt="Изображение 3"
              onClick={() => openModal(i3)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(-25deg)",
              }}
              className="about-image rotate-right"
            />
            <img
              src={i4}
              alt="Изображение 4"
              onClick={() => openModal(i4)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(25deg)",
              }}
              className="about-image rotate-left"
            />
            <img
              src={i5}
              alt="Изображение 5"
              onClick={() => openModal(i5)}
              style={{
                maxWidth: "17rem",
                border: "10px solid white",
                // transform: "rotate(-25deg)",
              }}
              className="about-image rotate-left"
            />
          </div>
          <div className="text-block">
            <h1 style={{ textAlign: "center" }}>Ізмаїл</h1>
            <p>
              ТОВ "Ліквід Карго Термінал" — сучасний термінал в Ізмаїлі, що
              спеціалізується на зберіганні та перевалці зернових культур. Ми
              приймаємо вантажі з авто та залізниці, забезпечуємо якісне
              зберігання та швидке відвантаження. На території працює власна
              зернова лабораторія, яка проводить точний аналіз за всіма
              ключовими показниками: вологість, зернова та сміттєва домішки,
              натура, клейковина тощо. Це дозволяє контролювати якість і
              приймати ефективні рішення. Наші потужності дозволяють
              організовувати загальне або індивідуальне зберігання великих
              обсягів зерна. Усі послуги виконують кваліфіковані спеціалісти з
              досвідом роботи у сфері логістики та агроінфраструктури. "Ліквід
              Карго Термінал" — надійний партнер у перевалці та зберіганні
              зерна.
            </p>
          </div>
        </div>
      </div>

      {/* Модальное окно для изображения */}
      {isModalOpen && (
        <div className="modal">
          <img src={modalImage} alt="Изображение в модальном окне" />
          <span className="modal-close" onClick={closeModal}>
            ×
          </span>
        </div>
      )}
    </div>
  );
}

export default AboutSection;
