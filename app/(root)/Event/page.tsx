'use client'
import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaChevronDown, FaFacebookF, FaLinkedin, FaRegCalendarAlt, FaRegUser, FaTwitter } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import './index.css'
import EventsCard from '@/components/EventsCard/EventsCard'
import { EventImg, One_img } from '@/public'

const Event = () => {
    const [isMainOpen, setIsMainOpen] = useState(false);
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
                                                <FaChevronDown className="icon_sub_menu " onClick={toggleMain} />

                                            </div>
                                        </div>
                                        {isMainOpen && (
                                            <ul className="upper_nav_i panel inner_nav_items2">
                                                <Link href="/archived" className="inner_link_i">Archived</Link>
                                                <Link href="/Draft" className='inner_link_i'>Draft</Link>
                                                <Link href="/eventdash" className='inner_link_i'>
                                                    <li className=" inner_flex Exinner_flex">
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
                            <li>
                                <Link href="/venues">
                                    <SlLocationPin className=" menu_dash_i" />
                                    <span className="link_name">VENUES</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/reports">
                                    <RiMoneyDollarCircleLine className=" menu_dash_i" />
                                    <span className="link_name">REPORTS</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/settingdash">
                                    <FaGear className=" menu_dash_i" />
                                    <span className="link_name">SETTINGS</span>
                                </Link>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <Link href="/SmsCampaigns">
                                        <FaRegMessage className=" menu_dash_i" />
                                        <span className="link_name">SMS CAMPAIGNS</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <Link href="/myaccount">
                                        <FaRegUser className=" menu_dash_i" />
                                        <span className="link_name">MY ACCOUNT</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                            <div className="events_section " data-aos="fade" data-aos-delay="100">
                                <div className="events_row_1">
                                    <div className="para">
                                        <p className="para_title">Share a public version of this page. </p>
                                        <p className="para_p">For example, you can add this to your bio link section on your social media, or share on your website to lead customers to your events.</p>
                                        <div className="copy_links">
                                            <input type="text" disabled className="cursor_pointer" />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                <path d="M17.1667 7.5H9.66667C8.74619 7.5 8 8.24619 8 9.16667V16.6667C8 17.5871 8.74619 18.3333 9.66667 18.3333H17.1667C18.0871 18.3333 18.8333 17.5871 18.8333 16.6667V9.16667C18.8333 8.24619 18.0871 7.5 17.1667 7.5Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4.66699 12.5001H3.83366C3.39163 12.5001 2.96771 12.3245 2.65515 12.0119C2.34259 11.6994 2.16699 11.2754 2.16699 10.8334V3.33341C2.16699 2.89139 2.34259 2.46746 2.65515 2.1549C2.96771 1.84234 3.39163 1.66675 3.83366 1.66675H11.3337C11.7757 1.66675 12.1996 1.84234 12.5122 2.1549C12.8247 2.46746 13.0003 2.89139 13.0003 3.33341V4.16675" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/profile.php?id=61554004420226">

                                            <FaFacebookF className="share_icon_i" target='_blank'/>
                                            </a>
                                            <a href="https://www.instagram.com/eventvisionary/?igshid=MzMyNGUyNmU2YQ%3D%3D">

                                            <FaLinkedin className="share_icon_i" target='_blank'/>
                                            </a>
                                            <a href="https://twitter.com/EventVisionary" target='_blank'>

                                            <FaTwitter className="share_icon_i" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='new_event_list_wap'>

                                        <div className="new_event_list">

                                            <h4>List a New Event</h4>
                                            <a href="./newevent.html">
                                                {/* <i className='bx bx-plus-circle'  ></i> */}
                                                <CiCirclePlus className="new_event_list_i" />

                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="events_row_2">
                                    <div className="event_cards" >
                                        <EventsCard imge={One_img} eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Sell Tickets" TicketHref='/sellTickets' />
                                        <EventsCard imge={EventImg}  eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Sell Tickets" TicketHref='/sellTickets'/>
                                        <EventsCard imge={One_img}  eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Sell Tickets" TicketHref='/sellTickets'/>
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

export default Event
