import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";

import "./index.css"
import EventsCard from '@/components/EventsCard/EventsCard';

const CustomerAccount = () => {
    return (
        <div className='main_container'>
            <div className="dashboard_main">
                <div className="dashboard_section">
                    <div className="sidebar ">
                        <ul className="nav-links">
                            <Silder_icon />
                            <li>
                                <Link href="/Dashboard">

                                    <AiOutlineUser className=" menu_dash_i yellow_cr" />
                                    <span className="link_name yellow_cr">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <Link href="/MyPurchases">
                                        <RiMoneyDollarCircleLine className=" menu_dash_i" />

                                        <span className="link_name ">My Purchases</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link href="/Setting">
                                    <GoGear className=" menu_dash_i" />
                                    <span className="link_name">Setting    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                            <div className="my_acc_section">
                                <h1>My Account</h1>
                                <div className="upcoming_box">

                                    <div className="upcoming_warp">
                                        <div className="upcoming_cust">
                                            <h3>Hi "User First Name "</h3>
                                            <div className="upcoming_cust_box">
                                                <h2>Upcoming Events</h2>
                                                <p>You have no upcoming events.</p>
                                                <ol>
                                                    <li>Event Title</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="upcoming_action">
                                            <h3>Quick Actions</h3>
                                            <Link href="">Add Payment Method</Link>
                                            <Link href="">Browse Events</Link>
                                            <Link href="">View Past Purchases</Link>
                                        </div>

                                    </div>
                                    <div className="event_like_box">
                                        <div className="event_like">
                                            <h3>Events You Might Like</h3>
                                            <div className="evet_rows">
                                                <EventsCard showMenuButton={false}/>
                                                <EventsCard showMenuButton={false}/>
                                                <EventsCard showMenuButton={false}/>
                                            </div>
                                        </div>
                                        <div className="event_Organizer">
                                            <h3>More Events By " Event Organizer "</h3>
                                            <div className="evet_rows">
                                                <EventsCard showMenuButton={false}/>
                                                <EventsCard showMenuButton={false}/>
                                                <EventsCard showMenuButton={false}/>
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

export default CustomerAccount
