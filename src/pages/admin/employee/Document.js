// Document Tab 

import React from 'react';
import "../../../css/common.css";
import Icomoon from "../../../libraries/Icomoon";

class Document extends React.Component {
    state = {documents: []};
    componentDidMount() {
		let documents = [
			{
                id: 1,
                documentType: 'Aadhar Card',
				buttonTitle:'Update'
			},
			{
                id: 2,
                documentType: 'Pan Card',
                buttonTitle:'Upload'
				
            },
		];
		this.setState({documents: documents});
	}
    render(){
        return(
            <div className="col-md-12 ml-3">
                <div className="row pl-0 mt-3">
                    <Icomoon icon="info" className="mr-2" size={16} color="black"/>
                    <p className="smallText text-secondary">Upload or Download Documents</p>
                </div>
                <div className="row">
                    {this.state.documents.map((documents) => (
                        <div key={documents.id}>
                            {documents.buttonTitle==="Update" ?
                            <div className="rounded col-md-12 border borderColor p-3 my-3 mr-3">
                                <div className="d-flex justify-content-center">
                                    <Icomoon icon="document"  size={40} color="black"/>
                                </div>
                                <p className="normalText font-weight-bold text-center">{documents.documentType}</p>
                                <div className="d-flex justify-content-center m-3">
                                    <button type="submit" className="btn themeActiveColor text-white fontStyle py-2 px-5 smallText text-uppercase" onClick={this.handleFileSelect}>
                                        {documents.buttonTitle}
                                    </button>
                                    <input  
                                        type="file" 
                                        id="uploadDocument" 
                                        className="d-none" 
                                        accept=".pdf, .doc"
                                        onChange={this.selectFile}  
                                    />
                                </div>
                            </div> 
                            :
                            <div className="rounded col-md-12 border border-dark p-3 my-3 ml-3">
                                <div className="d-flex justify-content-center">
                                    <Icomoon icon="document"  size={40} color="black"/>
                                </div>
                                <p className="normalText font-weight-bold text-center">{documents.documentType}</p>
                                <div className="d-flex justify-content-center m-3">
                                    <button type="submit" className="btn bg-dark text-white fontStyle py-2 px-5 smallText text-uppercase" onClick={this.handleFileSelect}>
                                        {documents.buttonTitle}
                                    </button>
                                    <input  
                                        type="file" 
                                        id="uploadDocument" 
                                        className="d-none" 
                                        accept=".pdf, .doc"
                                        onChange={this.selectFile}  
                                    />
                                </div>
                            </div> 
                        }
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Handle Filw
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
}
export default Document;