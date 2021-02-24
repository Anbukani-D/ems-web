// Leaves Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout, ThemeButton, CustomInput} from '../../../common/Components';
import ApplyLeave from '../../general/ApplyLeave';
import Icomoon from '../../../libraries/Icomoon';
import { DataTable } from '../../../common/DataTable';

class Leaves extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        leaveData:[],
    }

    componentDidMount () {
        const columnDataState = [ 
            {field: 'Type' ,width: 110} ,
            {field: 'Reason' ,width: 110},
            {field: 'Date' ,width: 110},
            {field: 'Time' ,width: 110},
            {field: 'Approval' ,width: 110},
            {field: 'By',width: 110},
            {field: 'Days',width: 110}

        ]

        const rowDataState = [
            { id: 1, Type: 'Sick', Reason:'Suffering from Fever', Date:'20 Feb 2021', Time:'7.am', Approval:'Pending', By:'Jeni', Days:'02' },
            { id: 2, Type: 'Vacation', Reason:'Out of state', Date:'10 Feb 2021', Time:'9.am', Approval:'Approved', By:'John', Days:'04'},
        ]

        this.setState({columnDataState,rowDataState })
        console.log('col',columnDataState,this.state.leaveData )

    }

    render() {
        return (
            <Layout back="Admin" current="Leaves" >
                <div className="screenHeight">
                    {this.renderLeaves()}
                    <div className="d-flex justify-content-end">
                        <ApplyLeave/>
                    </div>
                </div>
            </Layout>
        )
    }

    // Render Leaves function

    renderLeaves() {
        return(
            <div className="container-fluid">
                <div className="row mx-3">
                    <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2 mx-3">
                        <input type="search" className="no-outline input-style smallText"
                            placeholder="Type, Date, Time..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div>      
                </div>
                <div className="row mx-3">
                    <div className="col-md-8 my-3">
                        {this.renderDataTable()}
                    </div>
                    <div className="col-md-4 my-3">
                        {this.renderLeaveDetails()}
                        {this.renderCreateLeave()}
                    </div>
                </div> 

            </div>       
        )    
    }

    // Render data table function

    renderDataTable() {
        return(
            <div className="col-md-12 bg-white p-4 borderStyle">
                <DataTable
                    columnData={this.state.columnDataState}
                    rowData={this.state.rowDataState}
                />
            </div>

        )
    }

    // Render leaves

    renderLeaveDetails() {
        return(
            <div className="borderStyle bg-white p-5">
                <p className="normalText themeActiveFont ml-3 font-weight-bold">Leaves</p>
                <div className="row">
                    <div className="col-md-5">
                        <p className="text-uppercase smallText text-center">total leaves</p>
                        <p className="text-center gigaText font-weight-bold">{this.state.totalLeaves? this.state.totalLeaves:'37'}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="text-uppercase xSmallText">remaining leaves</p>
                        <p className="text-center gigaText font-weight-bold themeActiveFont">{this.state.remainingLeaves? this.state.remainingLeaves:'29'}</p>
                    </div>
                </div>
                <div className="px-3">
                    <ThemeButton type="button" wrapperClass="btn col-md-12 themeActiveColor text-white fontStyle normalText" label="View Employees Leaves" onClick={()=> this.props.history.replace('/employeeLeave')} />
                </div>
            </div>
        ) 
    }
    renderCreateLeave() {
        return(
            <div className="borderStyle bg-white my-3 p-3">
                <p className="normalText themeActiveFont text-center font-weight-bold">Create Leave</p>
                <form onSubmit={this.onSubmitCreateLeave}>
                    <div className="my-3 px-3">
                        <CustomInput  
                            placeholder="Create Leave*" 
                            value={this.state.createLeave}
                            onChange={(e)=>this.setState({createLeave:e.target.value})}
                            customError={this.state.createLeaveErr}
                            onFocus={() =>
                                this.setState({
                                    createLeaveErr: '',
                                })
                            }
                        />
                        <ThemeButton type="submit" wrapperClass="btn col-md-12 text-white fontStyle normalText mt-3" label="Save"/>
                    </div>
                </form>
            </div>
        ) 

    }
    onSubmitCreateLeave= (e) =>{
        console.log('here');
        e.preventDefault();
        const allValidation = this.ValidateAllCreateLeave()
        if (allValidation) {
            alert('Leave created Successfully! ')
        } 
    }
}
export default Leaves;

    

  