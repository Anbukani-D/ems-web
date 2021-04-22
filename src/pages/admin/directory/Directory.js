// Directory Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout , ToolTip} from '../../../common/Components';
import Icomoon from "../../../libraries/Icomoon";
import { DataTable } from '../../../common/DataTable';


class Directory extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        directoryData:[],
        
        
    }
    componentDidMount () {
        const columnDataState = [
            {field: 'employeeId' , headerName:"Employee Id",width: 200}, 
            { field: 'employeeName', headerName:'Employee Name',width: 200 }, 
            {field: 'department', headerName:'Department' ,width: 200}, 
            {field: 'manager' , headerName:'Manager', width: 200}, 
            {field: 'contactNumber',headerName:'Contact Number', width: 200} ,
            {field: 'action', headerName:'Action', width:130,
            renderCell: () => (
                <div>
                    <ToolTip title="Edit">
                        <Icomoon  style={{cursor:'pointer'}} icon="pencil" size={20}  />
                    </ToolTip>
                    <ToolTip title="Delete">
                        <Icomoon  style={{cursor:'pointer'}} icon="delete" size={20}  />
                    </ToolTip>
                </div>
              ),
            },
        ]

        const rowDataState =[
            { id: 1, employeeId: 'IT0001', employeeName:'Preethi',department:'IT',manager:'Abi',contactNumber:'+919887876543' },
            { id: 2, employeeId: 'IT0002', employeeName:'Preetham',department:'Finance',manager:'Neethu',contactNumber:'+919887878898' }
        ]
        this.setState({columnDataState,rowDataState })
    }

    render() {
        return (
            <Layout back="Admin" current="Directory" pageTitle="Directory">
                {this.renderDirectory()}
            </Layout>
        )
    }

    // Render directory function

    renderDirectory() {
        return(
            <div className="mx-3">
                <div className="row mx-3">
                    <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2 my-2">
                        <input type="search" className="no-outline input-style smallText"
                            placeholder="Employee Id, Name..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div>      
                </div>
                <div className="mx-3 my-1">
                    {this.renderDataTable()}
                </div>
            </div>       
        )    
    }

    // Render data table 
    renderDataTable() {
        return(
            <div className="col-md-11 bg-white borderStyle">
                <DataTable 
                    columnData={this.state.columnDataState}
                    rowData={this.state.rowDataState}  
                />
           </div>
        )
    } 
}
export default Directory;

    

  