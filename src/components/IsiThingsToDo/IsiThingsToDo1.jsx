import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const IsiThingsToDo1 = () => {

return (
    <div className="bg-gray-100">

    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/IsiThingsToDo/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white"></div>
        </div>

    {/* Isi Konten */}
        <div className="max-w-6xl mx-auto p-6 mt-8">
            <h1 className="text-2xl font-bold mb-2">Karang Sewu Beach</h1>

    {/* Tanggal publish */}
        <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-sm" />
            <span>Published on February 10, 2025</span>
        </div>
            <p className="text-gray-700 mb-4 text-justify">
                Located in the West Bali region, Karang Sewu Beach is a hidden gem that offers
                breathtaking natural beauty. Situated near Gilimanuk, this beach presents a stunning
                view of vast green grasslands harmonizing with the calm sea. The main highlight of
                this beach is its tranquil ambiance, mesmerizing sunrise views, and the wooden pier
                stretching into the ocean, making it a favorite spot for visitors. Tourists can enjoy
                various activities such as strolling, photography, picnicking, and boat rides.
                The Balinese also believe that this area is a natural treasure that should be preserved.
                It is no surprise that this destination becomes a popular getaway for families, especially
                on weekends and during holiday seasons.
            </p>
            <h2 className="font-bold mt-6 text-lg">TAGS</h2>
                <p className="text-blue-500 text-base">#SunriseView #ScenicBeach #HiddenGem #PhotographySpot #NatureLover
                    #RelaxingVibes #PicnicSpot #WoodenPier #PeacefulEscape #BoatingAdventure</p>
        
    {/* Bagian Share */}
        <div className="mt-6">
            <h2 className="font-bold text-lg">SHARE POST</h2>
                <div className="flex space-x-4 mt-2 mb-10">
                <a href="#">
                    <img src="/src/assets/IsiThingsToDo/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>

                <a href="#">
                    <img src="/src/assets/IsiThingsToDo/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>

                <a href="#">
                    <img src="/src/assets/IsiThingsToDo/telegram.png" alt="Telegram" className="w-6 h-6" />
                </a>

                <a href="#">
                    <img src="/src/assets/IsiThingsToDo/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                </a>
            </div>
        </div>
        </div>
    </div>
);
};

export default IsiThingsToDo1;
