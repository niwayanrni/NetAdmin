import { useState } from "react";

const IsiFastBoat2 = () => {
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
                    src="/src/assets/IsiFastbout/Gambar2.jpg"
                    alt="FastBoat1"
                    className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Konten dibawah Header */}
                <div className="ml-0 md:ml-[-60px]">
                    <p className="text-gray-600 font-semibold text-lg mt-5">Klungkung, Bali</p>
                    <h2 className="text-2xl font-bold mt-1 mb-4">Fast Boat To Gili</h2>
                    <h3 className="text-base font-bold mt-0 mb-0">Description</h3>
                    <p className="mt-1 text-gray-700 text-justify text-base">
                    Nusa Penida is a stunning island located southeast of Bali, known for its dramatic cliffs,
                    crystal-clear waters, and unspoiled natural beauty. As the largest of the Nusa Islands, it offers
                    breathtaking landscapes, from rugged coastlines to hidden beaches and lush hills.
                    
                    The island is famous for its incredible diving and snorkeling spots, where visitors can
                    swim with manta rays and explore vibrant coral reefs teeming with marine life.
                    One of Nusa Penida’s most iconic landmarks is Kelingking Beach, featuring a T-Rex-shaped
                    cliff and turquoise waters, making it a must-visit spot for photography and adventure seekers.

                    With fewer crowds compared to mainland Bali, the island provides a more tranquil escape, perfect
                    for those seeking adventure and relaxation.The best way to explore Nusa Penida is by renting a
                    scooter or joining a guided tour to visit its remote and breathtaking locations.
                    </p>

                    <div className="flex flex-col md:flex-row justify-between mt-4">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-base font-bold mt-4">Destination</h3>
                            <ul className="list-disc pl-6 text-gray-700 text-base">
                                <li>Nusa Lembongan</li>
                                <li>Nusa Ceningan</li>
                                <li>Crsytal Bay</li>
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
                        <div className="w-full md:w-1/2">
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
                    <p className="mt-0 text-gray-700 text-justify text-base">
                        Orders can be placed now or no later than 1 day before departure. You can book via the
                        booking form on this page or contact us via WhatsApp, Email, or Phone to check availability.
                    </p>
                </div>

                {/* Card untuk book now */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md md:ml-20 md:w-[465px] mb-10 mt-2 md:mt-10 transform scale-97 md:mb-20">
                    <h3 className="text-2xl font-bold mb-4">BOOK NOW</h3>
                    <div className="flex flex-col gap-2 mb-4">
                        <a
                            href="https://wa.me/6282247185629"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#006666] text-white py-2 px-4 rounded w-full mb-2 text-center block"
                        >
                            Whatsapp
                        </a>

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
        </div>
    );
};

export default IsiFastBoat2;
