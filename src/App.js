import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {
  return (
    <div className="App">
      hello
      <Routes>
        <Route path="/" element={<Pages.Main />} />
        <Route path="/info" element={<Pages.Info />} />
      </Routes>
    </div>
  );
}

export default App;
