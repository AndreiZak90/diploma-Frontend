import "./_review.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

import us1 from "../../../images/users_img/user1.png";
import us2 from "../../../images/users_img/user2.png";

export default function Review() {
  const pagination = {
    clickable: true,
  };
  return (
    <section className="review" id="review">
      <div className="container">
        <div className="review_box">
          <h3 className="review_box_title">отзывы</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider_item">
                <img src={us1} alt="user img" className="slider_item_image" />
                <div className="slider_item_info">
                  <h3 className="slider_item_title">Екатерина Вальнова</h3>
                  <div className="slider_item_box_text">
                    <p className="slider_item_text">
                      Доброжелательные подсказки на всех этапах помогут
                      правильно заполнить поля и без затруднений купить авиа или
                      ж/д билет, даже если вы заказываете онлайн билет впервые.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_item">
                <img src={us2} alt="user img" className="slider_item_image" />
                <div className="slider_item_info">
                  <h3 className="slider_item_title">Евгений Стрыкало</h3>
                  <div className="slider_item_box_text">
                    <p className="slider_item_text">
                      СМС-сопровождение до посадки Сразу после оплаты ж/д
                      билетов и за 3 часа до отправления мы пришлем вам
                      СМС-напоминание о поездке.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_item">
                <img src={us1} alt="user img" className="slider_item_image" />
                <div className="slider_item_info">
                  <h3 className="slider_item_title">Екатерина Вальнова</h3>
                  <div className="slider_item_box_text">
                    <p className="slider_item_text">
                      Доброжелательные подсказки на всех этапах помогут
                      правильно заполнить поля и без затруднений купить авиа или
                      ж/д билет, даже если вы заказываете онлайн билет впервые.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_item">
                <img src={us2} alt="user img" className="slider_item_image" />
                <div className="slider_item_info">
                  <h3 className="slider_item_title">Евгений Стрыкало</h3>
                  <div className="slider_item_box_text">
                    <p className="slider_item_text">
                      СМС-сопровождение до посадки Сразу после оплаты ж/д
                      билетов и за 3 часа до отправления мы пришлем вам
                      СМС-напоминание о поездке.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
