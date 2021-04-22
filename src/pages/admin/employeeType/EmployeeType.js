// User Type Page
// 08-04-2021

import React from 'react';
import "../../../css/common.css";
import { Layout, ToolTip} from '../../../common/Components';
import CreateEmployeeType from './CreateEmployeeType';
import Icomoon from "../../../libraries/Icomoon";
import { DataTable } from '../../../common/DataTable';


class EmployeeType extends React.Component {
    state={
        columnDataState:[],
        rowDataState:[],
        EmployeeTypeData:[],
        
        
    }
    componentDidMount () {
        const columnDataState = [
            {field: 'code' , headerName:"Code",width: 200}, 
            {field: 'Name', headerName:'Name',width: 200 },
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
            { id: 1, code: 'IT0001', Name:'Manager'},
            { id: 2, code: 'IT0002', Name:'Software Developer' }
        ]
        this.setState({columnDataState,rowDataState })
    }

    render() {
        return (
            <Layout back="Admin" current="Employee Type" pageTitle="Employee Type">
                {this.renderEmployeeType()}
            </Layout>
        )
    }

    // Render Employee type  function

    renderEmployeeType() {
        return(
            <div className="mx-2 my-0 py-0">
                <div className="row mx-2">
                    <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2 mx-4 my-1">
                        <input type="search" className="no-outline input-style smallText"
                            placeholder="Code..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div>      
                    <CreateEmployeeType/>
                </div>
                <div className="my-2 mx-4">
                    {this.renderDataTable()}
                </div>
            </div>       
        )    
    }
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
export default EmployeeType;

    

  