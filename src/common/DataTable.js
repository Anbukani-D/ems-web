import React from 'react';
import '../css/dataTable.css'
import { DataGrid } from '@material-ui/data-grid';
export const DataTable = (props) => {
    let {...rest } = props; 
    return(
        <div style={{width:'100%', height:500}}>
            <DataGrid
                columns={props.columnData}
                rows={props.rowData}  
                {...rest}  
                // sortModel={[
                //     {
                //       field: 'commodity',
                //       sort: 'asc',
                //     },
                //   ]}     
                //   filterModel={{
                //     items: [
                //       { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
                //     ],
                //   }}    
                pageSize={5} 
                rowsPerPageOptions={[5, 10, 20]} 
                pagination     
            />
        
        </div>
    )
}