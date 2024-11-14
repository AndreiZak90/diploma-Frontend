import "./_itemTrainCard.scss";

import logo from "../../../images/trainCard/logoTrain.png";
import arrowBlack from "../../../images/trainCard/arrowBlack.png";
import rub from "../../../images/trainCard/Valuta.png";

export default function ItemTrainCard(state) {
  const item = state.state;

  const dateIn = new Date(item.departure.from.datetime)
    .toLocaleTimeString()
    .slice(0, -3);
  const dateEnd = new Date(item.departure.to.datetime)
    .toLocaleTimeString()
    .slice(0, -3);

  const timePatch = new Date(item.departure.duration)
    .toLocaleTimeString()
    .slice(0, -3);

  return (
    <div className="itemCard">
      <div className="itemCard__numberTrain">
        <div className="itemCard__numberTrain_up">
          <img
            src={logo}
            alt="Train"
            className="itemCard__numberTrain_up_img"
          />
          <p className="itemCard__numberTrain_up_num_train">
            {item.departure.train.name}
          </p>
          <p className="itemCard__numberTrain_nameCity">
            {item.departure.from.city.name}
            <img
              src={arrowBlack}
              alt="arrow"
              className="itemCard__numberTrain_nameInCity_arrow"
            />
            <br />
            {item.departure.to.city.name}
          </p>
        </div>
        <div className="itemCard__infoTrain">
          <div className="itemCard__numberTrain__timeStation">
            <div className="timeStation_on">
              <span className="timeStation_on_city_timeWhere">{dateIn}</span>
              <span className="timeStation_on_city_name">
                {item.departure.from.city.name}
              </span>
              <div className="timeStation_on_city_nameStation">
                {item.departure.from.railway_station_name} вокзал
              </div>
            </div>
            <div className="timeStation_time">
              <span className="timeStation_time_num">{timePatch}</span>
            </div>
            <div className="timeStation_on">
              <span className="timeStation_on_city_timeWhere">{dateEnd}</span>
              <span className="timeStation_on_city_name">
                {item.departure.to.city.name}
              </span>
              <div className="timeStation_on_city_nameStation">
                {item.departure.to.railway_station_name} вокзал
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
