import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const FastBoat = () => {
    useEffect(() => {
              window.scrollTo(0, 0);
          }, []);
  
return (
    <div className="bg-[#EEEEEE]">
      {/* Header */}
      <div className="relative">
            <img
                src="/src/assets/FastBoat/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
          <p className="mt-3 font-playfair font-semibold text-3xl">
            FastBoat
          </p>
        </div>
      </div>

    {/* FastBoat */}
        <section className="py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="mt-[-20px] text-3xl md:text-3xl font-semibold text-gray-800"></h2>
                    <p className="mt-2 text-2xl  text-gray-600"></p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group group scale-90">
                <img src="/src/assets/FastBoat/Gambar2.jpg" alt="Kapal" className="w-full h-48 object-cover" />
            <div className="p-4 ">
                <p className="text-sm text-left font-light text-gray-600">Jembaran, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">FAST BOAT TO GILI</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $45/PAX </p>
                        <Link to="/IsiFastBoat1" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/FastBoat/Gambar3.jpg" alt="Kapal" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Klungkung, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">FAST BOAT TO NUSA PENIDA</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $45/PAX </p>
                        <Link to="/IsiFastBoat2" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            </div>
            </div>
        </section>
    </div>
  );
};

export default FastBoat;