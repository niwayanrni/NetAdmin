import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BaliActivites from "./components/BaliActivities/BaliActivities";
import BaliTourPackage from "./components/BaliTourPackage/BaliTourPackage";
import ContactUs from "./components/ContactUs/ContactUs";
import FashBoat from "./components/FastBoat/FastBoat";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import ThingsToDo from "./components/ThingsToDo/ThingsToDo";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Bali-Tour-Package" element={<BaliTourPackage />} />
          <Route path="/Bali-Activities" element={<BaliActivites />} />
          <Route path="/FastBoat" element={<FashBoat />} />
          <Route path="/ThingsToDo" element={<ThingsToDo />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
