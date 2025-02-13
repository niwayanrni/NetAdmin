import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const IsiThingsToDo2 = () => {

return (
    <div className="bg-gray-100">

    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/IsiThingsToDo/Gambar2.png"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white"></div>
        </div>

    {/* Isi Konten */}
        <div className="max-w-6xl mx-auto p-6 mt-8">
            <h1 className="text-2xl font-bold mb-2">Bali Botanical Garden</h1>

    {/* Tanggal publish */}
        <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-sm" />
            <span>Published on February 11, 2025</span>
        </div>
            <p className="text-gray-700 mb-4 text-justify">
                Situated in the highlands of Bedugul, Bali Botanical Garden is the largest botanical
                garden in Indonesia and a must-visit destination for nature lovers. Covering an area
                of approximately 157 hectares, this garden is home to a vast collection of tropical plants,
                including rare orchids, giant ferns, and various species of bamboo. One of the main
                attractions here is the peaceful ambiance combined with the cool mountain air, making
                it a perfect escape from the tropical heat. Visitors can explore the lush gardens, visit
                the traditional Balinese temple inside the area, or enjoy a thrilling experience at Bali
                Treetop Adventure Park, which offers zip-lining and rope courses. The garden is also a favorite
                spot for families and groups who want to have a picnic while enjoying the beautiful natural
                surroundings. On weekends and holidays, it becomes a popular retreat for both locals
                and tourists seeking relaxation in the heart of nature.
            </p>
            <h2 className="font-bold mt-6 text-lg">TAGS</h2>
                <p className="text-blue-500 text-base">#BaliBotanicalGarden #NatureEscape #ScenicViews #BedugulHighlands #CoolWeather #TropicalPlants #OrchidGarden #PicnicSpot #FamilyTrip #BotanicalWonder #EcoTourism</p>
        
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

export default IsiThingsToDo2;
