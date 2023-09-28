import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import the necessary routing components
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import {Contact} from "./components/Contact";
import Admin from "./components/Admin";
import UserPage from "./components/UserPage";
import EditUserProfile from "./components/EditUserProfile.js"
import { MyNavBar } from "./components/NavBar";
import {CarMap} from "./components/CarMap"
import { ContactMap } from "./components/ContactMap";
import {CarProfile} from "./components/CarProfile"
import {About}  from "./components/About"

function App() {

    return (
        <Router>
            {/* Wrap your entire app with the Router component */}
            <div className="App">
                <MyNavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/userpage" element={<UserPage />} />
                    <Route path="/contactMap" element={<ContactMap />} />
                    <Route path="/carProfile" element={<CarProfile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/edituserprofile" element={<EditUserProfile />} />
                    <Route path="/carmap" element={<CarMap/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
