import { useState } from "react";

const IsiTourPackage4 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bookingDate: "",
        pax: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
    };

return (
        <div className="bg-[#EEEEEE]">
    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/IsiTourPackage/Gambar9.jpg"
                alt="Mount Batur"
                className="w-full h-[380px] object-cover"
            />
            
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
            </div>
                </div>


        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Konten dibawah Header */}
        <div className="ml-0 md:ml-[-60px]">
            <p className="text-gray-600 font-semibold text-lg mt-5">Bangli, Bali</p>
                <h2 className="text-2xl font-bold mt-1 mb-4">Mount Batur</h2>
                <h3 className="text-base font-bold mt-0 mb-0">Description</h3>
            <p className="mt-1 text-gray-700 text-justify text-base">
                Mount Batur is an active volcano located in Kintamani, Bangli Regency, Bali. 
                This volcanic peak stands at 1,717 meters above sea level and is famous for 
                its breathtaking sunrise views. It is one of Bali’s most popular trekking spots, 
                attracting adventurers seeking a rewarding climb and stunning landscapes.

                The sunrise trek starts before dawn, allowing visitors to witness the golden 
                hues illuminating the vast caldera and Lake Batur, creating an unforgettable 
                experience. The moderate hike takes about two hours and offers panoramic views of the surrounding highlands.

                Nearby, the Batur Natural Hot Spring provides a relaxing retreat where 
                visitors can soak in warm volcanic waters while enjoying scenic lake views. 
                The Kintamani Viewpoint is another highlight, offering breathtaking perspectives of Mount Batur, the lake, and the lush countryside.

                Considered sacred by the Balinese, Pura Ulun Danu Batur is an important 
                Hindu temple dedicated to the lake goddess, playing a significant role in local religious ceremonies.
            </p>

        <div className="flex flex-col md:flex-row justify-between mt-4">
            <div className="w-full md:w-1/2">
                <h3 className="text-base font-bold mt-4">Destination</h3>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Mount Batur</li>
                    <li>Batur Natural Hot Spring</li>
                    <li>Kintamani Viewpoint</li>
                </ul>
            </div>

            <div className="w-full md:w-1/2">
                <h3 className="text-base font-bold mt-4">Includes</h3>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Driver as guide</li>
                    <li>Car with air-conditioner</li>
                    <li>Fuel</li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-4">
            <div className= "w-full md:w-1/2">
                <h3 className="text-base font-bold mt-4">Exludes</h3>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Entarance Fee</li>
                    <li>Lunch</li>
                    <li>Shopping</li>
                </ul>
            </div>

            <div className="w-full md:w-1/2">
                <h3 className="text-base font-bold mt-4">Note</h3>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Entrance Fee</li>
                    <li>Minimum booking: 2 pax</li>
                </ul>
            </div>
        </div>
            
            <h3 className="text-base font-bold mt-6">How To Order</h3>
            <p className="mt-0  text-gray-700 text-justify text-base">
                Orders can be placed now or no later than 1 day before departure. You can book via the
                booking form on this page or contact us via WhatsApp, Email, or Phone to check availability.
            </p>
        </div>

    {/* Card untuk book now */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md md:ml-20 md:w-[465px] mb-10 mt-2 md:mt-10 transform scale-97 md:mb-20">
            <h3 className="text-2xl font-bold mb-4">BOOK NOW</h3>
        <div className="flex flex-col gap-2 mb-4">
            <button className="bg-[#006666] text-white py-2 px-4 rounded w-full mb-2">Whatsapp</button>
            <button className="bg-[#006666] text-white py-2 px-4 rounded w-full mb-2">Email</button>
        </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                />
            
            <div className="flex gap-2">
                <input
                    type="date"
                    name="bookingDate"
                    className="w-1/2 p-2 border rounded"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="pax"
                    placeholder="Guest/Pax"
                    className="w-1/2 p-2 border rounded"
                    onChange={handleChange}
                />
            
            </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full p-2 border rounded h-48"
                    onChange={handleChange}
                ></textarea>
                    <button type="submit" className="bg-[#006666] text-white w-full p-2 rounded">SUBMIT</button>
                </form>
            </div>
        </div>


    {/* Popular Tour Packages section */}
        <section className="py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="mt-[-80px] text-3xl md:text-3xl font-semibold text-gray-800">Popular Tour Packages</h2>
                <p className="mt-2 text-2xl text-gray-600">Handpicked Tours for Every Dream Vacation.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
                img: "/src/assets/IsiTourPackage/Gambar10.jpg",
                location: "Tabanan, Bali",
                title: "JATILUWIH RICE TERRACE"
            }, {
                img: "/src/assets/IsiTourPackage/Gambar11.jpg",
                location: "Klungkung, Bali",
                title: "KELINGKING BEACH"
            }, {
                img: "/src/assets/IsiTourPackage/Gambar1.jpg",
                location: "Karangasem, Bali",
                title: "TIRTA GANGGA"
            }].map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group scale-90">
                <img src={pkg.img} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-left font-light text-gray-600">{pkg.location}</p>
                <h3 className="text-lg text-left font-bold text-gray-800">{pkg.title}</h3>
                <p className="mt-2 text-left text-[#006666]">Start From $50/PAX</p>
                <button className="flex justify-start mt-8 bg-[#006666] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg mr-auto">Detail</button>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    </div>
);
};

export default IsiTourPackage4;
