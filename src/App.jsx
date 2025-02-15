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

import IsiBaliActivities1 from "./components/IsiBaliActivities/IsiBaliActivities1";
import IsiTourPackage1 from "./components/IsiTourPackage/IsiTourPackage1";


import IsiFastBoat1 from "./components/IsiFastBoat/IsiFastBoat1";
import IsiFastBoat2 from "./components/IsiFastBoat/IsiFastBoat2";

import IsiThingsToDo1 from "./components/IsiThingsToDo/IsiThingsToDo1";
import IsiThingsToDo2 from "./components/IsiThingsToDo/IsiThingsToDo2";
import IsiThingsToDo3 from "./components/IsiThingsToDo/IsiThingsToDo3";
import IsiThingsToDo4 from "./components/IsiThingsToDo/IsiThingsToDo4";
import IsiThingsToDo5 from "./components/IsiThingsToDo/IsiThingsToDo5";
import IsiThingsToDo6 from "./components/IsiThingsToDo/IsiThingsToDo6";

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

                    <Route path="/IsiTourPackage1/:id" element={<IsiTourPackage1 />} />
                    <Route path="/IsiBaliActivities1/:id" element={<IsiBaliActivities1 />} />

                    <Route path="/IsiFastBoat1" element={<IsiFastBoat1 />} />
                    <Route path="/IsiFastBoat2" element={<IsiFastBoat2 />} />

                    <Route path="/IsiThingsToDo1" element={<IsiThingsToDo1 />} />
                    <Route path="/IsiThingsToDo2" element={<IsiThingsToDo2 />} />
                    <Route path="/IsiThingsToDo3" element={<IsiThingsToDo3 />} />
                    <Route path="/IsiThingsToDo4" element={<IsiThingsToDo4 />} />
                    <Route path="/IsiThingsToDo5" element={<IsiThingsToDo5 />} />
                    <Route path="/IsiThingsToDo6" element={<IsiThingsToDo6 />} />

                </Routes>
            </div>
        <Footer />
    </Router>
);
};

export default App;
