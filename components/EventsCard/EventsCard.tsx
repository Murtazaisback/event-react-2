import { Rectangle } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./index.css"

const EventsCard = () => {
    return (
        <div className="event_card">
            <Image src={Rectangle} alt='' className='event_card_img' width={270} height={270}/>
            <div className="card_info">
                <p>Event Title</p>
                <p>Sat, July 15, 2025 • 7:30 PM</p>
                <p>Venue Name</p>
                <Link href="/SingleEvent" className="btn sm">Get tickets</Link>
            </div>
        </div>
    )
}

export default EventsCard
