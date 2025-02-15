import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const IsiThingsToDo3 = () => {

return (
    <div className="bg-gray-100">

    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/IsiThingsToDo/Gambar3.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white"></div>
        </div>

    {/* Isi Konten */}
        <div className="max-w-6xl mx-auto p-6 mt-8">
            <h1 className="text-2xl font-bold mb-2">Jatiluwih Rice Terrace</h1>

    {/* Tanggal publish */}
        <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-sm" />
            <span>Published on February 12, 2025</span>
        </div>
            <p className="text-gray-700 mb-4 text-justify">
                Located in the highlands of Tabanan, Jatiluwih Rice Terrace is a stunning UNESCO-listed
                site that showcases Bali’s traditional Subak irrigation system. Spanning over 600 hectares,
                this breathtaking landscape features cascading rice fields with a majestic mountain backdrop,
                creating one of the most picturesque views in Bali. The cool air and serene atmosphere make
                it a perfect destination for those seeking tranquility in nature. Visitors can explore scenic
                walking trails, cycle through the lush terraces, or relax at nearby cafés while enjoying the
                spectacular views. Jatiluwih also offers insight into Bali’s rich agricultural heritage, where
                farmers still practice traditional rice cultivation. This destination is popular among nature
                lovers, photographers, and those looking for an authentic Balinese experience. On weekends
                and holidays, it becomes a favorite retreat for both locals and tourists who want to
                immerse themselves in the beauty of Bali’s countryside.
            </p>
            <h2 className="font-bold mt-6 text-lg">TAGS</h2>
                <p className="text-blue-500 text-base">#JatiluwihRiceTerrace #UNESCOHeritage #ScenicViews #BaliNature #SubakIrrigation #RiceFields #GreenLandscape #HikingTrails #CyclingAdventure #CulturalExperience</p>
        
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

export default IsiThingsToDo3;
