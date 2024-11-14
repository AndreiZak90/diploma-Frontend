import Chain from "../Chain/Chain";
import PlaceSetting from "../PlaceSetting/PlaceSetting";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../LoadingBox/Loading";
import ItemTrainCard from "./ItemTrainCard";

export default function MainPageTrain() {
  const { allTrain, setting, trainCount, loading, error } = useSelector(
    (state) => state.order
  );
  const [mass, setMass] = useState(allTrain);

  const sortTrain = (list, dop) => {
    if (list === []) return list;
    console.log(list);
    console.log(dop);

    return list.filter(
      (item) => item.departure.have_first_class === dop.first_class
    );
  };

  useEffect(() => {
    setMass(sortTrain(allTrain, setting));
  }, [allTrain, setting]);

  return (
    <>
      {loading && <Loading />}
      {error && <p>Ошибка</p>}
      {allTrain && (
        <div className="main_block">
          <Chain pos={1} />
          <div className="container">
            <div className="train_settings">
              <PlaceSetting />
              <div className="box_trian_list">
                <p className="box_trian_list_count">найдено: {trainCount}</p>
                <div className="train_list">
                  {mass.map((item, idx) => (
                    <ItemTrainCard key={idx} state={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
