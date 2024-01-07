import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegUser, FaSearch } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'

const Reports = () => {
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
                                        <CiCirclePlus className=" menu_dash_i" />

                                        <span className="link_name ">CREATE AN EVENT</span>
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
                                    <RiMoneyDollarCircleLine className="yellow_m menu_dash_i" />
                                    <span className="link_name yellow_m">REPORTS</span>
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
                            <div className="manage_order_area">

                                <div className="manage_order_section">
                                    <h1>Manage Orders: Event Title Show Here</h1>
                                    <form action="" className="manage_order_form">

                                        <div className="manage_filter_row">
                                            <div className="manage_filter_in">
                                                <input type="search" placeholder="Search by name, order #, or amount..."/>
                                                    {/* <i className='bx bx-search'></i> */}
                                                    <FaSearch style={{color: '#000'}} />
                                            </div>
                                        </div>
                                        <div className="manage_filter_d">
                                            <div className="filterid">
                                                <label htmlFor="">Filter by Date:</label>
                                                <input type="date"/>
                                            </div>
                                            --
                                            <div className="filterid">
                                                <input type="date"/>
                                            </div>
                                        </div>
                                        <button className="manage_filter_btn">Export CSV</button>

                                    </form>

                                </div>
                                <div className="manage_filter_table">
                                    <table className="manage_filter_tables">
                                        <thead>
                                            <tr>
                                                <th>Event Title</th>
                                                <th>Event Start Date</th>
                                                <th># of Tickets Sold</th>
                                                <th>Total Revenue</th>
                                                <th>Total Service Fees</th>
                                                <th>Taxes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>event 1 title ...</td>
                                                <td>11/20/2026</td>
                                                <td>157</td>
                                                <td>$3140.00</td>
                                                <td>$100.67</td>
                                                <td>$50.10</td>
                                            </tr>
                                            <tr>
                                                <td>event 1 title ...</td>
                                                <td>11/20/2026</td>
                                                <td>157</td>
                                                <td>$3140.00</td>
                                                <td>$100.67</td>
                                                <td>$50.10</td>
                                            </tr>
                                            <tr>
                                                <td>event 1 title ...</td>
                                                <td>11/20/2026</td>
                                                <td>157</td>
                                                <td>$3140.00</td>
                                                <td>$100.67</td>
                                                <td>$50.10</td>
                                            </tr>
                                            <tr>
                                                <td>event 1 title ...</td>
                                                <td>11/20/2026</td>
                                                <td>157</td>
                                                <td>$3140.00</td>
                                                <td>$100.67</td>
                                                <td>$50.10</td>
                                            </tr>
                                            <tr className="yellow_tables">
                                                <td></td>
                                                <td>Totals</td>
                                                <td>678</td>
                                                <td>$12,890.50</td>
                                                <td>$410.17</td>
                                                <td>$50.10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>







                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Reports
