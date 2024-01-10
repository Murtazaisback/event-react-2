'use client'
import { Logo } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import './index.css'
import { BsX, BsList } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav>
            <Link href="/">
                <Image src={Logo} alt='logo' className='logo_nav' />
            </Link>


            <button onClick={toggleMenu} className="menu-btn">
                {isOpen ? <BsX className="icon_i" /> : <BsList className="icon_i" />}
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul className="navs-links">
                    <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/Pricing" onClick={closeMenu}>Pricing</Link></li>
                    <li><Link href="/EventsPage" onClick={closeMenu}>EVENTS</Link></li>
                    <li><Link className="login-button pc_none" href="/Login" onClick={closeMenu}>Login</Link></li>
                    <li><Link href="/NewEvent" className="li_active" onClick={closeMenu}>CREATE EVENT</Link></li>
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

            <Link href="/Login" className="login-button yellow_cr res_none" onClick={closeMenu}>Login</Link>
        </nav>
    )
}

export default Header
