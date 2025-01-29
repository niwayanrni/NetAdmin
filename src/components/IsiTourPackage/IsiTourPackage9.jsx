import { useState } from "react";

const IsiTourPackage9 = () => {
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
                src="/src/assets/IsiTourPackage/Gambar3.jpg"
                alt="Lempuyang Temple"
                className="w-full h-[380px] object-cover"
            />
            
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
            </div>
                </div>


        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Konten dibawah Header */}
        <div className="ml-0 md:ml-[-60px]">
            <p className="text-gray-600 font-semibold text-lg mt-5">Karangasem, Bali</p>
                <h2 className="text-2xl font-bold mt-1 mb-4">Lempuyang Temple</h2>
                <h3 className="text-base font-bold mt-0 mb-0">Description</h3>
            <p className="mt-1 text-gray-700 text-justify text-base">
                Lempuyang Temple, also known as Pura Lempuyang Luhur, is one of Bali's most
                revered temples, located on the slopes of Mount Lempuyang in Karangasem Regency.
                This ancient temple complex is famous for its breathtaking views of the surrounding
                mountains and rice terraces, making it a must-visit destination for both spiritual seekers and nature lovers.

                The temple is renowned for its iconic "Gateway to Heaven," which offers a stunning
                frame for photographs against the backdrop of Mount Agung. Visitors often trek up
                the 1,700 steps leading to the temple, which is a spiritual journey that rewards them with breathtaking panoramic views.

                Lempuyang Temple is not only a place of worship but also a site of great cultural
                significance, with several smaller temples located within the complex, each featuring unique architecture and serene surroundings.

                The atmosphere is peaceful, allowing visitors to connect with nature and experience the spiritual essence of Bali.

                Early morning visits are recommended to catch the sunrise and enjoy the tranquility before the crowds arrive.
            </p>

        <div className="flex flex-col md:flex-row justify-between mt-4">
            <div className="w-full md:w-1/2">
                <h3 className="text-base font-bold mt-4">Destination</h3>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Tirta Gangga</li>
                    <li>Taman Ujung Water Palace</li>
                    <li>Bukit Jambul Rice Terrace</li>
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
                img: "/src/assets/IsiTourPackage/Gambar6.jpg",
                location: "Tabanan, Bali",
                title: "LUHUR TANAH LOT TEMPLE"
            }, {
                img: "/src/assets/IsiTourPackage/Gambar7.jpg",
                location: "Badung, Bali",
                title: "ULUWATU TEMPLE"
            }, {
                img: "/src/assets/IsiTourPackage/Gambar8.jpg",
                location: "Tabanan, Bali",
                title: "ULUN DANU BERATAN TEMPLE"
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

export default IsiTourPackage9;
