import React from "react";
import { useLocation } from "react-router-dom";
import IosLogo from "../../assets/images/iosLogo.png";
import { Item } from "./Item";

const Menu = (props) => {
	const currentPath = useLocation();
	console.log(!props.toggleClass,'toggle')
	return (
		<div className="bg-white">
			<nav
				id="sidebar"
				className={!props.toggleClass ? "active" : null}
				style={{ backgroundColor: "#fff" }}
			>
				<div
					className="sidebar-header d-flex justify-content-center pt-5 px-3"
				>
                    <img src={IosLogo} alt={IosLogo} width="100" height="40"/>
				</div>
				<ul className="list-unstyled p-3">
				
					{/* --------------------------------------------
								HR Management
                    ---------------------------------------------- */}
					<Item
						title="HR Management"
						icon={"hr"}
						toggle={true}
						toggleId={"hr_management"}
						active={
							currentPath.pathname === "/policy" ||
							currentPath.pathname === "/leaves" ||
							currentPath.pathname === "/careers" 
								? true
								: false
						}
					/>
					{/* ---------------------------------
                        Children (HR Management)
                     -------------------------------------*/}
					<div
						id="hr_management"
						className="panel-collapse collapse ml-5"
					>
						<Item
							title="Policy"
							link={"/policy"}
							
							active={
								currentPath.pathname === "/policy"
									? true
									: false
							}
						/>
						<Item
							title="Leaves"
							link={"/leaves"}
							active={
								currentPath.pathname === "/leaves"
									? true
									: false
							}
						/>
						<Item
							title="Career"
							link={"/careers"}
							active={
								currentPath.pathname === "/careers"
									? true
									: false
							}
						/>	
					</div>

					{/* ------------------------------------------
							Admin Management
					--------------------------------------------- */}
					<Item
						title="Admin"
						icon={"admin"}
						toggle={true}
						toggleId={"admin-management"}
						active={
							currentPath.pathname === "/userProfile" ||
							currentPath.pathname === "/directory" ||
							currentPath.pathname === "/events"
								? true
								: false
						}
					/>
					{/* --------------------------------------------------------
                                Children Of Admin Management
                    ----------------------------------------------------------*/}
					<div
						id="admin-management"
						className="panel-collapse collapse"
					>
						<Item
							title="User"
							link={"/userProfile"}
							active={
								currentPath.pathname === "/userProfile"
									? true
									: false
							}
						/>
						<Item
							title="Directory"
							link={"/directory"}
							active={
								currentPath.pathname === "/directory"
									? true
									: false
							}
						/>
                        <Item
							title="Events"
							link={"/events"}
							active={
								currentPath.pathname === "/events"
									? true
									: false
							}
						/>
					</div>
					

					{/* ------------------------------------------
							Sign Out
					-------------------------------------------- */}
					{/* <Item
						title={"sign_out"}
						link={"/logout"}
						icone={"logout-1"}
						active={
							currentPath.pathname === "/logout" ? true : false
						}
					/> */}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;