import "./scss/main.scss";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
