import "./_HeaderTrain.scss";

import back from "../../../images/Background/TrainSection.png";
import revers from "../../../images/icon/icon_revers.png";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cityListmass from "../../MainPage/MainUpBlock/cityList";
import { addValueDirection } from "../../../Redux/slices/orderSlice";

export default function HeaderTrain() {
  const dispatch = useDispatch();
  const { direction } = useSelector((state) => state.order);
  const [whereAre, setWhereAre] = useState(direction.cityEnd.name);
  const [where, setWhere] = useState(direction.cityIn.name);
  const [dataValue, setDataValue] = useState(direction.dateIn);
  const [werDataValue, setWerDataValue] = useState(direction.dateEnd);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAre, setIsOpenAre] = useState(false);
  const [cityList, setCityList] = useState(cityListmass);

  const form = {
    cityIn: where,
    cityEnd: whereAre,
    dateIn: dataValue,
    dateEnd: werDataValue,
  };

  useEffect(() => {
    dispatch(addValueDirection(form));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [where, whereAre, dataValue, werDataValue]);

  const handleChange = (e) => {
    const value = e.target.value;
    setWhere(value);
    fetch(
      `https://students.netoservices.ru/fe-diplom/routes/cities?name=${value}`
    )
      .then((response) => response.json())
      .then((data) => setCityList(data));
  };

  console.log(direction);

  const handleChangeAre = (e) => {
    const value = e.target.value;
    setWhereAre(value);
    fetch(
      `https://students.netoservices.ru/fe-diplom/routes/cities?name=${value}`
    )
      .then((response) => response.json())
      .then((data) => setCityList(data));
  };

  const handleInputClick = (item) => {
    setWhere(item);
    setIsOpen(false);
    setCityList(cityListmass);
  };

  const handleInputAreClick = (item) => {
    setWhereAre(item);
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
    <section className="header_train">
      <img src={back} alt="back" className="header_train_img_back" />
      <div className="container">
        <div className="mainPage_form_box train_form_box">
          <form className="mainForm mainForm_train">
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
            <div className="mainForm_direction mainForm_direction_train">
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
              <div className="mainForm_direction_sub">
                <button className="mainForm_direction_input_submit">
                  <Link to="/trainSelection">найти билеты</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
