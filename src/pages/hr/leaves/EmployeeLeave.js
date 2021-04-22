// Employee leaves Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout} from '../../../common/Components';
import Icomoon from '../../../libraries/Icomoon';
import { DataTable } from '../../../common/DataTable';


class Leaves extends React.Component {
    state={
        columnDataState:[],
        employeeLeaveData:[],
        rowDataState:[],
    }

    componentDidMount() {
        const columnDataState = [ 
            {field: 'Name' ,width: 110} ,
            {field: 'Type' ,width: 110} ,
            {field: 'Reason' ,width: 110},
            {field: 'Date' ,width: 110},
            {field: 'Time' ,width: 110},
            {field: 'Approval' ,width: 110},
            {field: 'By',width: 110},
            {field: 'Days',width: 110}
        ]

        const rowDataState = [
            { id: 1, Name: 'Divya', Type: 'Sick', Reason:'Suffering from Fever', Date:'20 Feb 2021', Time:'7.am', Approval:'Pending', By:'Jeni', Days:'02' },
            { id: 2, Name: 'Priya',Type: 'Vacation', Reason:'Out of state', Date:'10 Feb 2021', Time:'9.am', Approval:'Approved', By:'John', Days:'04'},
        ]
        this.setState({columnDataState,rowDataState })
	}

    render() {
        return (
            <Layout back="HR Management" current="Leaves" pageTitle="Employee Leaves" >
                {this.renderEmployeeLeaves()}
            </Layout>
        )
    }

    // Render Leaves function

    renderEmployeeLeaves() {
        return(
            <>
            <div className="row mx-2">
                <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2 mx-4 my-2">
                    <input type="search" className="no-outline input-style smallText"
                        placeholder="Type, Date, Time..."
                    />
                    <Icomoon className="align-self-center" icon="search" size={15}/>
                </div>      
            </div>
            <div className="row mx-3">
                <div className="col-md-9 my-2">
                    {this.renderDataTable()}
                </div>
                <div className="col-md-3 my-2">
                    {this.renderEmployeeLeaveDetails()}
                </div>
            </div> 
            </>
        )    
    }

    // Render data table function

    renderDataTable() {
        return(
            <div className="bg-white px-4 borderStyle my-0">
                <DataTable
                    columnData={this.state.columnDataState}
                    rowData={this.state.rowDataState}                  
                />
            </div>
        )
    }

    // Render employee leave details

    renderEmployeeLeaveDetails() {
        return(
            <div className="borderStyle bg-white py-3 my-0">
                <div>
                    <p className="text-uppercase smallText text-center">sick leaves</p>
                    <p className="text-center gigaText font-weight-bold">{this.state.sickLeaves? this.state.sickLeaves:'10'}</p>
                </div>
                <div>
                    <p className="text-uppercase smallText text-center">casual leaves</p>
                    <p className="text-center gigaText font-weight-bold ">{this.state.casualLeaves? this.state.casualLeaves:'5'}</p>
                </div>
                <div>
                    <p className="text-uppercase smallText text-center">vacation</p>
                    <p className="text-center gigaText font-weight-bold ">{this.state.vacation? this.state.vacation:'6'}</p>
                </div>
                <div>
                    <p className="text-uppercase smallText text-center">present today</p>
                    <p className="text-center gigaText font-weight-bold">{this.state.presentToday? this.state.presentToday:'576'}</p>
                </div>
                <div>
                    <p className="text-uppercase smallText themeActiveFont text-center">total employees</p>
                    <p className="text-center gigaText font-weight-bold text-center">{this.state.totalEmployees? this.state.totalEmployees:'600'}</p>
                </div>
            </div>
        ) 
    }
}
export default Leaves;

    

  