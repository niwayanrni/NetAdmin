import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-100 py-0">
            <div className="w-full">
                <div className="bg-white shadow-md p-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


    {/* Logo dan Deskripsi */}
        <div className="col-span-1">
            <div className="flex flex-col items-start">
            <div className="mb-4">
                <img
                    src="/src/assets/Navbar/LOGO.png"
                    alt="Bali Vibes Tour Logo"
                    className="h-16 w-auto"
                />
            </div>
                <p className="text-gray-700">
                    Bali Vibes Tour offers a unique blend of adventure, culture, and
                    relaxation, taking you to Bali's most iconic destinations and
                    hidden gems for an unforgettable experience.
                </p>
            </div>
        </div>


    {/* Kontak Informasi */}
        <div className="col-span-1 pl-4">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                <ul className="space-y-2">

                <li>
                    <strong>Email:</strong>
                    <div>
                        <a
                            href="mailto:balivibestour@gmail.com" 
                            className="text-blue-500 hover:underline"
                        >
                            balivibestour@gmail.com
                        </a>
                    </div>
                </li>
        
                <li>
                    <strong>Whatsapp:</strong>
                    <div>
                        <a
                            href="https://wa.me/6282247185629"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            082247185629
                        </a>
                    </div>
                </li>
        
                <li>
                    <strong>Phone:</strong>
                    <div>082247185629</div>
                </li>
        
                <li>
                    <strong>Alamat:</strong>
                    <div>Br Perangsada, Desa Pering, Kec Blahbatuh, Kab Gianyar</div>
                </li>
            </ul>
        </div>


    {/* Follow Us */}
        <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <a
                href="https://www.instagram.com/balivibes_tour" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-pink-500 transition duration-300"
            >
                <img src="/src/assets/Footer/IG.png"  alt="" className="w-6 h-6 mr-2" />
                <span>@balivibes_tour</span>
            </a>
        </div>
            </div>
                </div>

    {/* Footer */}
        <div className="mt-6 text-center text-gray-600 pb-4"> Bali Vibes Tour © 2025 All Rights Reserved. Powered by NetAdmin</div>
        </div>
        </div>
    );
};

export default Footer;