// Department Page
// 09-04-2021

import React from 'react';
import "../../../css/common.css";
import { Layout , ToolTip} from '../../../common/Components';
import CreateDepartment from '../department/CreateDepartment';
import Icomoon from "../../../libraries/Icomoon";
import { DataTable } from '../../../common/DataTable';

class Department extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        DepartmentData:[],
        
        
    }
    componentDidMount () {
        const columnDataState = [
            {
                field: 'departmentId' , 
                headerName:"Department Id",
                width: 200
            }, 
            {
                field: 'departmentName', 
                headerName:'Department Name',
                width: 200 
            }, 
            {field: 'action', headerName:'Action', width:130,
            renderCell: () => (
                <div>
                    <ToolTip title="Edit">
                        <Icomoon  style={{cursor:'pointer'}}  icon="pencil" size={20}  />
                    </ToolTip>
                    <ToolTip title="Delete">
                        <Icomoon  style={{cursor:'pointer'}}  icon="delete" size={20}  />
                    </ToolTip>
                </div>
              ),
            },
        ]

        const rowDataState =[
            { id: 1, departmentId: 'IT0001', departmentName:'IT'},
            { id: 2, departmentId: 'IT0002', departmentName:'Finance' },
            { id: 3, departmentId: 'IT0003', departmentName:'Development' }
        ]
        this.setState({columnDataState,rowDataState })
    }

    render() {
        return (
            <Layout back="Admin" current="Department"  pageTitle="Department">
                {this.renderDepartment()}
            </Layout>
        )
    }

    // Render department function

    renderDepartment() {
        return(
            <div className="mx-2 my-0 py-0">
                <div className="row mx-1">
                    <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2 mx-3 my-1">
                        <input type="search" className="no-outline input-style smallText"
                            placeholder="Department Name..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div>      
                    <CreateDepartment/>
                </div>
                <div className="mx-3 my-2">
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
export default Department;

    

  