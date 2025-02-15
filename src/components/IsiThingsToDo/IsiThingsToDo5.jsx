import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const IsiThingsToDo5 = () => {

return (
    <div className="bg-gray-100">

    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/IsiThingsToDo/Gambar5.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white"></div>
        </div>

    {/* Isi Konten */}
        <div className="max-w-6xl mx-auto p-6 mt-8">
            <h1 className="text-2xl font-bold mb-2">Handara Gate</h1>

    {/* Tanggal publish */}
        <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-sm" />
            <span>Published on February 14, 2025</span>
        </div>
            <p className="text-gray-700 mb-4 text-justify">
                Handara Gate is one of Bali’s most Instagrammable landmarks, famous for its majestic
                Balinese-style split gate set against a backdrop of lush green mountains and misty skies.
                Located in Bedugul, North Bali, this stunning gate is the entrance to the Handara Golf & Resort,
                but it has become a popular photo spot for travelers seeking the perfect Balinese aesthetic.
                With its traditional Balinese architecture, cool mountain air, and breathtaking scenery,
                Handara Gate symbolizes a gateway to serenity and harmony. The symmetrical stone structure,
                surrounded by tropical forests and misty hills, creates a mystical and picturesque atmosphere, making it a must-visit destination.
            </p>
            <h2 className="font-bold mt-6 text-lg">TAGS</h2>
                <p className="text-blue-500 text-base">#HandaraGate #BaliTrip #ExploreBali #BalineseGate #VisitBali #BaliNature #BaliPhotography #InstagramSpot #BaliLandmark #HandaraGolf</p>
        
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

export default IsiThingsToDo5;
