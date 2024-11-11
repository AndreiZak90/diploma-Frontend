import gif from "../../../images/gif/animTrain.gif";

export default function Loading() {
  return (
    <div className="LoadBox">
      <img src={gif} alt="Loading" className="loadBox__img" />
    </div>
  );
}
