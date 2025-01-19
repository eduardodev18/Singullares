import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/home";
import Detail from "./pages/Detail/Detail";

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Detail />} />
                </Routes>
        </Router>
    );
}

export default App;
