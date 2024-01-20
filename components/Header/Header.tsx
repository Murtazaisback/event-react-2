'use client'
import { Logo } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import './index.css'
import { BsX, BsList } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'
import { useRouter } from 'next/router'



const Header = () => {
    const [selectedLink, setSelectedLink] = useState('/'); // Initial selected link is '/'
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const links = [
        { path: '/', text: 'Home' },
        { path: '/Pricing', text: 'Pricing' },
        { path: '/EventsPage', text: 'EVENTS' },
        { path: '/Login', text: 'Login', className: 'login-button pc_none' },
        { path: '/NewEvent', text: 'CREATE EVENT', className: 'li_active' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition >= 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };


    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <Link href="/">
                <Image src={Logo} alt='logo' className='logo_nav' />
            </Link>


            <button onClick={toggleMenu} className="menu-btn">
                {isOpen ? <BsX className="icon_i" /> : <BsList className="icon_i" />}
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul className="navs-links">
                    {links.map(({ path, text, className }) => (
                        <li key={path}>
                            <Link
                                href={path}
                                onClick={() => {
                                    setSelectedLink(path);
                                    closeMenu();
                                }}
                                className={`${className || ''} ${selectedLink === path ? 'yellow_crr' : ''}`}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='dropdwon_custom_warp' style={{display: "none"}}>
                <p className='dropdwon_custom' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    Hover over me
                    <FaChevronDown className="dropdwon_custom_i" />
                </p>
                {isDropdownVisible && (
                    <div className="dropdownStyles">
                        <ul>
                            <Link href="/Dashboard">Dashboard</Link>
                            <Link href="/NewEvent">Create an Event</Link>
                            <Link href="/Events">Events</Link>
                            <Link href="/settingdash">Settings</Link>
                            <Link href="/SmsCampaigns">SMS Campaigns</Link>
                            <Link href="/myaccount">My Account</Link>
                        </ul>
                    </div>
                )}
            </div>

            <Link href="/Login" className="login-button  res_none" onClick={closeMenu}>Login</Link>
        </nav>
    )
}

export default Header
