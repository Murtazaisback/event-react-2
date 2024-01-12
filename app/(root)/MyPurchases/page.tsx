import { Silder_icon } from '@/components/SubMenus/SubMenus'
import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { GoGear } from 'react-icons/go'
import { RiCoupon2Line, RiMoneyDollarCircleLine } from 'react-icons/ri'
import "./index.css"
import { BsDownload } from 'react-icons/bs'

const MyPurchases = () => {
    return (
        <div className='main_container'>
            <div className="dashboard_main">
                <div className="dashboard_section">
                    <div className="sidebar ">
                        <ul className="nav-links">
                            <Silder_icon />
                            <li>
                                <Link href="/CustomerAccount">

                                    <AiOutlineUser className=" menu_dash_i " />
                                    <span className="link_name ">My Account</span>
                                </Link>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <Link href="/MyPurchases ">
                                        <RiMoneyDollarCircleLine className="yellow_cr menu_dash_i" />

                                        <span className="link_name yellow_cr">My Purchases</span>
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
                                <h1>My Purchases</h1>
                                <div className="purchase_warp">
                                <div className="manage_filter_tablee">
                                    <table className="manage_filter_tabless">
                                        <thead>
                                            <tr>
                                                <th>Event Title</th>
                                                <th>Date</th>
                                                <th>Total Paid</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Event Title Goes Here</td>
                                                <td>11/20/2026</td>
                                                <td>$150.45</td>
                                                <td><RiCoupon2Line className="purchase_icon"/></td>
                                                <td><BsDownload  className="purchase_icon"/></td>
                                            </tr>
                                            <tr>
                                                <td>Event Title Goes Here</td>
                                                <td>11/20/2026</td>
                                                <td>$150.45</td>
                                                <td><RiCoupon2Line className="purchase_icon"/></td>
                                                <td><BsDownload  className="purchase_icon"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default MyPurchases
