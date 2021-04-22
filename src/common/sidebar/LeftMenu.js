// Left menu

import React, { useState } from 'react';
import Main from './Main';
import './styles/App.scss';
import SideBar from '../Menu/SideBar';

function Leftmenu (props){
	const [collapsed, setCollapsed] = useState(false);
	const [toggled, setToggled] = useState(false);
	const handleCollapsedChange = (collapsed) => {
		setCollapsed(collapsed);
	};
	const handleToggleSidebar = (value) => {
		setToggled(value);
	};


  return (
		<div className={`app ${toggled ? 'toggled' : ''}`} style={{height:787}}>
			<SideBar collapsed={collapsed} breakPoint="md" toggled={toggled} handleToggleSidebar={handleToggleSidebar} onToggle={handleToggleSidebar} />
			<Main
				breakPoint="md"
				toggled={toggled}
				collapsed={collapsed}
				handleToggleSidebar={handleToggleSidebar}
				handleCollapsedChange={handleCollapsedChange} 
				children={props.children}
				back={props.back}
				current={props.current}
				pageTitle={props.pageTitle}
			/>
		</div>
	);
}

export default Leftmenu;

