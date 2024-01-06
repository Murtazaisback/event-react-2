import { useState } from 'react';
import { FaRegCalendarAlt, FaChevronDown, FaArrowLeft } from 'react-icons/fa';


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
                            <a href="./event.html">

                                EVENTS
                            </a>
                        </div>
                        {/* <i className='bx bxs-chevron-down' id="myElement" onClick={toggleAccordion}></i> */}
                        <FaChevronDown className="icon_sub_menu" onClick={toggleMain} />

                    </div>
                </div>
                {isMainOpen && (
                    <ul className="upper_nav_i panel inner_nav_items2">
                        <a href="./archived.html" className="">Archived</a>
                        <a href="./Draft.html">Draft</a>
                        <a href="./eventdash.html">
                            <li className=" inner_flex Exinner_flex">
                                Event Title
                                <FaChevronDown className="" onClick={toggleEvent} />
                            </li>

                        </a>
                        {isEventOpen && (

                            <ul className="inner_nav_items panel2">
                                <li className="inner_nav_item"><a href="./sell_tickets.html" className="">Sell Tickets</a></li>
                                <li className="inner_nav_item"><a href="./managetwo.html">Hold Seats</a></li>
                                <li className="inner_nav_item"><a href="./scan_tickets.html">Scan Tickets</a></li>
                                <li className="inner_nav_item"><a href="./attendees.html">Attendees</a></li>
                                <li className="inner_nav_item"><a href="./manage_order.html">Manage Orders</a></li>
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
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
          sidebar.classList.toggle('close');
        }
      };
      return(
        <li id="Iconss" className="">
        <span className='dash_i_warp'>

            <FaArrowLeft className="dashboard_i" onClick={toggleSidebar}  />

        </span>
    </li>
      )
}
export default SubMenus 