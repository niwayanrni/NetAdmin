import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
        const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gray-100 py-3 px-10">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-15">

    {/* Untuk Logo Navbar */}
        <div className="flex items-center space-x-2">
            <img
                src="/src/assets/Navbar/LOGO.png"
                alt="Bali Vibes Tour Logo"
                className="h-16 w-auto"
            />
        </div>

    {/* Untuk Toggle Menu */}
        <button
            className="md:hidden p-2 text-gray-800 focus:outline-none"
            onClick={toggleMenu}
        >
            {isOpen ? (
                <span>&times;</span>
            ) : (
                <span>&#9776;</span>
            )}
        </button>

    {/* Menu */}
        <ul
            ref={menuRef}
            className={`${
                isOpen ? "block" : "hidden"
            } absolute top-20 right-20 max md:static md:flex md:space-x-6 text-gray-800 font-poppins font-semibold bg-gray-100 md:bg-transparent z-20 w-56 md:w-auto `}
        >
        <li>
            <Link to="/" className="block py-2 hover:text-yellow-600">Home</Link>
                </li>
        
        <li>
            <Link to="/Bali-Tour-Package" className="block py-2 hover:text-yellow-600">Bali Tour Package</Link>
                </li>

        <li>
            <Link to="/Bali-Activities" className="block py-2 hover:text-yellow-600">Bali Activities</Link>
                </li>

        <li>
            <Link to="/FastBoat" className="block py-2 hover:text-yellow-600">Fastboat Ticket</Link>
                </li>
        
        <li>
            <Link to="/ThingsToDo" className="block py-2 hover:text-yellow-600">Things To Do</Link>
                </li>
        
        <li>
            <Link to="/Gallery" className="block py-2 hover:text-yellow-600">Gallery</Link>
                </li>
        
        <li>
            <Link to="/ContactUs" className="block py-2 hover:text-yellow-600">Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;