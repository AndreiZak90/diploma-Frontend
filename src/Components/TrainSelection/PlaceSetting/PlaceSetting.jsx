import "./_placeSetting.scss";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import coupe from "../../../images/Carriage/coupe.png";
import express from "../../../images/Carriage/Express.png";
import lux from "../../../images/Carriage/Lux.png";
import reserved from "../../../images/Carriage/Reserved.png";
import sedentary from "../../../images/Carriage/Sedentary.png";
import wiFi from "../../../images/Carriage/Wi-fi.png";
import PlaceRange from "./PlaceRange";
import { addChecked } from "../../../Redux/slices/orderSlice";

export default function PlaceSetting() {
  const dispatch = useDispatch();
  const { direction } = useSelector((state) => state.order);
  const [dataValue, setDataValue] = useState(direction.dateIn);
  const [werDataValue, setWerDataValue] = useState(direction.dateEnd);

  const today = new Date().toISOString().split("T")[0];

  const handleChangeSecond = (event) => {
    const check = event.target.checked;
    dispatch(addChecked({ second_class: check }));
  };

  const handleChangeFirst = (event) => {
    const check = event.target.checked;
    dispatch(addChecked({ first_class: check }));
  };

  const handleChangeThird = (event) => {
    const check = event.target.checked;
    dispatch(addChecked({ third_class: check }));
  };

  const handleChangeFourth = (event) => {
    const check = event.target.checked;
    dispatch(addChecked({ fourth_class: check }));
  };

  const handleChangeWifi = (event) => {
    const check = event.target.checked;
    dispatch(addChecked({ wifi: check }));
  };

  const handleChangeExpress = (event) => {
    const check = event.target.checked;
    dispatch(addChecked({ express: check }));
  };

  return (
    <div className="placeSetting">
      <div className="placeSetting_date placeSettingPad">
        <div className="placeSetting_date_in">
          <p className="placeSetting_date_title">Дата поездки</p>
          <input
            type="date"
            value={dataValue}
            onChange={(e) => setDataValue(e.target.value)}
            className="mainForm_direction_input date"
            min={today}
          />
        </div>
        <div className="placeSetting_date_end">
          <p className="placeSetting_date_title">Дата возвращения</p>
          <input
            type="date"
            value={werDataValue}
            onChange={(e) => setWerDataValue(e.target.value)}
            className="mainForm_direction_input date"
            min={dataValue}
          />
        </div>
      </div>
      <div className="placeSetting_choiceCarriage placeSettingPad">
        <div className="choiceCarriage_item">
          <img src={coupe} alt="coupe" className="choiceCarriage_item_img" />
          <p className="choiceCarriage_item_text">Купе</p>
          <label className="choiceCarriage_item_checkbox">
            <input
              type="checkbox"
              onChange={handleChangeSecond}
              className="choiceCarriage_item_input"
              id="togge"
            />
            <span className="choiceCarriage_item_span"></span>
          </label>
        </div>
        <div className="choiceCarriage_item">
          <img src={reserved} alt="coupe" className="choiceCarriage_item_img" />
          <p className="choiceCarriage_item_text">Плацкарт </p>
          <label className="choiceCarriage_item_checkbox">
            <input
              type="checkbox"
              onChange={handleChangeThird}
              className="choiceCarriage_item_input"
              id="togge"
            />
            <span className="choiceCarriage_item_span"></span>
          </label>
        </div>
        <div className="choiceCarriage_item">
          <img
            src={sedentary}
            alt="coupe"
            className="choiceCarriage_item_img"
          />
          <p className="choiceCarriage_item_text">Сидячий</p>
          <label className="choiceCarriage_item_checkbox">
            <input
              type="checkbox"
              onChange={handleChangeFourth}
              className="choiceCarriage_item_input"
              id="togge"
            />
            <span className="choiceCarriage_item_span"></span>
          </label>
        </div>
        <div className="choiceCarriage_item">
          <img src={lux} alt="coupe" className="choiceCarriage_item_img" />
          <p className="choiceCarriage_item_text">Люкс</p>
          <label className="choiceCarriage_item_checkbox">
            <input
              type="checkbox"
              onChange={handleChangeFirst}
              className="choiceCarriage_item_input"
              id="togge"
            />
            <span className="choiceCarriage_item_span"></span>
          </label>
        </div>
        <div className="choiceCarriage_item">
          <img src={wiFi} alt="coupe" className="choiceCarriage_item_img" />
          <p className="choiceCarriage_item_text">Wi-Fi </p>
          <label className="choiceCarriage_item_checkbox">
            <input
              type="checkbox"
              onChange={handleChangeWifi}
              className="choiceCarriage_item_input"
              id="togge"
            />
            <span className="choiceCarriage_item_span"></span>
          </label>
        </div>
        <div className="choiceCarriage_item">
          <img src={express} alt="coupe" className="choiceCarriage_item_img" />
          <p className="choiceCarriage_item_text">Экспресс</p>
          <label className="choiceCarriage_item_checkbox">
            <input
              type="checkbox"
              onChange={handleChangeExpress}
              className="choiceCarriage_item_input"
              id="togge"
            />
            <span className="choiceCarriage_item_span"></span>
          </label>
        </div>
      </div>
      <div className="placeSetting_price placeSettingPad">
        <p className="placeSetting_date_title">Стоимость</p>
        <PlaceRange />
      </div>
    </div>
  );
}
