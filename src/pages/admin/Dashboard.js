// Dashboard Page
// 11-02-2021

import React from 'react';
import "../../css/common.css";
import { Layout, ThemeButton} from '../../common/Components';
import ApplyLeave from '../general/ApplyLeave';
import Performance from '../../assets/images/performance.png';
import Avtar from "../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import Icomoon from '../../libraries/Icomoon';
import Table from 'react-bootstrap/Table';


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
            {
                id: 3,
                name:'john',
                leaveType: 'Sick', 
                reason:'Suffering from Fever', 
                from:'02 Feb,2021',
                to:'04 Feb, 2021',
                days:'02'
            }
		];
		this.setState({todayLeave: todayLeave});
	}



    render() {
        return (
            <Layout>
                <div className="screenHeight mx-3">
                    {this.renderDashboard()}
                    <div className="d-flex justify-content-end">
                        <ApplyLeave/>
                    </div>
                </div>
            </Layout>
        )
    }

    // Render dashboard function
    renderDashboard() {
        return(
            <div className="row">
                <div className="col-md-7">
                    {this.renderPerformance()}
                    {this.renderTodayLeavesTable()}
                </div>
                <div className="col-md-5">
                    {this.renderMenuButtons()}
                </div>
            </div>
        )
    }

    // Render Performance function
    renderPerformance() {
        return(
            <div className="bg-white p-3 borderStyle m-3" style={{position:'relative'}}>
                <p className="mediumText text-center font-weight-bold">Performer of the Month</p>
                {/* <div className="col-md-12" style={{ backgroundImage: `url(${Performance})` }}>
                    <div>
                        <div className="d-flex justify-content-center align-items-center" style={{ height:450, }}>
                            <div>
                                <Avatar  alt="Avtar" src={Avtar}/>
                            </div>
                            <div>
                                <p className="themeActiveFont gigaText font-weight-bold text-center">{this.state.employeeName ? this.state.employeeName : 'Jennifer'}</p>
                                <p className="normalText font-weight-bold text-center">{this.state.department ? this.state.department : 'Digital Marketing'}</p>
                            </div>
                        </div>
                         
                    </div>
                </div> */}
                <div className="col-md-12">
                    <img src={Performance} alt={Performance} width="100%" height="350"/>
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
            <div className="bg-white p-4 borderStyle m-3">
                <p className="xSmallText  text-secondary font-weight-bold">Todays Leaves</p>
                <Table className="border-0">
                    <thead className="smallText"> 
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
                    <tbody>
                    {this.state.todayLeave.map((todayLeave) => (
                        <tr className="smallText" key={todayLeave.id}>
                        <td>{todayLeave.name}</td>
                        <td>{todayLeave.leaveType}</td>
                        <td>{todayLeave.reason}</td>
                        <td>{todayLeave.from}</td>
                        <td>{todayLeave.to}</td>
                        <td>{todayLeave.days}</td>
                        <td><ThemeButton wrapperClass="btn themeActiveColor text-white fontStyle  py-2 smallText m-2" label="Approve" onClick={()=>{this.setState({approveModal:true})}} /> </td>
                        <td><ThemeButton wrapperClass="btn borderColor fontStyle  py-2 smallText m-2" label="Reject" onClick={()=>{this.setState({rejectModal:true})}} /> </td>

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
            <div className="row">
                <button type="button" className="btn bg-white p-4 borderStyle col-md-5 m-3" onClick={()=>this.props.history.replace('/userProfile')}>
                    <Icomoon className="mt-3" icon="user" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">User</p>
                </button>
                <button type="button" className="btn bg-white p-4 borderStyle  col-md-5 m-3"onClick={()=>this.props.history.replace('/leaves')}>
                    <Icomoon className="mt-3" icon="leave" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Leave</p>
                </button>
                <button type="button" className="btn bg-white p-4 borderStyle  col-md-5 m-3"onClick={()=>this.props.history.replace('/events')}>
                    <Icomoon className="mt-3" icon="events" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Events</p>
                </button>
                <button type="button" className="btn bg-white p-4 borderStyle  col-md-5 m-3"onClick={()=>this.props.history.replace('/directory')}>
                    <Icomoon className="mt-3" icon="directory" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Directory</p>
                </button>
                <button type="button" className="btn bg-white p-4 borderStyle  col-md-5 m-3"onClick={()=>this.props.history.replace('/policy')}>
                    <Icomoon className="mt-3" icon="policy" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Policy</p>
                </button>
                <button type="button" className="btn bg-white p-4 borderStyle  col-md-5 m-3"onClick={()=>this.props.history.replace('/careers')}>
                    <Icomoon className="mt-3" icon="career" size={70}/>
                    <p className="text-center normalText font-weight-bold mt-3">Career</p>
                </button>
            </div>
        
        )
    }

}

export default Dashboard;