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
            <Link to="/#aboutUs" className="header__main_link">
              О нас
            </Link>
            <Link to="/#howWork" className="header__main_link">
              Как это работает
            </Link>
            <Link to="/#review" className="header__main_link">
              Отзывы
            </Link>
            <Link to="/#footer" className="header__main_link">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
