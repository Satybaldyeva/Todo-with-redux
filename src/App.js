import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={null} />
      </Routes>
    </div>
  );
}

export default App;
