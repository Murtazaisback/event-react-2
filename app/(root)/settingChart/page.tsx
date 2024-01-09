'use client'
import ArchivedBack from '@/components/ArchivedBack/ArchivedBack';
import MainMenusEx from '@/components/MainMenusEx/MainMenusEx';
import SettingChartCom from '@/components/SettingChartCom/SettingChartCom';
import { Silder_icon } from '@/components/SubMenus/SubMenus';
import TicketPrice from '@/components/TicketPrice/TicketPrice';
import Link from 'next/link';
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegCalendarAlt, FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import { IoSpeedometerOutline } from 'react-icons/io5';

const settingChart = () => {
    const [isMainOpen, setIsMainOpen] = useState(true);
    const [isEventOpen, setIsEventOpen] = useState(true);

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
                                                <Link href="/archived" className="inner_link_i ">Archived</Link>
                                                <Link href="/Draft" className='inner_link_i'>Draft</Link>
                                                <div className='Exinner_flex '>

                                                    <Link href="/eventdash" className='inner_link_i'>
                                                        <li className=" inner_flex Exinner_flex yellow_m">
                                                            Event Title
                                                        </li>

                                                    </Link>
                                                    <FaChevronDown className="low_event" onClick={toggleEvent} />
                                                </div>
                                                {isEventOpen && (

                                                    <ul className="inner_nav_items panel2">
                                                        <li className="inner_nav_item "><a href="/sellTickets" >Sell Tickets</a></li>
                                                        <li className="inner_nav_item"><a href="/managetwo">Hold Seats</a></li>
                                                        <li className="inner_nav_item"><a href="/scanTickets">Scan Tickets</a></li>
                                                        <li className="inner_nav_item"><a href="/attendees">Attendees</a></li>
                                                        <li className="inner_nav_item"><a href="/ManageOrder" >Manage Orders</a></li>
                                                        <li className="inner_nav_item"><a href="/eventdetails" >Event Details</a></li>
                                                        <li className="inner_nav_item"><a href="/ticketprices" className=''>Ticket Prices</a></li>
                                                        <li className="inner_nav_item"><a href="/settingChart" className='yellow_m'>Seating Chart</a></li>
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
                       <SettingChartCom title="Event Title: Seating Chart"/>

                        </div>
                    </section>
                </div>
            </div>
        </div>
  )
}

export default settingChart
