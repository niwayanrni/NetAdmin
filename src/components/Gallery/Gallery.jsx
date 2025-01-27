import React from "react";

const Gallery = () => {
    return (
        <div className="bg-[#EEEEEE]">
        {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/Gallery/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
            <p className="mt-3 mb-6 font-playfair font-semibold text-3xl">Gallery</p>
        </div>
    </div>

    {/* Gallery */}
        <div className="grid grid-cols-3 gap-4 p-4 pt-24">
            {[{ id: 1, src: "/src/assets/Gallery/Gambar2.jpg", alt: "Sunset on the beach" },
                { id: 2, src: "/src/assets/Gallery/Gambar3.png", alt: "Relaxing in a park" },
                { id: 3, src: "/src/assets/Gallery/Gambar4.jpg", alt: "Tanah Lot temple" },
                { id: 4, src: "/src/assets/Gallery/Gambar5.jpg", alt: "Rice terraces" },
                { id: 5, src: "/src/assets/Gallery/Gambar6.jpg", alt: "Nusa Penida view" },
                { id: 6, src: "/src/assets/Gallery/Gambar7.jpg", alt: "Temple gate" },
                { id: 7, src: "/src/assets/Gallery/Gambar8.jpg", alt: "Hiking Mount Batur" },
                { id: 8, src: "/src/assets/Gallery/Gambar9.jpg", alt: "Sunrise gate" },
                { id: 9, src: "/src/assets/Gallery/Gambar10.jpg", alt: "ATV adventure" },
                { id: 10, src: "/src/assets/Gallery/Gambar11.jpg", alt: "Snorkeling underwater" },
                { id: 11, src: "/src/assets/Gallery/Gambar12.jpg", alt: "Bali swing" },
                { id: 12, src: "/src/assets/Gallery/Gambar13.jpg", alt: "Clear water snorkeling" }].map((photo) => (
        <div key={photo.id} className="rounded-lg overflow-hidden shadow-lg">
            <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
        ))}
    </div>
    </div>
  );
};

export default Gallery;
