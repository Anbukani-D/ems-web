// Policy Page
// 17-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout} from '../../../common/Components';
import Icomoon from '../../../libraries/Icomoon';

class Policy extends React.Component {
    state={
        uploadDocument:null
    }

    render() {
        return (
            <Layout back="HR Management" current="Policy" pageTitle="Policy">
                {this.renderPolicy()}
            </Layout>
        )
    }

    // Render Policy function

    renderPolicy() {
        return(
            <>
                <div className="col-md-2">    
                    <button type="submit" className="btn themeActiveColor text-white  normalText mt-3 py-2 mx-2" onClick={this.handleFileSelect}>
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
                { this.state.uploadDocument ?
                    <div>
                        {this.renderDocument()} 
                    </div>
                    :null
                }
                
            </>       
        )    
    }

    // Handle file select 

    handleFileSelect = (e) => {
        e.preventDefault();
        const fileSelector = document.getElementById("uploadDocument");
        fileSelector.click();
    };

    // Select file 

    selectFile = (e) => {
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
    

    // Render document 

    renderDocument = () => {
    // if (this.state.uploadDocument) {
        return (
            <div className="col-md-4">
                <div className="col-md-12 rounded bg-white">
                    <div className="row p-3">
                        <Icomoon className="xSmallText align-self-center" icon="doc" size={20}/> 
                        <p className="xSmallText d-flex align-self-center m-2">{this.state.uploadDocument.name?this.state.uploadDocument.name :'Leave_policy.pdf'}</p>  
                    </div>
                </div>
            </div>   
        )
    }
}
export default Policy;

    

  