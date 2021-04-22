// Left menu  Items

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icomoon from "../../libraries/Icomoon";
import '../../css/common.css';
import {
    Menu,
    MenuItem,
    SubMenu,
  } from 'react-pro-sidebar';

const LeftMenuItem = () => {
    const currentPath = useLocation();
	return (
        <>
			{/* --------------------------------------------
						Dashboard
			---------------------------------------------- */}
            <Menu className="bg-white">
                <MenuItem className="bg-white" 
                    icon={
                        <Icomoon 
                            style={
                                currentPath.pathname === "/dashboard"
                                    ? { color: "#F57921" }
                                    : { color: "#000000" }
                            }
                            icon="dashboard" 
                            size={20}
                        />
                    }
                > 
                    <Link
                        className="text-decoration-none "
                        to='/dashboard'
                        style={
                            currentPath.pathname === "/dashboard"
                                ? { color: "#F57921" }
                                : { color: "#000000" }
                        }
                    > 
                        <span 
                            style={
                            currentPath.pathname === "/dashboard"
                                ? { color: "#F57921" }
                                : { color: "#000000" }
                             }
                        > 
                            Dashboard
                        </span>
                    </Link>
                </MenuItem>
            </Menu> 
			{/* --------------------------------------------
						HR Management
			---------------------------------------------- */}
             <Menu className="bg-white" popperArrow={true}>
                <SubMenu
                    className="bg-white"
                    style={
                        currentPath.pathname === "/hr-mgmt"
                            ? { color: "#F57921" }
                            : { color: "#000000" }
                    }
                    icon={
                        <Icomoon 
                            style={
                                currentPath.pathname === "/policy" || currentPath.pathname === "/leaves" || currentPath.pathname === "/careers"
                                    ? { color: "#F57921" }
                                    : { color: "#000000" }
                            }
                            icon="hr" 
                            size={20}
                        />
                    }
                    title={
                        <span 
                            style={
                                currentPath.pathname === "/policy" || currentPath.pathname === "/leaves" || currentPath.pathname === "/careers"
                                ? { color: "#F57921" }
                                : { color: "#000000" }
                            }
                        > 
                            HR Management
                        </span>
                    }
                >
                    {/* ---------------------------------
                        Children (HR Management)
                        -------------------------------------*/}
                    
                        <MenuItem className="bg-white">
                            <Link
                                className="text-decoration-none "
                                to="/policy"
                                style={
                                    currentPath.pathname === "/policy"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                            >
                                <span 
                                    style={
                                    currentPath.pathname === "/policy"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                > 
                                    Policy
                                </span>
                            </Link>
                        </MenuItem>
                        <MenuItem className="bg-white"> 
                            <Link
                                className="text-decoration-none "
                                to="/leaves"
                                style={
                                    currentPath.pathname === "/leaves"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                            >
                                <span 
                                    style={
                                    currentPath.pathname === "/leaves"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                > 
                                    Leaves
                                </span>
                            </Link>
                        </MenuItem>
                        <MenuItem className="bg-white">
                            <Link
                                className="text-decoration-none"
                                to="/careers"
                                style={
                                    currentPath.pathname === "/careers"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                            >
                                <span 
                                    style={
                                    currentPath.pathname === "/careers"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                > 
                                    Career
                                </span>
                            </Link>
                        </MenuItem>
                </SubMenu>
            </Menu>
            {/*----------------Hr end-----------------*/}

			<Menu className="bg-white" popperArrow={true}>
                <SubMenu
                    className="bg-white"
                    icon={
                        <Icomoon 
                            icon="admin" 
                            size={20}
                            style={
                                currentPath.pathname === "/employeeProfile" || currentPath.pathname === "/employeeType" || currentPath.pathname === "/directory" || currentPath.pathname === "/events"
                                    ? { color: "#F57921" }
                                    : { color: "#000000" }
                                }
                        />
                    }
                    title={
                        <span 
                            style={
                                currentPath.pathname === "/employeeProfile" || currentPath.pathname === "/employeeType" || currentPath.pathname === "/directory" || currentPath.pathname === "/events"
                                ? { color: "#F57921" }
                                : { color: "#000000" }
                            }
                        > 
                            Admin
                        </span>}
                >
                    {/* ---------------------------------
                        Children (Admin)
                        -------------------------------------*/}
                        <MenuItem className="bg-white">
                            <Link
                                className="text-decoration-none "
                                to="/employeeProfile" 
                                style={
                                    currentPath.pathname === "/employeeProfile"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }   
                            >
                               <span 
                                    style={
                                        currentPath.pathname === "/employeeProfile" 
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                >  
                                    Employee
                                </span>
                            </Link>
                        </MenuItem>
                        <MenuItem className="bg-white">
                            <Link
                                className="text-decoration-none"
                                to="/employeeType"   
                                style={
                                    currentPath.pathname === "/employeeType"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }    
                            >
                                <span 
                                    style={
                                        currentPath.pathname === "/employeeType"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                >
                                    Employee Type
                                </span>
                            </Link>
                        </MenuItem>
                        <MenuItem className="bg-white">
                            <Link
                                className="text-decoration-none"
                                to="/department"   
                                style={
                                    currentPath.pathname === "/department"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }    
                            >
                                <span 
                                    style={
                                        currentPath.pathname === "/department"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                >
                                    Department
                                </span>
                            </Link>
                        </MenuItem>
                        <MenuItem className="bg-white"> 
                            <Link
                                className="text-decoration-none"
                                to="/directory"
                                style={
                                    currentPath.pathname === "/directory"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }   
                            >
                                <span 
                                    style={
                                        currentPath.pathname === "/directory"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                >
                                    Directory
                                </span>
                            </Link>
                        </MenuItem>
                        <MenuItem className="bg-white"> 
                            <Link
                                className="text-decoration-none"
                                to="/events"   
                                style={
                                    currentPath.pathname === "/events"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }   
                            > 
                                <span 
                                    style={
                                        currentPath.pathname === "/events"
                                        ? { color: "#F57921" }
                                        : { color: "#000000" }
                                    }
                                >
                                    Events
                                </span>
                            </Link>
                    </MenuItem>
                </SubMenu>
            </Menu>
		</>
	);
};

export default LeftMenuItem;