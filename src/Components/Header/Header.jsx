import logo from "../../images/main_logo/logo_train.png";
import "./_header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header__main" id="header">
      <div className="header__main_logo">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Logo" className="main_logo_link" />
          </Link>
        </div>
      </div>
      <div className="header__main_links">
        <div className="container">
          <div className="main_links_box">
            <a href="#aboutUs" className="header__main_link">
              О нас
            </a>
            <a href="#howWork" className="header__main_link">
              Как это работает
            </a>
            <a href="#review" className="header__main_link">
              Отзывы
            </a>
            <a href="#footer" className="header__main_link">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
