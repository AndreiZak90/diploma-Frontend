import "./_AboutUs.scss";

export default function AboutUs() {
  return (
    <section className="aboutUs" id="aboutUs">
      <div className="container">
        <div className="aboutUs_box">
          <h3 className="aboutUs_box_title">О Нас</h3>
          <div className="aboutUs_box_text_block">
            <p className="aboutUs_box_text">
              Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
              наблюдаем, как с каждым днем <br></br> все больше людей заказывают
              жд билеты через интернет.
            </p>
            <p className="aboutUs_box_text">
              Сегодня можно заказать железнодорожные билеты онлайн всего в 2
              клика, но стоит ли это делать?<br></br> Мы расскажем о
              преимуществах заказа через интернет.
            </p>
            <p className="aboutUs_box_text bold_text">
              Покупать жд билеты дешево можно за 90 суток до отправления поезда.
              <br></br>
              Благодаря динамическому ценообразованию цена на билеты в это время
              самая низкая
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
