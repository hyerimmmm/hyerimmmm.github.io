import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import "./core/core.css";
import { useSelector } from "react-redux";
import Join from "./pages/Join/Join";
import Explore from "./pages/Explore/Explore";
import NavBar from "./components/NavBar/NavBar";
import Story from "./pages/Story/Story";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state);
  const [isNavBar, setIsNavBar] = useState(null);
  const [storyIdx, setStoryIdx] = useState(undefined);
  const onNavBar = (type, idx) => {
    setIsNavBar(type);
    setStoryIdx(idx);
  };
  return (
    <BrowserRouter>
      {isNavBar === "noNav" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Main onNavBar={onNavBar} />} />
        <Route path="/join" element={<Join onNavBar={onNavBar} />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/stories"
          element={<Story onNavBar={onNavBar} idx={storyIdx} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
