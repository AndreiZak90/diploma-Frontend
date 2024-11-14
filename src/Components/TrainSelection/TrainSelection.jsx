import "./_trainSelection.scss";

import HeaderTrain from "./HeaderTrain/HeaderTrain";
import MainPageTrain from "./MainPageTrain/MainPageTrain";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchList } from "../../Redux/slices/orderSlice";

export default function TrainSelection() {
  const dispatch = useDispatch();
  const { direction } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(fetchList(direction));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);
  return (
    <>
      <HeaderTrain />
      <MainPageTrain />
    </>
  );
}
