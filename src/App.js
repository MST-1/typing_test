import { BrowserRouter } from "react-router-dom";
import { Rout } from "./routes/rout.jsx";
import { Navbar } from "./component/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Rout/>
    </BrowserRouter>
  );
}

export default App;
