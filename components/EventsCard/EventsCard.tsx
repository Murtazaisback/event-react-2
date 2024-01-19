'use client'
import { Rectangle } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import "./index.css"
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const EventsCard = ({ showMenuButton = true, eventDateTime=""  }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="event_card">
            <Image src={Rectangle} alt='' className='event_card_img' width={270} height={270}/>
            <div className="card_info">
                <p>Event Title</p>
                <p>{eventDateTime}</p>
                <p>Venue Name</p>
                <div className='card_menu'>

                    <Link href="/sellTickets" className="btn sm">Sell tickets</Link>
                    {showMenuButton && (
                        <div className="menu_container">
                            <HiOutlineDotsHorizontal className="card_btn" onClick={toggleMenu} />
                            {isMenuOpen && (
                                <div className="sub_card_menu">
                                    {/* Add your menu items here */}
                                    <Link href="">Pause Ticket Sales</Link>
                                    <Link href="">End Ticket Sales</Link>
                                    <Link href="">Cancel Event</Link>
                                    <Link href="">Un-publish Event</Link>
                                    <Link href="">Archive Event</Link>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default EventsCard
