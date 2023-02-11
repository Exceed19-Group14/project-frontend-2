import "./App.css";
import Detail from "./Detail";
import Home from "./Home";
import Create from "./Create";
import CreateBoard from "./CreateBoard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

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
            <Route path="/create" element={<Create />} />
            <Route path="/createboard" element={<CreateBoard />}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
