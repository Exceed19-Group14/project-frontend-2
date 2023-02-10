import "./App.css";
import Detail from "./Detail";
import Home from "./Home";
import Create from "./Create";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
