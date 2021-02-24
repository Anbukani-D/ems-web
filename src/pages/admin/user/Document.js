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
            {
                id: 3,
                documentType: 'Identity Card',
                buttonTitle:'Upload'
                
            }
		];
		this.setState({documents: documents});
	}
    render(){
        return(
            <div className="col-md-12">
                <div className="row pl-0 mt-3">
                    <Icomoon icon="info" className="mr-2" size={16} color="black"/>
                    <p className="smallText text-secondary">Upload or Download Documents</p>
                </div>
                <div className="row">
                    {this.state.documents.map((documents) => (
                        <div className="rounded col-md-3 border borderColor p-3 mr-3 " key={documents.id}>
                            <div className="d-flex justify-content-center">
                                    <Icomoon icon="document"  size={40} color="black"/>
                            </div>
                            <p className="normalText font-weight-bold text-center">{documents.documentType}</p>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn themeActiveColor text-white fontStyle py-2 px-5 smallText text-uppercase">
                                    {documents.buttonTitle}
                                </button>
                            </div>
                        </div> 
                    ))}
                </div>

            </div>
        )
    }
}
export default Document;