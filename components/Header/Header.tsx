'use client'
import { Logo } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import './index.css'
import { BsX, BsList } from 'react-icons/bs'



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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

                <ul className="navs-links" >
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Pricing">Pricing</Link></li>
                    <li><Link href="/EventsPage">EVENTS</Link></li>
                    <li><Link className="login-button pc_none" href="/Login">Login</Link></li>
                    <li><Link href="/NewEvent" className="li_active">CREATE EVENT</Link></li>
                </ul>
            </div>
            <Link href="/Login" className="login-button yellow_cr res_none">Login</Link>

        </nav>
    )
}

export default Header
