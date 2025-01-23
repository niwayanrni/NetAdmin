import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BaliActivites from "./components/BaliActivities/BaliActivities";
import BaliTourPackage from "./components/BaliTourPackage/BaliTourPackage";
import FashBoat from "./components/FastBoat/FastBoat";
import Homepage from "./components/Homepage/homepage";

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
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Bali-Tour-Package" element={<BaliTourPackage />} />
          <Route path="/Bali-Activities" element={<BaliActivites />} />
          <Route path="/FastBoat" element={<FashBoat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
