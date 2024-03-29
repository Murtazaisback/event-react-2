import Link from 'next/link'
import React from 'react'

const DraftCom = () => {
    return (
        <div className="ct_tr_container">

            <div className="ct_tr ">
                <div className="ct_main_data">
                    <p>Event Title 1</p>
                    <p className="c_grey">Event start time - end time</p>
                </div>
                <p className="mar_l">11/10/2025</p>
                <p className=" cursor_pointer">
                    <Link href="/NewEvent" className="yellow_m">
                        Edit

                    </Link>
                </p>



                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" className="cursor_pointer">
                    <g clip-path="url(#clip0_799_205)">
                        <path d="M3.04688 15.5H11.9531V2.84375H12.6562V2.375H9.375V0.5H5.625V2.375H2.34375V2.84375H3.04688V15.5ZM6.09375 0.96875H8.90625V2.375H6.09375V0.96875ZM11.4844 2.84375V15.0312H3.51562V2.84375H11.4844Z" fill="#FF0000" />
                        <path d="M6.32812 5.1875H5.85938V13.1562H6.32812V5.1875Z" fill="#FF0000" />
                        <path d="M9.14062 5.1875H8.67188V13.1562H9.14062V5.1875Z" fill="#FF0000" />
                    </g>
                    <defs>
                        <clipPath id="clip0_799_205">
                            <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
    )
}

export default DraftCom
