import Link from 'next/link'
import React from 'react'
import { FaGear, FaRegMessage, FaRegUser } from 'react-icons/fa6'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'

const MainMenusEx = () => {
    return (
        <><li>
            <Link href="/venues">
                <SlLocationPin className=" menu_dash_i" />
                <span className="link_name">VENUES</span>
            </Link>
        </li><li>
                <Link href="/reports">
                    <RiMoneyDollarCircleLine className=" menu_dash_i" />
                    <span className="link_name">REPORTS</span>
                </Link>
            </li><li>
                <Link href="/settingdash">
                    <FaGear className=" menu_dash_i" />
                    <span className=" link_name">SETTINGS</span>
                </Link>
            </li>
            {/* <li>
                <div className="iocn-link">
                    <Link href="/SmsCampaigns">
                        <FaRegMessage className=" menu_dash_i" />
                        <span className="link_name">SMS CAMPAIGNS</span>
                    </Link>
                </div>
            </li> */}
            <li>
                <div className="iocn-link">
                    <Link href="/myaccount">
                        <FaRegUser className=" menu_dash_i" />
                        <span className="link_name ">MY ACCOUNT</span>
                    </Link>
                </div>
            </li>

        </>
    )
}

export default MainMenusEx
