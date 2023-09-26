import { useState } from 'react';
import './App.css';
import { MyNavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { Banner } from './components/Banner';
import { Presentation } from './components/Presentation';
import { Footer } from "./components/Footer";
import { About } from './components/About';
import { ContactMap } from './components/ContactMap';
import { CarProfile } from './components/CarProfile';
import { Harta } from './components/Harta'; // Import the Harta component

function App() {
  const [showLoginComponent, setShowLoginComponent] = useState(false);
  const [pageState, setPageState] = useState('home');
  
  return (
    <div className="App">
      <MyNavBar
        setShowLoginComponent={setShowLoginComponent}
        setPageState={setPageState}
      />
      {showLoginComponent && <Login />}
      {pageState === 'about' && <About />} 
      {pageState === 'contact' && <ContactMap />} 
      {pageState === 'car' && <CarProfile />} 
      {pageState === 'home' && <Banner />} 
      {pageState === 'home' && <Presentation />}
      {pageState === 'harta' && <Harta />} 
      <Footer />
    </div>
  );
}

export default App;
