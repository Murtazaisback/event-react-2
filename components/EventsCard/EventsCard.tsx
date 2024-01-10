'use client'
import { Rectangle } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import "./index.css"
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const EventsCard = () => {
    const [isMenuOpen, setMenuOpen] = useState(false); // Step 1: State to manage menu visibility

    const toggleMenu = () => { // Step 2: Event handler to toggle menu
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className="event_card">
            <Image src={Rectangle} alt='' className='event_card_img' width={270} height={270}/>
            <div className="card_info">
                <p>Event Title</p>
                <p>Sat, July 15, 2025 • 7:30 PM</p>
                <p>Venue Name</p>
                <div className='card_menu'>

                    <Link href="/SingleEvent" className="btn sm">Get tickets</Link>
                    <HiOutlineDotsHorizontal className="card_btn" onClick={toggleMenu} />

                </div>
            </div>
        </div>
    )
}

export default EventsCard
