// Directory Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout} from '../../../common/Components';
import ApplyLeave from '../../general/ApplyLeave';
import CreateUser from '../user/CreateUser';
import CreateDepartment from '../user/CreateDepartment';
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
        {field: 'Employee_Id' ,width: 200}, { field: 'Employee_Name' ,width: 200 }, {field: 'Department' ,width: 200}, {field: 'Manager' ,width: 200}, {field: 'Contact_Number',width: 200} 
    ]

    

    const rowDataState =[
        { id: 1, Employee_Id: 'IT0001', Employee_Name:'Preethi',Department:'IT',Manager:'Abi',Contact_Number:'+919887876543' },
        { id: 2, Employee_Id: 'IT0002', Employee_Name:'Preetham',Department:'Finance',Manager:'Neethu',Contact_Number:'+919887878898' }
    ]


    this.setState({columnDataState,rowDataState })
    console.log('col',columnDataState)
}

    render() {
        return (
            <Layout back="Admin" current="Directory" >
                <div className="px-3 screenHeight">
                    {this.renderDirectory()}
                    <div className="d-flex justify-content-end">
                        <ApplyLeave/>
                    </div>
                </div>
            </Layout>
        )
    }

    // Render directory function

    renderDirectory() {
        return(
            <div className="container-fluid">
                <div className="row m-3">
                    <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2 my-2">
                        <input type="search" className="no-outline input-style smallText"
                            placeholder="Job Title, Skills, or Keywords..."
                        />
                        <Icomoon className="align-self-center" icon="search" size={15}/>
                    </div>      
                    <CreateUser/>
                    <CreateDepartment/>
                </div>
                <div className="m-3">
                    {this.renderDataTable()}
                </div>
            </div>       
        )    
    }
    renderDataTable() {
        return(
            <div className="col-md-11 bg-white p-4 borderStyle">
                <DataTable 
                    columnData={this.state.columnDataState}
                    rowData={this.state.rowDataState}  
                />
           </div>
       
        )
    }
    
}
export default Directory;

    

  