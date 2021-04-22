// Dashboard Page
// 11-02-2021

import React from 'react';
import "../../css/common.css";
import { Layout, ThemeButton} from '../../common/Components';
import Performance from '../../assets/images/performance.png';
import Avtar from "../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import Icomoon from '../../libraries/Icomoon';
import Table from 'react-bootstrap/Table';
import '../../css/menu.css';

class Dashboard extends React.Component {
    state={
       todayLeave:[],
       approveModal:false,
       rejectModal:false
    }
    componentDidMount() {
		let todayLeave = [
			{
                id: 1,
                name:'preethi',
                leaveType: 'Sick', 
                reason:'Suffering from Fever', 
                from:'02 Feb,2021',
                to:'04 Feb, 2021',
                days:'02'
				
			},
			{
                id: 2,
                name:'abi',
                leaveType: 'Sick', 
                reason:'Suffering from Fever', 
                from:'02 Feb,2021',
                to:'04 Feb, 2021',
                days:'02'
            },
		];
		this.setState({todayLeave: todayLeave});
	}



    render() {
        return (
            <Layout pageTitle="Dashboard">
                {this.renderDashboard()}
            </Layout>
        )
    }

    // Render dashboard function
    renderDashboard() {
        return(
            <div className="row my-0 py-0">
                <div className="col-md-7 my-0 py-0 ">
                    {this.renderPerformance()}
                    {this.renderTodayLeavesTable()}
                </div>
                <div className="col-md-5 my-0 py-0">
                    {this.renderMenuButtons()}
                </div>
            </div>
        )
    }

    // Render Performance function
    renderPerformance() {
        return(
            <div className="bg-white p-2 borderStyle mx-3" style={{position:'relative'}}>
                <p className="mediumText text-center font-weight-bold mb-0">Performer of the Month</p>
                <div className="col-md-12">
                    <img src={Performance} alt={Performance} width="100%" height="320"/>
                    <div className="dashboardStyle">
                        <Avatar  alt="Avtar" src={Avtar}/>
                    </div>
                    <div className="contentStyle">
                        <p className="themeActiveFont gigaText font-weight-bold">{this.state.employeeName ? this.state.employeeName : 'Jennifer'}</p>
                        <p className="normalText font-weight-bold">{this.state.department ? this.state.department : 'Digital Marketing'}</p>
                    </div>
                </div>
            </div>
        )
    }
    
    // Render today leaves function
    renderTodayLeavesTable() {
        return(
            <div className="bg-white p-3 borderStyle my-3 mx-3  scrollStyle">
                <p className="xSmallText  text-secondary font-weight-bold">Todays Leaves</p>
                <Table className="border-0 scrollStyle">
                    <thead className="xSmallText"> 
                        <tr>
                        <th>Name</th>
                        <th>Leave Type</th>
                        <th>Reason</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Days</th>
                        <th></th>
                        <th></th>

                        </tr>
                    </thead>
                    <tbody className="scrollStyle">
                    {this.state.todayLeave.map((todayLeave) => (
                        <tr className="xSmallText " key={todayLeave.id}>
                            <td>{todayLeave.name}</td>
                            <td>{todayLeave.leaveType}</td>
                            <td>{todayLeave.reason}</td>
                            <td>{todayLeave.from}</td>
                            <td>{todayLeave.to}</td>
                            <td>{todayLeave.days}</td>
                            <td><ThemeButton wrapperClass="btn themeActiveColor text-white fontStyle  py-2 xSmallText" label="Approve" onClick={()=>{this.setState({approveModal:true})}} /> </td>
                            <td><ThemeButton wrapperClass="btn borderColor fontStyle  py-2 xSmallText" label="Reject" onClick={()=>{this.setState({rejectModal:true})}} /> </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }

    // Render menu buttons function
    renderMenuButtons() {
        return(
            <div className="row mx-1">
                <button type="button" className="btn bg-white p-3 borderStyle col-md-5 mx-3 mb-3" onClick={()=>this.props.history.replace('/employeeProfile')}>
                    <Icomoon className="mt-3" icon="user" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">User</p>
                </button>
                <button type="button" className="btn bg-white p-3 borderStyle  col-md-5 mx-3 mb-3"onClick={()=>this.props.history.replace('/leaves')}>
                    <Icomoon className="mt-3" icon="leave" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Leave</p>
                </button>
                <button type="button" className="btn bg-white p-3 borderStyle  col-md-5 mx-3 mb-3"onClick={()=>this.props.history.replace('/events')}>
                    <Icomoon className="mt-3" icon="event" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Events</p>
                </button>
                <button type="button" className="btn bg-white p-3 borderStyle  col-md-5 mx-3 mb-3"onClick={()=>this.props.history.replace('/directory')}>
                    <Icomoon className="mt-3" icon="directory" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Directory</p>
                </button>
                <button type="button" className="btn bg-white p-3 borderStyle  col-md-5 mx-3 mb-3"onClick={()=>this.props.history.replace('/policy')}>
                    <Icomoon className="mt-3" icon="policy" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Policy</p>
                </button>
                <button type="button" className="btn bg-white p-3 borderStyle  col-md-5 mx-3 mb-3"onClick={()=>this.props.history.replace('/careers')}>
                    <Icomoon className="mt-3" icon="career" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Career</p>
                </button>
            </div>
        )
    }

}

export default Dashboard;