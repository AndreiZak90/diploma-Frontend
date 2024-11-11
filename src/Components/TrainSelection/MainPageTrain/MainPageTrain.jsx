import Chain from "../Chain/Chain";
import PlaceSetting from "../PlaceSetting/PlaceSetting";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchList } from "../../../Redux/slices/orderSlice";
import Loading from "../LoadingBox/Loading";
import ItemTrainCard from "./ItemTrainCard";

export default function MainPageTrain() {
  const dispatch = useDispatch();
  const { settingTrain, trainCount, direction, loading, error } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(fetchList(direction));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <>
      {loading && <Loading />}
      {error && <p>Ошибка</p>}
      {
        <div className="main_block">
          <Chain pos={1} />
          <div className="container">
            <div className="train_settings">
              <PlaceSetting />
              <div className="box_trian_list">
                <p className="box_trian_list_count">найдено: {trainCount}</p>
                <div className="train_list">
                  {settingTrain.map((item, idx) => (
                    <ItemTrainCard key={idx} state={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
