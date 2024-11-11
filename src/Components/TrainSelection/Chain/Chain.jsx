import "./_chain.scss";

import vector from "../../../images/vector/Vector.png";

export default function Chain(pos) {
  if (pos.pos === 1) {
    return (
      <section className="chain">
        <div className="chain_box">
          <span className="chain_item side_box  active_chain">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box chain_item_back">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box chain_item_back">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item side_box chain_item_back"></span>
        </div>
        <div className="container">
          <div className="chain_block_text">
            <div className="chain_item_name">
              <div className="chain_item_name_num">1</div>
              <p className="chain_item_name_text">Билеты</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">2</div>
              <p className="chain_item_name_text">Пассажиры</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">3</div>
              <p className="chain_item_name_text">Оплата</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">4</div>
              <p className="chain_item_name_text">Проверка</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (pos.pos === 2) {
    return (
      <section className="chain">
        <div className="chain_box">
          <span className="chain_item side_box active_chain">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box active_chain chain_item_back_active">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box chain_item_back">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item side_box chain_item_back"></span>
        </div>
        <div className="container">
          <div className="chain_block_text">
            <div className="chain_item_name">
              <div className="chain_item_name_num">1</div>
              <p className="chain_item_name_text">Билеты</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">2</div>
              <p className="chain_item_name_text">Пассажиры</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">3</div>
              <p className="chain_item_name_text">Оплата</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">4</div>
              <p className="chain_item_name_text">Проверка</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (pos.pos === 3) {
    return (
      <section className="chain">
        <div className="chain_box">
          <span className="chain_item side_box  active_chain">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box active_chain chain_item_back_active">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box active_chain chain_item_back_active">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item side_box chain_item_back"></span>
        </div>
        <div className="container">
          <div className="chain_block_text">
            <div className="chain_item_name">
              <div className="chain_item_name_num">1</div>
              <p className="chain_item_name_text">Билеты</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">2</div>
              <p className="chain_item_name_text">Пассажиры</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">3</div>
              <p className="chain_item_name_text">Оплата</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">4</div>
              <p className="chain_item_name_text">Проверка</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (pos.pos === 4) {
    return (
      <section className="chain">
        <div className="chain_box">
          <span className="chain_item side_box  active_chain">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box active_chain chain_item_back_active">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item centre_box active_chain chain_item_back_active">
            <img src={vector} alt="vector" className="chain_item_vector" />
          </span>
          <span className="chain_item side_box active_chain chain_item_back_active"></span>
        </div>
        <div className="container">
          <div className="chain_block_text">
            <div className="chain_item_name">
              <div className="chain_item_name_num">1</div>
              <p className="chain_item_name_text">Билеты</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">2</div>
              <p className="chain_item_name_text">Пассажиры</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">3</div>
              <p className="chain_item_name_text">Оплата</p>
            </div>
            <div className="chain_item_name">
              <div className="chain_item_name_num">4</div>
              <p className="chain_item_name_text">Проверка</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
