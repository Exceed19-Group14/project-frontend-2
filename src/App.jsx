import "./App.css";
import Detail from "./Detail";
import Home from "./Home";
import Create from "./Create";
import CreateBoard from "./CreateBoard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Detail_2 from "./Detail_2";
import Edit from "./Edit";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/detail_2" element={<Detail_2 />} />
            <Route path="/create" element={<Create />} />
            <Route path="/createboard" element={<CreateBoard />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
