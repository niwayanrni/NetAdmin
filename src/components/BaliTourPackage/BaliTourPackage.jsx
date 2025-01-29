import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const BaliTourPackage = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);


return (
    <div className="bg-[#EEEEEE]">
    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/BaliTourPackage/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
            <p className="mt-3 font-playfair font-semibold text-3xl">Bali Tour Package</p>
                </div>
                    </div>

    {/* Popular Tour Packages Section */}
        <section className="py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="mt-[-20px] text-3xl md:text-3xl font-semibold text-gray-800"></h2>
                    <p className="mt-2 text-2xl  text-gray-600"></p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar2.jpg" alt="Tanah Lot" className="w-full h-48 object-cover" />
            <div className="p-4 ">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">LUHUR TANAH LOT TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage1" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar3.jpg" alt="Uluwatu" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Badung, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">ULUWATU TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage2" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar4.jpg" alt="Ulun Danu" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">ULUN DANU BERATAN TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage3" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar5.jpg" alt="Mount Batur" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Bangli, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">MOUNT BATUR</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage4" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar6.jpg" alt="Jatiluwih Rice Terrace" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">JATILUWIH RICE TERRACE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage5" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar7.jpg" alt="Kelingking Beach" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Klungkung, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">KELINGKING BEACH</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage6" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar8.jpg" alt="Kelingking Beach" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Karangasem, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">TIRTA GANGGA</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage7" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar9.jpg" alt="Kelingking Beach" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Bangli, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">TIBUMANA BALI</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage8" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/BaliTourPackage/Gambar10.jpg" alt="Kelingking Beach" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Karangasem, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">LEMPUYANG TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage9" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>
        </div>
        </div>
        </section>
    </div>
    );
};

export default BaliTourPackage;