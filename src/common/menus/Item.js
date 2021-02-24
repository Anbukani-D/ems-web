import React from "react";
import { Link } from "react-router-dom";
import Config from "../../models/Config";
import Icomoon from "../../libraries/Icomoon";

export const Item = (props) => {
    const { title, icon, active, link, toggle, toggleId} = props;
    return (
        <li
            className="py-2 px-4"
            style={
                active ? { color: "0c0f12" }
                    : null
            }
        >
            <Link
                className={ toggle ? active ? "collapse show text-decoration-none d-flex" : "collapse text-decoration-none d-flex" : "text-decoration-none d-flex"}
                data-toggle={toggle ? "collapse" : null}
                aria-expanded={toggle && active ? "true" : "false"}
                data-target={toggleId ? "#"+toggleId : null}
                to={link ? link : null}
                style={
                    active 
                        ? { color: "#fff" }
                        : { color: "orange" }
                }
            >
                <Icomoon
                    className="align-self-center mr-2 "
                    icon={icon}
                    color={
                        active 
                            ? "#DF5A14"
                            : "#0c0f12"
                    }
                    size={20}
                />
                <span
                    className="smallText font-weight-bold"
                    style={
                        active 
                            ? { color: "#DF5A14" }
                            : { color: "#0c0f12" }
                    }
                >
                    {title}
                </span>
            </Link>
        </li>
    )
}