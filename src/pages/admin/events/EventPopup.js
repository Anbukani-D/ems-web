// Event popup data

import React from 'react'
import {ThemeButton} from '../../../common/Components';
import Table from 'react-bootstrap/Table';
import "../../../css/common.css";


class EventPopup extends React.Component {
    state = {
        todayLeave:[],
    }

    componentDidMount() {
        let todayLeave = [
            {
                id: 1,
                name:'preethi',
                leaveType: 'Sick', 
                reason:'Fever', 
                days:'02'
                
            },
            {
                id: 2,
                name:'abi',
                leaveType: 'Sick', 
                reason:'Fever', 
                days:'02'
            },
        ];
        this.setState({ todayLeave: todayLeave});
      }

    render(){
        return(
            <div className="p-3" style={{maxWidth:600}}>
                <p className="xSmallText">Total Number  of Leaves Today <span className="themeActiveFont font-weight-bold ">5</span></p>
                <Table className="border-0 h-25 scrollStyle">
                    <thead className="xSmallText"> 
                        <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Reason</th>
                        <th>Days</th>
                        </tr>
                    </thead>
                    <tbody className="scrollStyle">
                    {this.state.todayLeave.map((todayLeave) => (
                        <tr className="xSmallText " key={todayLeave.id}>
                            <td>{todayLeave.name}</td>
                            <td>{todayLeave.leaveType}</td>
                            <td>{todayLeave.reason}</td>
                            <td>{todayLeave.days}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                <ThemeButton wrapperClass="btn borderColor themeActiveFont py-2 xSmallText " label="View More"  /> 
            </div>
        )
    }
}
export default EventPopup;