// Main Page 

import React from 'react';
import '../../css/common.css';
import TopMenu from '../Menu/TopMenu';
import ApplyLeaveButton from '../Components';

const Main =  props   => {
  	let {handleToggleSidebar } = props;
	return (
		<main className="themeBgColor">
			<div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
				&#9776;
			</div>
			<header>
				<TopMenu  
					back={props.back}
					current={props.current}
					pageTitle={props.pageTitle}
				/>
			</header>
			{props.children}
			<footer className="d-flex justify-content-end">
				<ApplyLeaveButton/> 
			</footer>
		</main>
	);
};

export default Main;
