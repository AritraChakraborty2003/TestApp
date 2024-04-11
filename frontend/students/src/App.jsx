import "./App.css";
import Home from "./components/Home";
import Imagehandler from "./components/Imagehandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cmspage" element={<Imagehandler />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
