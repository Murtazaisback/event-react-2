'use client'
import { One_img, Rectangle } from '@/public'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import "./index.css"
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

interface EventsCardProps {
    imge: StaticImageData;
    showMenuButton?: boolean;
    eventDateTime?: string;
    TicketType?: string;
    TicketHref?: string;
}
const EventsCard: React.FC<EventsCardProps> = ({ showMenuButton = true, eventDateTime="", TicketType="", TicketHref="", imge }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className="event_card">
            <Image src={imge}alt='' className='event_card_img' width={270} height={270}/>
            <div className="card_info">
                <p>Event Title</p>
                <p>{eventDateTime}</p>
                <p>Venue Name</p>
                <div className='card_menu'>

                    <Link href={TicketHref} className="btn sm">{TicketType}</Link>
                    {showMenuButton && (
                        <div className="menu_container">
                            <HiOutlineDotsHorizontal className="card_btn" onClick={toggleMenu} />
                            {isMenuOpen && (
                                <div className="sub_card_menu">
                                    {/* Add your menu items here */}
                                    <Link href="/ticketprices">Pause Ticket Sales</Link>
                                    <Link href="/ticketprices">End Ticket Sales</Link>
                                    <Link href="/eventdetails">Cancel Event</Link>
                                    <Link href="/eventdetails">Un-publish Event</Link>
                                    <Link href="/eventdetails">Archive Event</Link>
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
