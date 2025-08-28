import React from 'react';
import {Link} from "react-router-dom";
import { RiHome9Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";

import avatarImg from "../assets/avatar.png"
import {useState} from "react";

const navigation = [
    {name: "Home", href: "/dashboard"},
    {name: "Orders", href: "/orders"},
    {name: "Cart Page", href: "/cart"},
    {name: "Check Out", href: "/checkout"},
]

const Navbar = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentUser = false;

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/*left side*/}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <RiHome9Line className="size-6"/>
                    </Link>

                    <div className="relative md:w-72 w-40 space-x-2">
                        <RiSearch2Line className="absolute inline-block left-3 inset-y-2"/>
                        <input type="text" placeholder="Search"
                               className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none focus:shadow-outline"/>
                    </div>
                </div>

                {/*right side*/}
                <div className="relative flex items-center md:space-x-2 space-x-2">
                    <div className="relative flex items-center md:gap-16 gap-4">
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img
                                        src={avatarImg}
                                        alt="Avatar"
                                        className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-400' : ''}`}
                                    />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border-2 shadow-lg rounded-md z-40">
                                        <ul className="py-1">
                                            {navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500 hover:shadow-md hover:shadow-gray-100">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to="./login">
                                <RiUser3Line className="size-6"/>
                            </Link>
                        )}
                    </div>
                    <button>
                        <RiHeart3Line className="size-6"/>
                    </button>
                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-lg">
                        <RiShoppingBag4Line className="size-6"/>
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
