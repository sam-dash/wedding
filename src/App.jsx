import "./App.css";
import { MainWidget } from "./components/MainWidget/MainWidget";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainWidget />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
