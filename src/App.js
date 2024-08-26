import { Route, Routes } from "react-router-dom";
import MenuTop from "./components/Menus/MenuTop";
import Home from "./pages/home";
import Attendance from "./pages/attendance";
function App() {
  return (
    <MenuTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "pages/attendance/" element = {<Attendance/>} />
      </Routes>
      {/* <Footer/> */}
    </MenuTop>
  );
}

export default App;
