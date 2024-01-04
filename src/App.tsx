import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AddItem from "./components/AddItem";
import Items from "./components/Items";
import Generator from "./components/Generator";
import "./App.css";
import Settings from "./components/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
      <Route path="/addItem" element={<AddItem />} />
    </Routes>
  );
}

export default App;
