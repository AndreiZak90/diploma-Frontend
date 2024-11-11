import "./scss/main.scss";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import TrainSelection from "./Components/TrainSelection/TrainSelection";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/trainSelection" element={<TrainSelection />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
