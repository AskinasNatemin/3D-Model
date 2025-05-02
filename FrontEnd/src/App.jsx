import DashBoard from "./components/DashBoard";
import Navbar from "./components/Navbar";
import Viewer from "./components/Viewer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/View3DModel' element={<Viewer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
