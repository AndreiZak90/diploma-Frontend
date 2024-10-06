import back from "../../../images/Background/Background_main.png";
import revers from "../../../images/icon/icon_revers.png";

import "./_MainUpBlock.scss";

export default function MainUpBlock() {
  return (
    <section className="mainPage__up_block">
      <img src={back} alt="train" className="mainPage_back_img" />
      <div className="mainPage_info_box">
        <h3 className="mainPage_info_title">
          Вся жизнь - <p className="mainPage_info_title_bold">путешествие!</p>
        </h3>
        <div className="mainPage_form_box">
          <form className="mainForm">
            <div className="mainForm_direction">
              <p className="mainForm_direction_title">Направление</p>
              <div className="mainForm_direction_inputs">
                <input
                  type="text"
                  className="mainForm_direction_input point_icon"
                  placeholder="откуда"
                />
                <button className="mainForm_direction_btn_icon">
                  <img
                    src={revers}
                    alt="revers"
                    className="mainForm_direction_btn_icon"
                  />
                </button>
                <input
                  type="text"
                  placeholder="куда"
                  className="mainForm_direction_input point_icon"
                />
              </div>
            </div>
            <div className="mainForm_direction">
              <p className="mainForm_direction_title">Дата</p>
              <div className="mainForm_direction_inputs">
                <input type="date" className="mainForm_direction_input date" />
                <input type="date" className="mainForm_direction_input date" />
              </div>
            </div>
            <div className="mainForm_direction_sub">
              <button className="mainForm_direction_input_submit">
                найти билеты
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
