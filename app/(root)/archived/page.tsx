'use client'
import ArchivedCom from '@/components/ArchivedCom/ArchivedCom'
import MainMenusEx from '@/components/MainMenusEx/MainMenusEx'
import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaAngleDoubleDown, FaChevronDown, FaRegCalendarAlt, FaRegUser, FaSearch } from 'react-icons/fa'
import { IoSpeedometerOutline } from 'react-icons/io5'
import './index.css'

const Archived = () => {
    const [isMainOpen, setIsMainOpen] = useState(true);
    const [isEventOpen, setIsEventOpen] = useState(false);

    const toggleMain = () => {
        setIsMainOpen(!isMainOpen);
    };

    const toggleEvent = () => {
        setIsEventOpen(!isEventOpen);
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
                                                <Link href="/archived" className="inner_link_i yellow_m">Archived</Link>
                                                <Link href="/Draft" className='inner_link_i'>Draft</Link>
                                                <Link href="/eventdash" className='inner_link_i'>
                                                    <li className=" inner_flex Exinner_flex ">
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

                            <div className="manage_order_area">

                                <div className="manage_order_section">
                                    <h1>Archived</h1>
                                    <form action="" className="manage_order_form">

                                        <div className="manage_filter_row">
                                            <div className="manage_filter_in">
                                                <input type="search" placeholder="Search by name" />
                                                <i className='bx bx-search'></i>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                                <div className="custom_table">
                                    <div className="ct_head">
                                        <p className="ct_main_data">Event Title</p>
                                        <p className="mar_l">Date Created</p>
                                        <p className="none">.</p>
                                    </div>
                                    <div className="ct_body">
                                        <ArchivedCom />
                                        <ArchivedCom />
                                        <ArchivedCom />
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

export default Archived
