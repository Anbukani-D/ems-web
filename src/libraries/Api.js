//Import the libraries
import Config from '../models/Config';
import AppConfig from '../models/AppConfig';
import './Global';

export const callApi = (
	functionUrl = null,
	requestBody = {},
	method = 'POST',
	urlValue = null,
	headerVal = false,
	metaBody = false,
) => {
	// setting Body
	const requestInfo = JSON.stringify(requestBody);
	// Setting the Header
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': global.baseUrl
	};

	// Adding more herader
	if (AppConfig.authorization && AppConfig.session_id) {
		headers['Authorization'] = AppConfig.authorization;
		// headers['Session-id'] = AppConfig.session_id;
	} else if (AppConfig.request_id) {
		headers['Request-id'] = AppConfig.request_id;
	}

	const requestObj = {
		method,
		headers: headers,
		body: requestInfo
	};

	if (metaBody) {
		requestBody['meta'] = metaBody;
	}
	if (headerVal !== false) {
		for (let i in headerVal) {
			headers[i] = headerVal[i];
		}
	}

	if(method === 'GET') {
		delete requestObj.body;
	}

	// We are handling Network errors
	const handleErrors = response => {
		if (!response.ok) {
			Config.setApiError(response.statusText);
		}
	};
	console.log(requestObj, 'requestobj');
	let url = global.baseUrl + functionUrl;
	if (global.apiUrls[functionUrl]) {
		url = global.baseUrl + global.apiUrls[functionUrl];
	}
	if (urlValue) {
		url = functionUrl ? (url +"/"+urlValue) : (url + urlValue);
	}
	console.log(url, 'urlll');
	
	// All core API will be called from here
	return fetch(url, requestObj)
		.then(response => {
			handleErrors(response);
			const result = response.json();
			result.then(data => {
				// We are checking common errors
				if (data.status === false && data.result && data.result.error === 31) {
					// Logout the user
					console.log('Logout the user');
				}
			});
			return result;
		})
		.catch(async error => {
			console.log('Erorr ', error);
			if (error.message === 'Network request failed') {
				Config.setApiError('network_bracked_call_again_this_call');
			}
			throw error;
		});
};

export const uploadApi = (functionUrl, pictureData, callBack, type) => {
	const url = global.baseUrl + global.apiUrls[functionUrl];

	let formData = new FormData();
	formData.append('file', pictureData);
	formData.append('fileType', pictureData && pictureData.type ? pictureData.type : 'image/jpeg');
	formData.append('documentType', type);

	// Starting Http Request
	const xhr = new XMLHttpRequest();

	xhr.open('POST', url);
	console.log('OPENED', xhr.status);
	addListeners(xhr, callBack);
	xhr.onprogress = function() {
		console.log('LOADING', xhr.status);
	};
	xhr.onload = function() {
		console.log('DONE', xhr.status);
		console.log('Response ', xhr.response);
		if (xhr.status === 200){
			const response = JSON.parse(xhr.response);
			// returning the response in callBack page 
			callBack(response);
        }
	};
	
	if (AppConfig.authorization && AppConfig.session_id) {
		xhr.setRequestHeader('Authorization', AppConfig.authorization);
		xhr.setRequestHeader('Session-id', AppConfig.session_id);
	} else if (AppConfig.request_id) {
		xhr.setRequestHeader('Request-id', AppConfig.request_id);
	}
	// Ending Http Request
	xhr.send(formData);
};

const addListeners = (xhr, callBack) => {
	xhr.addEventListener('loadstart', callBack);
	xhr.addEventListener('load', callBack);
	xhr.addEventListener('loadend', callBack);
	xhr.addEventListener('progress', callBack);
	xhr.addEventListener('error', callBack);
	xhr.addEventListener('abort', callBack);
	xhr.addEventListener('response', callBack);
};