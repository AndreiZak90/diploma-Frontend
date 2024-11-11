import { useState } from "react";
import { useSelector } from "react-redux";

import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function PlaceRange() {
  const { direction, settingTrain } = useSelector((state) => state.order);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [newValue, setNewValue] = useState([0, 100]);

  const handleChange = (value) => {
    setNewValue(value);
  };

  return (
    <>
      <div className="price__text_min_max">
        <span className="price__text_min_max_text">от</span>
        <span className="price__text_min_max_text">до</span>
      </div>
      <RangeSlider defaultValue={[min, max]} onChange={handleChange} />
      <div className="price__value_min_max">
        <span className="price__value_min_max_value">{min}</span>
        <span className="price__value_min_max_value">{max}</span>
      </div>
    </>
  );
}
