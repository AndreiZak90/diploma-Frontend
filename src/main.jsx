import "./scss/main.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/diploma-Frontend">
      <App />
    </BrowserRouter>
  </Provider>
);
