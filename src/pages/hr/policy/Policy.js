// Policy Page
// 17-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout} from '../../../common/Components';
import Icomoon from '../../../libraries/Icomoon';
import ApplyLeave from '../../general/ApplyLeave';

class Policy extends React.Component {
    state={
        uploadDocument:null
    }

    render() {
        return (
            <Layout back="HR Management" current="Policy" >
                <div className="pr-2">
                    {this.renderPolicy()}
                    <div className="d-flex justify-content-end">
                        <ApplyLeave/>
                    </div>
                </div>
            </Layout>
        )
    }

    // Render Policy function

    renderPolicy() {
        return(
            <div className="container-fluid">
                <div className="col-md-2">    
                    <button type="submit" className="btn themeActiveColor text-white col-md-12 normalText mt-3 py-3" onClick={this.handleFileSelect}>
                        <Icomoon icon="attach" size={20} />
                        Upload Policy
                    </button>
                    <input  
                        type="file" 
                        id="uploadDocument" 
                        className="d-none" 
                        accept=".pdf, .doc"
                        onChange={this.selectFile}  
                    />
                </div>
                { this.state.uploadDocument?
                <div className="my-3">
                    {this.renderDocument()} 
                </div>
                :null
                }
                
            </div>       
        )    
    }
    handleFileSelect = (e) => {
        console.log('handle select')
        e.preventDefault();
        const fileSelector = document.getElementById("uploadDocument");
        fileSelector.click();
    };
    selectFile = (e) => {
        console.log(' select file')
        e.preventDefault();
        let reader = new FileReader();
        const uploadDocument = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                uploadDocument: uploadDocument,
            });
        };
        reader.readAsDataURL(uploadDocument);
    };
    
    renderDocument = () => {
        console.log('inside document')
        // if (this.state.uploadDocument) {
            return (
                <div className="col-md-2">
                    <div className="col-md-12 rounded bg-white ">
                        <div className="row p-3">
                            <Icomoon className="xSmallText align-self-center" icon="doc" size={20}/> 
                            <p className="xSmallText d-flex align-self-center m-2">{this.state.uploadDocument.name?this.state.uploadDocument.name :'Leave_policy.pdf'}</p>  
                        </div>
                    </div>
                </div>
                
            )
        }
    // }

    // fileData = () => { 
    //     if (this.state.selectedFile) { 
            
    //       return ( 
    //         <div> 
    //           <h2>File Details:</h2> 
    //           <p>File Name: {this.state.selectedFile.name}</p> 
    //           <p>File Type: {this.state.selectedFile.type}</p> 
    //           <p> 
    //             Last Modified:{" "} 
    //             {this.state.selectedFile.lastModifiedDate.toDateString()} 
    //           </p> 
    //         </div> 
    //       ); 
    //     } else { 
    //       return ( 
    //         <div> 
    //           <br /> 
    //           <h4>Choose before Pressing the Upload button</h4> 
    //         </div> 
    //       ); 
    //     } 
    //   };  
}
export default Policy;

    

  