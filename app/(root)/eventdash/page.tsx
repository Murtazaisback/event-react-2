'use client'
import MainMenusEx from '@/components/MainMenusEx/MainMenusEx'
import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import { Events_imgs } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaChevronDown, FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'

const EventDash = () => {
    const [isMainOpen, setIsMainOpen] = useState(true);
    const [isEventOpen, setIsEventOpen] = useState(true);
    const toggleMain = () => {
        setIsMainOpen(!isMainOpen);
    };

    const toggleEvent = () => {
        setIsEventOpen(!isEventOpen);
    };
    const [isPaused, setIsPaused] = useState(true);

    const toggleTicketSales = () => {
        setIsPaused(prevState => !prevState);
    };

    return (
        <div className='main_container'>
            <div className="dashboard_main">
                <div className="dashboard_section">
                    <div className="sidebar ">
                        <ul className="nav-links">
                            <Silder_icon />
                            <li>
                                <Link href="/Dashboard">

                                    <IoSpeedometerOutline className=" menu_dash_i" />
                                    <span className="link_name ">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <Link href="/NewEvent">
                                        <CiCirclePlus className=" menu_dash_i" />

                                        <span className="link_name ">CREATE AN EVENT</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <div className="inner_nav_links " id="">
                                        <div className="flex_option_row accordion">

                                            <FaRegCalendarAlt className="menu_dash_i yellow_m" />
                                            <div className="Event_Title  ">
                                                <div className=" inner_flex">
                                                    <Link href="/Event" className='yellow_m'>

                                                        EVENTS
                                                    </Link>
                                                </div>
                                                {/* <i className='bx bxs-chevron-down' id="myElement" onClick={toggleAccordion}></i> */}
                                                <FaChevronDown className="icon_sub_menu" onClick={toggleMain} />

                                            </div>
                                        </div>
                                        {isMainOpen && (
                                            <ul className="upper_nav_i panel inner_nav_items2">
                                                <Link href="/archived" className="inner_link_i">Archived</Link>
                                                <Link href="/Draft" className='inner_link_i'>Draft</Link>
                                                <Link href="/eventdash" className='inner_link_i'>
                                                    <li className=" inner_flex Exinner_flex yellow_m">
                                                        Event Title
                                                        <FaChevronDown className="low_event" onClick={toggleEvent} />
                                                    </li>

                                                </Link>
                                                {isEventOpen && (

                                                    <ul className="inner_nav_items panel2">
                                                        <li className="inner_nav_item"><a href="/sellTickets" className="">Sell Tickets</a></li>
                                                        <li className="inner_nav_item"><a href="/managetwo">Hold Seats</a></li>
                                                        <li className="inner_nav_item"><a href="/scanTickets">Scan Tickets</a></li>
                                                        <li className="inner_nav_item"><a href="/attendees">Attendees</a></li>
                                                        <li className="inner_nav_item"><a href="/ManageOrder">Manage Orders</a></li>
                                                        <li className="inner_nav_item"><a href="/eventdetails" >Event Details</a></li>
                                                        <li className="inner_nav_item"><a href="/ticketprices">Ticket Prices</a></li>
                                                        <li className="inner_nav_item"><a href="/settingChart">Seating Chart</a></li>
                                                    </ul>
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <MainMenusEx />

                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                            <div className="event_dash">
                                <h1>Event Title Show Here</h1>
                                <div className="event_dash_content">
                                    <div className="event_dash_link">
                                        <div className="event_dash_bt">
                                            <h2>What do you want to do?</h2>
                                            <div className="event_warp_btns">
                                                <div className="event_dash_btns">
                                                    <Link href="/sellTickets">Sell Tickets</Link>
                                                    <Link href="/managetwo">Hold Seats</Link>
                                                    <Link href="/scanTickets">Scan Tickets</Link>
                                                    <Link href="/ManageOrder">Manage Orders</Link>
                                                </div>
                                                <div className="event_dash_btns">
                                                    <Link href="/attendees">Manage Attendees</Link>
                                                    <Link href="/eventdetails">Edit Event Details</Link>
                                                    <Link href="/ticketprices">Manage Ticket Prices</Link>
                                                    <Link href="/settingChart">Edit Seating</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Image src={Events_imgs} alt='' className='event_imgs'/>
                                    </div>
                                    <div className="event_dash_action">
                                        <h2>Quick Actions</h2>
                                        <div className="event_dash_info">
                                            <div className="event_dash_ctr">
                                                <Link href="">Pause Ticket Sales</Link>
                                                <Link href="">End Ticket Sales</Link>
                                                <Link href="">Cancel Event</Link>
                                            </div>
                                            <div className="event_dash_text">
                                                <p>Pausing ticket sales will temporarily prevent customers and you from being able to sell tickets online through Event Visionary. You may resume ticket sales by clicking “Resume Sales” at any time before the scheduled end of sales date defined in the event details section.</p>
                                                <p>Ending Ticket sales will prevent you and your customers from being able to purchase tickets for this event. This cannot be undone.</p>
                                                <p>Note: It is your responsibility to let your clients and customers know that this event has been canceled.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default EventDash
