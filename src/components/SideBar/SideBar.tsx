import React, {FC} from 'react'
import './Sidebar.scss'
import {ISideBar} from '../../shared/Interfaces'
import Cars from '../../cars.json'

const SideBar: FC<ISideBar> = ({isOpen, onClose}) => {
    const getClass = () => {
        const classValue = isOpen === null ? "" : isOpen ? "sidebar-open" : "sidebar-close";
        return classValue
    }

    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(JSON.stringify(Cars))

    return (
        <div className={"sidebar " + getClass()}>
            <button type="button" className="close" aria-label="Close" onClick={() => onClose(false)}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="sidebar-menu">
                <div>Your Account</div>
                <div>Your Rents</div>
                <div>Contact Us</div>
                <div>Log Out</div>
                <div><a href={dataUri} download='cars.json' target="_blank" rel="noopener noreferrer">Export Cars List</a></div>
            </div>
        </div>
    )
}

export default SideBar