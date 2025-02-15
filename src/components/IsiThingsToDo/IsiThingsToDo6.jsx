import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const IsiThingsToDo6 = () => {

return (
    <div className="bg-gray-100">

    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/IsiThingsToDo/Gambar6.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white"></div>
        </div>

    {/* Isi Konten */}
        <div className="max-w-6xl mx-auto p-6 mt-8">
            <h1 className="text-2xl font-bold mb-2">Kelingking Beach</h1>

    {/* Tanggal publish */}
        <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-sm" />
            <span>Published on February 15, 2025</span>
        </div>
            <p className="text-gray-700 mb-4 text-justify">
                Kelingking Beach is one of Bali’s most spectacular hidden gems, located on Nusa Penida 
                Island. Known for its iconic T-Rex-shaped cliff, this stunning beach boasts turquoise
                waters, dramatic limestone cliffs, and soft white sand, creating a postcard-perfect
                tropical paradise. Perched high above the Indian Ocean, the panoramic viewpoint at Kelingking
                Beach is one of the most famous Instagram spots in Bali. Adventurous travelers can
                hike down the steep and challenging trail to the secluded beach below, where they
                can enjoy the untouched beauty of this hidden paradise.
            </p>
            <h2 className="font-bold mt-6 text-lg">TAGS</h2>
                <p className="text-blue-500 text-base">#KelingkingBeach #NusaPenida #BaliParadise #ExploreBali #HiddenGemBali #BaliViews #BaliNature #BaliTrip #TropicalEscape #BaliAdventure</p>
        
    {/* Bagian Share */}
        <div className="mt-6">
            <h2 className="font-bold text-lg">SHARE POST</h2>
                <div className="flex space-x-4 mt-2 mb-10">
                <a href="https://www.facebook.com/sharer/sharer.php?u=URL_POSTINGAN" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/IsiThingsToDo/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>

                <a href="https://www.instagram.com/?url=URL_POSTINGAN" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/IsiThingsToDo/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>

                <a href="https://t.me/share/url?url=URL_POSTINGAN&text=Check%20this%20out!" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/IsiThingsToDo/telegram.png" alt="Telegram" className="w-6 h-6" />
                </a>

                <a href="https://wa.me/?text=Check%20this%20out!%20URL_POSTINGAN" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/IsiThingsToDo/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                </a>
            </div>
        </div>
        </div>
    </div>
);
};

export default IsiThingsToDo6;
