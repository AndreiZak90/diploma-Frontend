import "./_HowWork.scss";

import back from "../../../images/Background/Bakground_howWork.png";
import mac from "../../../images/icon/mac.png";
import office from "../../../images/icon/office.png";
import world from "../../../images/icon/world.png";

export default function HowWork() {
  return (
    <section className="howWork" id="howWork">
      <img src={back} alt="train_pach" className="howWork_img_back" />
      <div className="howWork_box">
        <div className="container">
          <div className="howWork_box_up">
            <h3 className="howWork_box_up_title">Как это работает</h3>
            <button className="howWork_box_up_btn">Узнать больше</button>
          </div>
          <div className="howWork_box_info">
            <div className="howWork_box_info_link">
              <div className="info_link_img">
                <span className="info_link_img_box"></span>
                <img src={mac} alt="mac" className="info_link_image" />
              </div>
              <p className="info_link_text">Удобный заказ на сайте</p>
            </div>
            <div className="howWork_box_info_link">
              <div className="info_link_img">
                <span className="info_link_img_box"></span>
                <img src={office} alt="office" className="info_link_image" />
              </div>
              <p className="info_link_text">Нет необходимости ехать в офис</p>
            </div>
            <div className="howWork_box_info_link">
              <div className="info_link_img">
                <span className="info_link_img_box"></span>
                <img src={world} alt="world" className="info_link_image" />
              </div>
              <p className="info_link_text">Огромный выбор направлений</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
