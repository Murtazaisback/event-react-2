import Link from 'next/link';
import React, { useState } from 'react'
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

const ArchivedCom = () => {
    const [isPanelVisible, setPanelVisibility] = useState(false);

    const togglePanel = () => {
        setPanelVisibility(prev => !prev);
    };
    return (
        <div className="ct_tr_container">

            <div className="ct_tr accordion5">
                <div className="ct_main_data">
                    <p>Event Title 1</p>
                    <p className="c_grey">Event start time - end time</p>
                </div>
                <p className="mar_l">11/10/2025</p>
                {isPanelVisible ? (
                <FaAngleDoubleUp 
                    style={{color: '#FFE100', marginRight: '10px'}} 
                    onClick={togglePanel}
                />
            ) : (
                <FaAngleDoubleDown 
                    style={{color: '#FFE100', marginRight: '10px'}} 
                    onClick={togglePanel}
                />
            )}
            </div>
            <div className={`panel5 ${isPanelVisible ? 'show' : ''}`}>

                <div className="ct_inner_btn">
                    <Link href="/ArchivedEvent">Event Details</Link>
                    <Link href="/ArchivedAttendess">Attendees</Link>
                    <Link href="/ArchivedOrder">Orders</Link>
                    <Link href="/ArchivedPrice">Ticket Prices</Link>
                    <Link href="/ArchivedChart">Seating Chart</Link>
                </div>
            </div>
        </div>
    )
}

export default ArchivedCom
