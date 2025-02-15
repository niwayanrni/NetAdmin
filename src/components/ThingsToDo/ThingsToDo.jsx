import React from 'react';
import { Link } from "react-router-dom";

const ThingsToDo = () => {

return (
    <div className="bg-[#EEEEEE]">
    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/ThingsToDo/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
            <p className="mt-3 font-playfair font-semibold text-3xl">Things To Do</p>
        </div>
    </div>

    {/* Things to Do Section */}
        <section className="py-16 px-6 md:px-16 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto text-center">
        < div className="mt-8 mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8">

    {/*   Gambar 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar12.jpg" alt="Surfing in Bali" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">KARANG SEWU BEACH </h3>
                    <p className="mt-2 text-left font-light text-gray-600">Karang Sewu Beach is located at jembrana, part of West Bali National Park.</p>
                    <Link to="/IsiThingsToDo1" onClick={() => window.scrollTo(0, 0)}>
                <button className="mt-8 text-left text-gray-800 font-medium block">READ MORE</button></Link>
            </div>
        </div>

    {/* Gambar 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar13.png" alt="Hiking Mount Agung" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">BALI BOTANICAL GARDEN</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Bali Botanical Garden is a large tropical botanic garden in Bali is located in Bedugul.</p>
                    <Link to="/IsiThingsToDo2" onClick={() => window.scrollTo(0, 0)}>
                <button className="mt-2 text-left text-gray-800 font-medium block">READ MORE</button></Link>
            </div>
        </div>

    {/* Gambar 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar10.jpg" alt="Snorkeling at Nusa Penida" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">JATILUWIH RICE TERRACE</h3>
                    <p className="mt-2 text-left font-light text-gray-600">One of the heritage site by UNESCO in Bali is Jatiluwih rice terrace. Located in.</p>
                    <Link to="/IsiThingsToDo3" onClick={() => window.scrollTo(0, 0)}>
                <button className="mt-2 text-left text-gray-800 font-medium block">READ MORE</button></Link>
            </div>
        </div>

    {/* Gambar 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar6.jpg" alt="Visiting Ubud Monkey Forest" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">LUHUR TANAH LOT TEMPLE</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Tanah Lot is an iconic temple perched on a rocky outcrop by the sea in Bali.</p>
                    <Link to="/IsiThingsToDo4" onClick={() => window.scrollTo(0, 0)}>
                <button className="mt-2 text-left text-gray-800 font-medium block">READ MORE</button></Link>
            </div>
        </div>

    {/* Gambar 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar14.jpg" alt="Exploring Tegallalang Rice Terraces" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">HANDARA GATE</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Handara Gate is a majestic traditional Balinese gate set against a backdrop of lush greenery and mountains.</p>
                    <Link to="/IsiThingsToDo5" onClick={() => window.scrollTo(0, 0)}>
                <button className="mt-4 text-left text-gray-800 font-medium block">READ MORE</button></Link>
            </div>
        </div>

    {/* Gambar 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar11.jpg" alt="Relaxing at Jimbaran Bay" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">KELINGKING BEACH</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Kelingking Beach is a breathtaking beach on Nusa Penida, famous for its T-Rex-shaped cliff.</p>
                    <Link to="/IsiThingsToDo6" onClick={() => window.scrollTo(0, 0)}>
                <button className="mt-4 text-left text-gray-800 font-medium block">READ MORE</button></Link>
            </div>
        </div>
            </div>
            </div>
        </section>
    </div>
);
};

export default ThingsToDo;