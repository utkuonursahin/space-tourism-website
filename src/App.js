import "./styles/main.scss"
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology"
import Header from "./components/Header/Header";
import {MainProvider} from "./context/MainContext";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import {isMobile} from "react-device-detect";

function App() {
  return (
    <div className="app">
      <MainProvider>
        <Header/>
        {isMobile && <MobileMenu/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/crew" element={<Crew/>} />
          <Route path="/technology" element={<Technology/>} />
        </Routes>
      </MainProvider>
    </div>
  );
}

export default App;
