import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router";
import Routers from './routes';
import "./assets/global.css"

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);