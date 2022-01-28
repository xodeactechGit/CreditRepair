import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

export default function SubMenu(props) {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => {
        setSubnav(!subnav)
    }
    let history = useHistory();
    return (
        <Link
            onClick={showSubnav}
            className={`SidebarLink text-decoration-none ${history.location.pathname.startsWith(props.item.path) ? "active" : ""}`}
            to={props.item.path}>
            <div className={`d-flex align-items-center font-400 ${props.item.class === "btn btn-primary btn-block add-user-btn" ? "" : "anchor-content"}`} >
                {props.item.icon}
                <div className={`SidebarLabel ${props.item.class}`}>
                    {props.item.title}
                </div>
            </div>
        </Link>
    )
}