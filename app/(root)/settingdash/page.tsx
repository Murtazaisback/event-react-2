import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import { Settingdasg_img, Square, Strip } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'

const Settingdash = () => {
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
                                    <FaGear className="yellow_m menu_dash_i" />
                                    <span className="yellow_m link_name">SETTINGS</span>
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
                        <div className="main_setting">
                        <h1>Settings</h1>
                        <div className="main_set">
                            <div className="main_set_left">
                                <h2>Payout Method</h2>
                                <p>Choose an option below to connect your account to a payout method. This is how you will receive payouts for customers’ ticket purchases.</p>
                                <div className="set_icons">
                                    <Image src={Strip} alt=''/>
                                    <Image src={Square} alt=''/>
                                </div>
                                <div className="logo2">
                                    <p>logo</p>
                                    {/* <img src="./imgs/Rectangle 74.png" alt=""/> */}
                                    <Image src={Settingdasg_img} alt='' className='setting_img'/>
                                </div>
                                
                                <p>Display Contact Information</p>
                                <div className="info_tdisplay">
                                    <div className="itdisplay">
                                        <label className="switch">
                                            <input type="checkbox" checked/>
                                            <span className="slider round"></span>
                                        </label>
                                        <label htmlFor="">Email:</label>
                                        <input type="email"/>

                                    </div>
                                    <div className="itdisplay">
                                        <label className="switch">
                                            <input type="checkbox" checked/>
                                            <span className="slider round"></span>
                                        </label>
                                        <label htmlFor="">Phone:</label>
                                        <input type="number"/>

                                    </div>
                                </div>
                               

                            </div>
                            <div className="main_set_right">
                                <form action="">
                                    <h2>Payment Method</h2>
                                    <p>Billing Information</p>
                                    <p>You will only be charged in the event you elect to absorb service fees or use our SMS campaigns service.</p>
                                    <div className="set_form">
                                        <div className="set_formI">

                                            <label htmlFor="">First Name</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="set_formI">

                                            <label htmlFor="">Last Name</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="set_formI">
                                        
                                        <label htmlFor="">Billing Address</label>
                                        <input type="text" className="in_long"/>
                                    </div>
                                    
                                    <div className="set_form">
                                        <div className="set_formI">

                                            <label htmlFor=""> City</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="set_formI">

                                            <label htmlFor="">State </label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="set_form">  
                                        <div className="set_form2">
                                            
                                            <label htmlFor=""> Postal Code</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="set_formI">
                                        
                                        <label htmlFor="">Credit/Debit Card</label>
                                        <input type="text" className="in_long"/>
                                    </div>


                                    <div className="set_form">
                                        <div className="set_form2">

                                            <label htmlFor=""> Security Code</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="set_form2">

                                            <label htmlFor="">Exp Date</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </form>
                                <button type="submit" className="setting_save cursor_pointer">Save</button>
                                
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

export default Settingdash
