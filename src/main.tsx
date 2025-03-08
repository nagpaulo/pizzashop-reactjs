import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router";
import Routers from './routes';
import "./assets/global.css"

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);