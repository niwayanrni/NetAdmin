import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

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
                <Link to="/Bali-Tour-Package">
                    <button className="mt-6 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-6 rounded-lg">
                    Tour Package</button>
                </Link>
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
                        <Link to="/Bali-Tour-Package" onClick={() => window.scrollTo(0, 0)}>
                    <button className="mt-6 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-6 rounded-lg">Explore Our Tour</button>
                    </Link>
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
                        <Link to="/Bali-Tour-Package" onClick={() => window.scrollTo(0, 0)}>
                    <button className="mt-4 bg-[#006666] hover:bg-[#005555] text-white font-semibold py-2 px-4 rounded-lg">View Tours</button>
                    </Link>
                </div>
            </div>

            <div className="relative group scale-90">
                <img src="/src/assets/Homepage/Gambar4.jpg" alt="Activities" className="w-full rounded-lg shadow-lg" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white group-hover:bg-opacity-50">
                        <h3 className="text-xl font-bold">Activities</h3>
                        <Link to="/Bali-Activities" onClick={() => window.scrollTo(0, 0)}>
                    <button className="mt-4 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg">View Tours</button>
                    </Link>
                </div>
            </div>

            <div className="relative group scale-90">
                <img src="/src/assets/Homepage/Gambar5.jpg" alt="Adventure" className="w-full rounded-lg shadow-lg" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white group-hover:bg-opacity-50">
                        <h3 className="text-xl font-bold">Adventure</h3>
                        <Link to="/FastBoat" onClick={() => window.scrollTo(0, 0)}>
                    <button className="mt-4 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg">View Tours</button>
                    </Link>
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
                        <Link to="/IsiTourPackage1" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar7.jpg" alt="Uluwatu" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Badung, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">ULUWATU TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage2" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar8.jpg" alt="Ulun Danu" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">ULUN DANU BERATAN TEMPLE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage3" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar9.jpg" alt="Mount Batur" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Bangli, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">MOUNT BATUR</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage4" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar10.jpg" alt="Jatiluwih Rice Terrace" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">Tabanan, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">JATILUWIH RICE TERRACE</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage5" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src="/src/assets/Homepage/Gambar11.jpg" alt="Kelingking Beach" className="w-full h-48 object-cover" />
            <div className="p-4">
            <p className="text-sm text-left font-light text-gray-600">Klungkung, Bali</p>
                    <h3 className="text-lg text-left font-bold text-gray-800">KELINGKING BEACH</h3>
                        <p className="mt-2 text-left text-[#006666]">Start From $50/PAX </p>
                        <Link to="/IsiTourPackage6" onClick={() => window.scrollTo(0, 0)}>
                    <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button></Link>
                </div>
            </div>
            </div>
                </div>
                    </section>


    {/* Why Choose Us Section */}
        <div className="relative">
            <img
                src="/src/assets/Homepage/Gambar7.jpg"
                alt="Bali Vibes Hero"
                className= "w-full h-[900px] sm:h-[440px] md:h-[500px] lg:h-[440px] object-cover"
                />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-3xl sm:text-3xl font-bold mb-2 mt-0 text-center  text-white font-playfair">Why choose Us</h2>
                    <p className="mt-2 text-1xl sm:text-xl mb-6 text-white font-poppins">Every traveler is unique, and so are our tours. We create customized packages that cater to your preferences, ensuring every moment of your jurney is memorable.</p>
                        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8">

        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Tailored Travel Experiences</h3>
                <p className="font-poppins text-sm">Every traveler is unique, and so are our tours. We create customized packages that cater to your preferences, ensuring every moment of your jurney is memorable.</p>
                    </div>

        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Authentic Local Insights</h3>
                <p className="font-poppins text-sm">Our experienced guieds provide insider views of Bali, taking you to hidden gems and sharing stories that go beyound guidebooks.</p>
                    </div>
                    
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Seamless Travel Services</h3>
                <p className="font-poppins text-sm">From fast boat tickets to guided excursions, we handle all the details so you can relax and enjoy your trip without any hassle.</p>
                    </div>
                    
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Commitment to Quality</h3>
                <p className="font-poppins text-sm">We prioritize your comfort and satisfaction, partnering only with trusted local operators to deliver top-notch services throughout your journey.</p>
                    </div>

        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Responsible Tourism</h3>
                <p className="font-poppins text-sm">We’re passionate about preserving Bali’s beauty. By supporting local communities and promoting sustainable practices, we ensure your visit benefits both you and the island.</p>
                    </div>

        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="font-poppins text-sm">Whether you need assistance before, during, or after your trip, our dedicated team is here to help, ensuring a stress-free travel experience.</p>
                    </div>
                </div>
            </div>
        </div>


    {/* Things to Do Section */}
        <section className="py-16 px-6 md:px-16 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-semibold text-gray-800">Things To Do</h2>
                    <p className="mt-2 text-2xl text-gray-600 mb-[4rem]">Explore the best activities and adventures Bali has to offer.</p>
                < div className="mt-8 mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Gambar 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar12.jpg" alt="Surfing in Bali" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">Surfing at Kuta Beach</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Catch some waves at Bali's most famous beach, perfect for surfers of all levels.</p>
                <button className="mt-8 text-left text-gray-800 font-medium block">READ MORE</button>
            </div>
        </div>

    {/* Gambar 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar13.png" alt="Hiking Mount Agung" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">Hiking Mount Agung</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Embark on an early morning hike to Bali's highest volcano for stunning sunrise views.</p>
                <button className="mt-8 text-left text-gray-800 font-medium block">READ MORE</button>
            </div>
        </div>

    {/* Gambar 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar10.jpg" alt="Snorkeling at Nusa Penida" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">Snorkeling at Nusa Penida</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Discover vibrant coral reefs and marine life around the island of Nusa Penida.</p>
                <button className="mt-2 text-left text-gray-800 font-medium block">READ MORE</button>
            </div>
        </div>

    {/* Gambar 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar6.jpg" alt="Visiting Ubud Monkey Forest" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">Visiting Ubud Monkey Forest</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Meet the friendly monkeys and enjoy the lush greenery of Ubud's iconic forest sanctuary.</p>
                <button className="mt-2 text-left text-gray-800 font-medium block">READ MORE</button>
            </div>
        </div>

    {/* Gambar 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar14.jpg" alt="Exploring Tegallalang Rice Terraces" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">Exploring Tegallalang Rice Terraces</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Marvel at the beautiful terraced rice fields and capture stunning photos.</p>
                <button className="mt-2 text-left text-gray-800 font-medium block">READ MORE</button>
            </div>
        </div>

    {/* Gambar 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar11.jpg" alt="Relaxing at Jimbaran Bay" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">Relaxing at Jimbaran Bay</h3>
                    <p className="mt-2 text-left font-light text-gray-600">Unwind on the serene shores of Jimbaran Bay, enjoy stunning sunsets, and savor fresh seafood by the beach.</p>
                <button className="mt-4 text-left text-gray-800 font-medium block">READ MORE</button>
            </div>
        </div>
            </div>
            </div>
        </section>
    </div>
    );
};

export default Homepage;