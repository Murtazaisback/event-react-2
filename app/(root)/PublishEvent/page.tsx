'use client'
import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import TicketPrice from '@/components/TicketPrice/TicketPrice'
import { Ellis_3, Publish_img } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'

const PublishEvent = () => {
  return (
    <div className='main_container'>
            <div className="dashboard_main">
                <div className="dashboard_section">
                    <div className="sidebar ">
                        <div className="logo-details">
                        </div>
                        <ul className="nav-links">
                            <Silder_icon />
                            <li>
                                <a href="./newevent.html">
                                    <IoSpeedometerOutline className=" menu_dash_i" />

                                    <span className="link_name">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="./newevent.html">
                                        <CiCirclePlus className="yellow_m menu_dash_i" />

                                        <span className="link_name yellow_m">CREATE AN EVENT</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <SubMenus />
                            </li>
                            <li>
                                <a href="./venues.html">
                                    <SlLocationPin className=" menu_dash_i" />
                                    <span className="link_name">VENUES</span>
                                </a>
                            </li>
                            <li>
                                <a href="./reports.html">
                                    <RiMoneyDollarCircleLine className=" menu_dash_i" />
                                    <span className="link_name">REPORTS</span>
                                </a>
                            </li>
                            <li>
                                <a href="./settingdash.html">
                                    <FaGear className=" menu_dash_i" />
                                    <span className="link_name">SETTINGS</span>
                                </a>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="#">
                                        <FaRegMessage className=" menu_dash_i" />
                                        <span className="link_name">SMS CAMPAIGNS</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="./myaccount.html">
                                        <FaRegUser className=" menu_dash_i" />
                                        <span className="link_name">MY ACCOUNT</span>
                                    </a>
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
                                    </Link>
                                    <Link className="   tab_btn  team-member team-member-small"
                                        href="/PublishEvent">3. Publish Event
                                        <Image src={Ellis_3} alt=''className="team-member-info one_active"  />

                                    </Link>
                                    <Link className="   tab_btn  team-member team-member-small"
                                        href="/ShareEvent">4. share Event
                                    </Link>
                                </div>
                                <div id="Publish" className="w3-container w3-border city">
                                <div className="publish_section">


                                    <Image src={Publish_img} alt=""/>

                                    <div className="publish_btns">
                                        <a className="save_btn">Save Draft</a>
                                        <a className="w3-bar-item w3-button tablink tab_btn publish_btn" href="./share Event.html">Publish</a>
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

export default PublishEvent
