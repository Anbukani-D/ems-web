import React, { useState } from 'react';
import { observer } from "mobx-react";
// import { PublicRoute, PrivateRoute, Logout } from "./common/Elements";
import Config from "./models/Config";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import EmployeeProfile from './pages/admin/employee/EmployeeProfile';
import EmployeeType from './pages/admin/employeeType/EmployeeType';
import Department from './pages/admin/department/Department';
import Directory from './pages/admin/directory/Directory';
import Events from './pages/admin/events/Events';
import Policy from './pages/hr/policy/Policy';
import Leaves from './pages/hr/leaves/Leaves';
import Careers from './pages/hr/careers/Careers';
import CareersDescription from './pages/hr/careers/CareersDescription';
import EmployeeLeave from './pages/hr/leaves/EmployeeLeave';
import ForgotPassword from './pages/general/ForgotPassword';
import ChangePassword from './pages/general/ChangePassword';

import "./css/common.css"





const App = observer(() => {
	if (!process.env.REACT_APP_BASE_URL) {
		global.baseUrl = "https://ems.kpdigiteers.tech/";
	}
	// This if we can controller first time page load.
	if (Config.reHydrate) {
		return (
			<div className="spinner-grow text-primary" role="status">
				<span className="sr-only">Loading</span>
			</div>
		);
	} else {
	return (
		<div className="screenHight">
			<Switch>
			{/* <Route path="/" component={Login} />  */}
				<Route path="/login" component={Login} /> 
					{/** Admin Management*/}
				<Route path="/dashboard" component={Dashboard} /> 
				<Route path="/employeeProfile" component={EmployeeProfile} /> 
				<Route path="/employeeType" component={EmployeeType} /> 
				<Route path="/department" component={Department} /> 
				<Route path="/directory" component={Directory} />
				<Route path="/events" component={Events} />

					{/** HR Management*/}
				<Route path="/policy" component={Policy} />
				<Route path="/leaves" component={Leaves} />
				<Route path="/employeeLeave" component={EmployeeLeave} />
				<Route path="/careers" component={Careers} />
				<Route path="/careersDescription" component={CareersDescription} />
				<Route path="/forgotPassword" component={ForgotPassword} />
				<Route path="/changePassword" component={ChangePassword} />

			</Switch>		
		</div>
	);
	}
})
	

export default App;
