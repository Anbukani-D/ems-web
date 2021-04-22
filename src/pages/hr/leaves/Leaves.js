// Leaves Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout, ThemeButton, CustomInput} from '../../../common/Components';
import { CheckUserName } from "../../../common/Validation";
import Icomoon from '../../../libraries/Icomoon';
import { DataTable } from '../../../common/DataTable';
import {createLeave} from '../../../common/Apis/hr/Leave';
import LoadingBar from 'react-top-loading-bar'

class Leaves extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        leaveData:[],
        progress:''
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
    }

    render() {
        return (
            <Layout back="HR Management" current="Leaves" pageTitle="Leave Management">
                <div className="container-fluid">
                    <LoadingBar
                        color='#DF5A14'
                        progress={this.state.progress}
                        onLoaderFinished={() => this.setState({progress:100})}
                    />
                    {this.renderLeaves()}
                </div>
            </Layout>
        )
    }

    // Render Leaves function

    renderLeaves() {
        return(
            <>
                <div className="row mx-3 ">
                    <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2 mx-3">
                        <input type="search" className="no-outline input-style smallText"
                            placeholder="Type, Date, Time..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div>      
                </div>
                <div className="row mx-3">
                    <div className="col-md-8 mt-3">
                        {this.renderDataTable()}
                    </div>
                    <div className="col-md-4 mt-3">
                        {this.renderLeaveDetails()}
                        {this.renderCreateLeave()}
                    </div>
                </div> 
            </>       
        )    
    }

    // Render data table function

    renderDataTable() {
        return(
            <div className="col-md-12 bg-white px-3 py-2 borderStyle">
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
                    <ThemeButton type="button" wrapperClass="btn themeActiveColor text-white col-md-12 fontStyle mt-3 py-2 smallText" label="View Employees Leaves" onClick={()=> this.props.history.replace('/employeeLeave')} />
                </div>
            </div>
        ) 
    }

    // Render  Create leave function

    renderCreateLeave() {
        return(
            <div className="borderStyle bg-white mt-3 p-3">
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
                            error
                        />
                        <ThemeButton type="submit" wrapperClass="btn themeActiveColor text-white col-md-12 fontStyle mt-3 py-2 smallText" label="Save"/>
                    </div>
                </form>
            </div>
        ) 
    }
    // Validation for job title
    validateCreateLeave = () => {
        const createLeaveError = CheckUserName(this.state.createLeave);
        if (createLeaveError === 1) {
            this.setState({ createLeaveErr: 'Job title empty' });
            return false;
        } else if (createLeaveError === 2) {
            this.setState({ createLeaveErr: 'Invalid job title' });
            return false;
        } else return true;
    };

    // Empty leave input validation 
    ValidateAllCreateLeave = ( ) => {
        const createLeaveInput = this.validateCreateLeave();
        if (createLeaveInput) {
            return true;
        } else {
            return false;   
        }
    }

    // onsubmit function for Create leave
    onSubmitCreateLeave= async(e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAllCreateLeave()
        if (allValidation) {
            let requestBody = {
                createLeave: this.state.createLeave,
            };
            let result = false
            result = await createLeave(requestBody);
            this.setState({
                progress:100
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Leave created Successfully! ')
                this.props.history.push('/leave');
            }
        } 
    }
}
export default Leaves;

    

  