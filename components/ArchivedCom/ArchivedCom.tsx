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
                    <a href="./archived_de.html">Event Details</a>
                    <a href="./attendees.html">Attendees</a>
                    <a href="/ManageOrder">Orders</a>
                    <a href="./ticketprices.html">Ticket Prices</a>
                    <a href="./setting_chart.html">Seating Chart</a>
                </div>
            </div>
        </div>
    )
}

export default ArchivedCom
