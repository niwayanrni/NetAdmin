import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const IsiThingsToDo4 = () => {

return (
    <div className="bg-gray-100">

    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/IsiThingsToDo/Gambar4.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white"></div>
        </div>

    {/* Isi Konten */}
        <div className="max-w-6xl mx-auto p-6 mt-8">
            <h1 className="text-2xl font-bold mb-2">Luhur Tanah Lot Temple</h1>

    {/* Tanggal publish */}
        <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-sm" />
            <span>Published on February 13, 2025</span>
        </div>
            <p className="text-gray-700 mb-4 text-justify">
                One of Bali’s most iconic destinations, Tanah Lot Beach is famous for its breathtaking offshore
                temple perched on a rocky islet. This sacred Hindu temple, surrounded by crashing waves, offers
                a spectacular view, especially during sunset, making it one of the most photographed spots in Bali.
                Visitors can explore the temple area, walk along the shoreline, or enjoy cultural performances
                and local markets nearby. The spiritual aura and natural beauty of Tanah Lot make it a must-visit
                for those seeking a blend of culture and scenic landscapes. As one of Bali’s most popular tourist
                attractions, Tanah Lot is often crowded, especially during the late afternoon when visitors gather
                to witness the mesmerizing sunset. Despite the crowds, the experience of seeing the temple
                silhouetted against the golden sky is truly unforgettable.
            </p>
            <h2 className="font-bold mt-6 text-lg">TAGS</h2>
                <p className="text-blue-500 text-base">#TanahLot #BaliSunset #IconicTemple #ScenicViews #HinduTemple #OceanWaves #CulturalHeritage #PhotographySpot #SpiritualBali #CoastalBeauty</p>
        
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

export default IsiThingsToDo4;
