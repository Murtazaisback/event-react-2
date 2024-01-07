'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaChevronDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './index.css'

const SubMenus = () => {
    const [isMainOpen, setIsMainOpen] = useState(false);
    const [isEventOpen, setIsEventOpen] = useState(false);

    const toggleMain = () => {
        setIsMainOpen(!isMainOpen);
    };

    const toggleEvent = () => {
        setIsEventOpen(!isEventOpen);
    };
    return (
        <div className="iocn-link">
            <div className="inner_nav_links " id="">
                <div className="flex_option_row accordion">

                    <FaRegCalendarAlt className="menu_dash_i" />
                    <div className="Event_Title  ">
                        <div className=" inner_flex">
                            <Link href="/Event">

                                EVENTS
                            </Link>
                        </div>
                        {/* <i className='bx bxs-chevron-down' id="myElement" onClick={toggleAccordion}></i> */}
                        <FaChevronDown className="icon_sub_menu" onClick={toggleMain} />

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
                                <li className="inner_nav_item"><a href="./sell_tickets.html" className="">Sell Tickets</a></li>
                                <li className="inner_nav_item"><a href="./managetwo.html">Hold Seats</a></li>
                                <li className="inner_nav_item"><a href="./scan_tickets.html">Scan Tickets</a></li>
                                <li className="inner_nav_item"><a href="./attendees.html">Attendees</a></li>
                                <li className="inner_nav_item"><a href="/ManageOrder">Manage Orders</a></li>
                                <li className="inner_nav_item"><a href="./eventdetails.html" >Event Details</a></li>
                                <li className="inner_nav_item"><a href="./ticketprices.html">Ticket Prices</a></li>
                                <li className="inner_nav_item"><a href="./setting_chart.html">Seating Chart</a></li>
                            </ul>
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}



export const Silder_icon = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Check the screen width and set the initial sidebar state
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) { // Adjust this value based on your desired breakpoint
      setSidebarOpen(false);
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.add('close');
      }
    }
  }, []);
  const toggleSidebar = () => {
     // Toggle the sidebar state
     setSidebarOpen(prevState => !prevState);

     // Toggle the 'close' class on the sidebar
     const sidebar = document.querySelector('.sidebar');
     if (sidebar) {
       sidebar.classList.toggle('close');
     }
   };
 
   return (
     <li id="Iconss" className="">
       <span className='dash_i_warp' onClick={toggleSidebar}>
         {isSidebarOpen ? (
           <FaArrowLeft className="dashboard_i" />
         ) : (
           <FaArrowRight className="dashboard_i" />
         )}
       </span>
     </li>
   );
 };
export default SubMenus 