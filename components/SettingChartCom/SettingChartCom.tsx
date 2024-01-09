import React from 'react'
import ArchivedBack from '../ArchivedBack/ArchivedBack'

interface SettingChartComProps {
    title?: string;
    showBackButton?: boolean;
    href?: string;
    label?: string;
}


const SettingChartCom: React.FC<SettingChartComProps> = ({title = '',  label = '', href = '', showBackButton  })  => {
    return (
        <div className="manage_order_area">
            {showBackButton && <ArchivedBack />}
            <div className="manage_two_sec">
                <div className="manage_two_info">
                    {title && <h1>{title}</h1>}
                    <p>This is the seating chart associated with your event. </p>
                    <p>WARNING: It is not recommended that you edit this seating chart while your event is published. If you proceed, your customers may lose reserved seats, and you may risk double bookings. Proceed at your own risk.</p>
                </div>
                <div className="manage_iframe">
                    Insert iframe here
                </div>

            </div>
            <div className="tiktct_mbtns">
                <button>Publish Changes</button>
            </div>
        </div>
    )
}

export default SettingChartCom
