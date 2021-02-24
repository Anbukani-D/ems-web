import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import UserProfile from './pages/admin/user/UserProfile';
import Directory from './pages/admin/directory/Directory';
import Events from './pages/admin/events/Events';
import Policy from './pages/hr/policy/Policy';
import Leaves from './pages/hr/leaves/Leaves';
import Careers from './pages/hr/careers/Careers';
import CareersDescription from './pages/hr/careers/CareersDescription';
import EmployeeLeave from './pages/hr/leaves/EmployeeLeave';
import "./css/common.css"
import {PublicRoute} from './common/Components';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/login" component={Login} /> 

					{/** Admin Management*/}
				<Route path="/dashboard" component={Dashboard} /> 
				<Route path="/userProfile" component={UserProfile} /> 
				<Route path="/directory" component={Directory} />
				<Route path="/events" component={Events} />

					{/** HR Management*/}
				<Route path="/policy" component={Policy} />
				<Route path="/leaves" component={Leaves} />
				<Route path="/employeeLeave" component={EmployeeLeave} />
				<Route path="/careers" component={Careers} />
				<Route path="/careersDescription" component={CareersDescription} />

			</Switch>
				
		</div>
	);
}

export default App;
