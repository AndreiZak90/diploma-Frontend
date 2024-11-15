/* eslint-disable react-hooks/exhaustive-deps */
import "./_MainUpBlock.scss";

import back from "../../../images/Background/Background_main.png";
import revers from "../../../images/icon/icon_revers.png";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cityListmass from "./cityList";
import { addValueDirection } from "../../../Redux/slices/orderSlice";

export default function MainUpBlock() {
  const dispatch = useDispatch();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const [whereAre, setWhereAre] = useState("");
  const [where, setWhere] = useState("");
  const [cityIn, setCityIn] = useState("");
  const [cityEnd, setCityEnd] = useState("");
  const [dataValue, setDataValue] = useState("");
  const [werDataValue, setWerDataValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAre, setIsOpenAre] = useState(false);
  const [cityList, setCityList] = useState(cityListmass);

  const form = {
    cityIn: cityIn,
    cityEnd: cityEnd,
    dateIn: dataValue,
    dateEnd: werDataValue,
  };

  useEffect(() => {
    dispatch(addValueDirection(form));
  }, [form]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "") return;
    setWhere(value);
    fetch(
      `https://students.netoservices.ru/fe-diplom/routes/cities?name=${value}`
    )
      .then((response) => response.json())
      .then((data) => setCityList(data));
  };

  const handleChangeAre = (e) => {
    const value = e.target.value;
    if (value === "") return;
    setWhereAre(value);
    fetch(
      `https://students.netoservices.ru/fe-diplom/routes/cities?name=${value}`
    )
      .then((response) => response.json())
      .then((data) => setCityList(data));
  };

  const handleInputClick = (item) => {
    setCityIn(item);
    setWhere(item.name);
    setIsOpen(false);
    setCityList(cityListmass);
  };

  const handleInputAreClick = (item) => {
    setCityEnd(item);
    setWhereAre(item.name);
    setIsOpenAre(false);
    setCityList(cityListmass);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputFocusAre = () => {
    setIsOpenAre(true);
  };

  const today = new Date().toISOString().split("T")[0];

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
              <div className="mainForm_direction_inputs_up">
                <div className="mainForm_direction_input_box">
                  <input
                    type="text"
                    value={whereAre}
                    onChange={handleChangeAre}
                    onFocus={handleInputFocusAre}
                    className="mainForm_direction_input point_icon"
                    placeholder="откуда"
                  />
                  {isOpenAre && (
                    <ul className="mainForm_direction_input_list_box">
                      {cityList.map((item, idx) => (
                        <li
                          className="mainForm_direction_input_list"
                          onClick={() => handleInputAreClick(item)}
                          key={idx}
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button className="mainForm_direction_btn_icon">
                  <img
                    src={revers}
                    alt="revers"
                    className="mainForm_direction_btn_icon"
                  />
                </button>
                <div className="mainForm_direction_input_box">
                  <input
                    type="text"
                    value={where}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder="куда"
                    className="mainForm_direction_input point_icon"
                  />
                  {isOpen && (
                    <ul className="mainForm_direction_input_list_box">
                      {cityList.map((item, idx) => (
                        <li
                          className="mainForm_direction_input_list"
                          onClick={() => handleInputClick(item)}
                          key={idx}
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="mainForm_direction">
              <p className="mainForm_direction_title">Дата</p>
              <div className="mainForm_direction_inputs">
                <input
                  type="date"
                  value={dataValue}
                  onChange={(e) => setDataValue(e.target.value)}
                  className="mainForm_direction_input date"
                  min={today}
                />
                <input
                  type="date"
                  value={werDataValue}
                  onChange={(e) => setWerDataValue(e.target.value)}
                  className="mainForm_direction_input date"
                  min={dataValue}
                />
              </div>
            </div>
            <div className="mainForm_direction_sub">
              <button className="mainForm_direction_input_submit">
                <Link to="/trainSelection">найти билеты</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
