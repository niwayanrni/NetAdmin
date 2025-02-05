import React from "react";

const ContactUs = () => {
    return (
        <div className="bg-[#EEEEEE] min-h-screen">

    
    {/* Header */}
        <div className="relative">
            <img
                src="/src/assets/ContactUs/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
                <p className="mt-3 font-playfair font-semibold text-3xl">Contact Us</p>
            </div>
        </div>

        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="text-center mt-12 mb-8">
                <h1 className="text-2xl font-bold">Feel Free to Ask Anything, Anytime.</h1>
            <p className="text-gray-600">We’re here to answer your questions, anytime you want.</p>
        </div>


    {/* Contact Us & Send Message */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl mb-20">
    
    {/* Contact Us Section */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-lg p-8 mb-8 md:mb-0 mr-4">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                <p className="mb-1">
                    <strong>Alamat:</strong>
                </p>
            
                <p className="mb-6">
                    JL. Sei Wain KM 15, Balikpapan Utara, Balikpapan, Kalimantan Timur
                </p>

                <p className="mb-1">
                    <strong>Email:</strong>
                </p>

                <p className="mb-6">
                    <a href="mailto:balivibestour@gmail.com" className="text-blue-500">balivibestour@gmail.com</a>
                </p>

                <p className="mb-1">
                    <strong>Phone:</strong>
                </p>

                <p className="mb-6">082247185629</p>

                <p className="mb-1">
                    <strong>Whatsapp:</strong>
                </p>
                
                <p className="mb-6">082247185629</p>

                <p>
                
                <div>
                    <strong>Follow Us:</strong>
                        <div className="flex items-center mt-2">
                            <img src="/src/assets/Footer/IG.png" alt="" className="w-6 h-6 mr-2" />
                        <span>@balivibes_tour</span>
                    </div>
                </div>

                </p>
            </div>

    {/* Send Message Section */}
        <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold mb-4 text-center">Send Message</h2>
                <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                        <input
                        type="tel"
                        id="phone"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your phone number"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                        <input
                        type="text"
                        id="subject"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Subject"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                        id="message"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        rows="4"
                        placeholder="Write your message here..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-500 text-white font-medium py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                    Send
                </button>
            </form>
        </div>
    </div>
        </div>
            </div>
                </div>
    );
};

export default ContactUs;