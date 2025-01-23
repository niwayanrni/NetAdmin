import React from 'react';

const Homepage = () => {
return (
    <div className="bg-[#EEEEEE]">

    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/Homepage/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[480px] object-cover"
            />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
            <h1 className="font-poppins font-normal text-2xl">Bali Vibes Tour</h1>
                <p className="mt-4 font-playfair font-semibold text-3xl">Your Dream Bali Experience Starts Here</p>
                    <button className="mt-6 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-6 rounded-lg">
                    Tour Package
                </button>
            </div>
        </div>


    {/* About Us */}
        <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div >
                <img
                    src="/src/assets/Homepage/Gambar2.jpg"
                    alt="Bali Temple"
                    className="w-full h-[340px] rounded-lg shadow-lg"
                />
            </div>


    {/* Text Content */}
        <div className="flex flex-col justify-center">
            <h3 className="font-poppins font-normal text-1xl text-gray-800">About Us</h3>
                <h2 className="font-poppins font-semibold text-3xl text-gray-800 mt-3">Welcome to Bali Vibes Tour</h2>
                    <p className="mt-4 font-poppins font-light text-sm text-gray-600 leading-relaxed text-justify">
                        At Bali Vibes Tour, we are dedicated to showcasing the unparalleled beauty and vibrant culture of Bali to travelers worldwide. Our mission is to craft unforgettable experiences,
                        allowing you to immerse yourself in Bali's rich traditions, stunning natural landscapes, and hidden gems. With a team of experienced travel professionals and knowledgeable local guides,
                        we provide personalized tour packages, exciting activities, and seamless travel services. Whether you're seeking relaxation on Bali's pristine beaches, an exploration of its unique cultural heritage,
                        or thrilling adventures, Bali Vibes Tour is here to make your dream vacation a reality.
                        </p>
                    <button className="mt-6 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-6 rounded-lg">Explore Our Tour</button>
                </div>
            </div>
        </section>


    {/* Choose Your Tour Section */}
        <section className="py-16 px-6 md:px-16 bg-[#EEEEEE]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-semibold text-gray-800  mt-[-80px]">Choose Your Tour</h2>
                    <p className="mt-1 text-2xl text-gray-600">Choose Your Tour, Discover Bali Your Way.</p>
                        <div className="mt-8 grid md:grid-cols-3 gap-6">
                        <div className="relative group scale-90">
                            <img src="/src/assets/Homepage/Gambar3.jpg" alt="Tour Package" className="w-full rounded-lg shadow-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white group-hover:bg-opacity-50">
                            <h3 className="text-xl font-bold">Tour Package</h3>
                        <button className="mt-4 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg">View Tours</button>
                    </div>
                    </div>
                        <div className="relative group scale-90">
                            <img src="/src/assets/Homepage/Gambar4.jpg" alt="Activities" className="w-full rounded-lg shadow-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white group-hover:bg-opacity-50">
                            <h3 className="text-xl font-bold">Activities</h3>
                        <button className="mt-4 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg">View Tours</button>
                    </div>
                    </div>
                        <div className="relative group scale-90">
                            <img src="/src/assets/Homepage/Gambar5.jpg" alt="Adventure" className="w-full rounded-lg shadow-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white group-hover:bg-opacity-50">
                            <h3 className="text-xl font-bold">Adventure</h3>
                        <button className="mt-4 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg">View Tours</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>


    {/* Popular Tour Packages Section */}
        <section className="py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="mt-[-80px] text-3xl md:text-3xl font-semibold text-gray-800">Popular Tour Packages</h2>
                    <p className="mt-2 text-2xl  text-gray-600">Handpicked Tours for Every Dream Vacation.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar6.jpg" alt="Tanah Lot" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">LUHUR TANAH LOT TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                            <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button>
                    </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar7.jpg" alt="Uluwatu" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Badung, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">ULUWATU TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                            <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button>
                    </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar8.jpg" alt="Ulun Danu" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">ULUN DANU BERATAN TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                            <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button>
                    </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar9.jpg" alt="Mount Batur" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Bangli, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">MOUNT BATUR</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                            <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button>
                    </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar10.jpg" alt="Jatiluwih Rice Terrace" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">JATILUWIH RICE TERRACE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                            <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button>
                    </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar11.jpg" alt="Kelingking Beach" className="w-full h-48 object-cover" />
            <div className="p-4">
            <p className="text-sm text-left font-light text-gray-600">Klungkung, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">KELINGKING BEACH</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                            <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button>
                    </div>
            </div>


    {/* Why Choose Us Section */}
    
  
  

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
