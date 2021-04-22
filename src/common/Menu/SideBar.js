// Sidebar

import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import {
	ProSidebar,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from 'react-pro-sidebar';
import IosLogo from '../../assets/images/iosLogo.png'
import Icomoon from '../../libraries/Icomoon';
import LeftMenuItem from '../Menu/LeftMenuItem';
import '../../css/common.css'
import 'react-pro-sidebar/dist/css/styles.css';

function SideBar  ({ toggled, handleToggleSidebar, handleCollapsedChange})  {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<ProSidebar 
			className="bg-white" 
			collapsed={collapsed}
			toggled={toggled}
			breakPoint="md"
			onToggle={handleToggleSidebar}
			handleToggleSidebar={handleCollapsedChange} 
		>
			<SidebarHeader className="d-flex justify-content-center py-3 bg-white">
				{collapsed ? 
					<img src={IosLogo} alt={IosLogo} width="50" height="20"/>:
					<img src={IosLogo} alt={IosLogo} width="100" height="40"/>
				}
			</SidebarHeader>
			<SidebarContent className="bg-white">
				<LeftMenuItem/>
			</SidebarContent>
			<SidebarFooter className="p-3 bg-white">
				<div className="d-flex justify-content-between">
			{collapsed ? 
				<div> 
					<Link className="text-decoration-none" to="/login">
			 			<Icomoon icon="logout" size={23} color="#DF5A14"/>
					 </Link>
				 </div>
			:
				<div>
                    <Link className="row pl-3 text-decoration-none" to="/login">
                        <Icomoon icon="logout" size={23} color="#DF5A14"/>
                        <p className="normalText font-weight-bold pl-3"  style={{cursor:'pointer'}}>Logout</p>
                    </Link>
                </div>}
				<div className="ml-2">
				{collapsed  ?<Icomoon icon="col" style={{cursor:'pointer'}}  onClick={() => setCollapsed(false)}  size={30}/> :<Icomoon style={{cursor:'pointer'}} onClick={() => setCollapsed(true)} icon="collapse" size={30}/> }
				</div>
				</div>
			</SidebarFooter>
		</ProSidebar>
	);
};

export default SideBar;
