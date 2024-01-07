'use client'
import EventRegister from '@/components/EventRegister/EventRegister'
import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import TicketPrice from '@/components/TicketPrice/TicketPrice'
import { Ellis_3 } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'

const page = () => {
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
                                    <span className="link_name">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <Link href="/NewEvent">
                                        <CiCirclePlus className="yellow_m menu_dash_i" />

                                        <span className="link_name yellow_m">CREATE AN EVENT</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <SubMenus />
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
                                    <Link href="#">
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




                            <div className="tabs_container">
                                <div className="w3-bar w3-black tabs_section">
                                    <Link className="   w3-red tab_btn  team-member" href="/NewEvent">1. Enter Event Details</Link>
                                    <Link className="   tab_btn  team-member"
                                        href='/DefineTicket'>2. Define Ticket Prices
                                        <Image src={Ellis_3} alt='' className="team-member-info one_active" />
                                    </Link>
                                    <Link className="   tab_btn  team-member team-member-small"
                                        href="/PublishEvent">3. Publish Event

                                    </Link>
                                    <Link className="   tab_btn  team-member team-member-small"
                                        href="/ShareEvent">4. share Event
                                    </Link>
                                </div>
                                <TicketPrice label='next' href='/PublishEvent'/>





                            </div>


                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default page
