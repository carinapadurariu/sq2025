import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import the necessary routing components
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Admin from "./components/Admin";


function App() {

    return (
        <Router>
            {/* Wrap your entire app with the Router component */}
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />}/>
                    <Route path="/admin" element={<Admin />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
