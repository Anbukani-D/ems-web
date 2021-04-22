import { callApi } from "../../../libraries/Api";

/**
 * user policy submit call.
 * @param(apiRequest) API resquest information
 * @return API response
*/
export const policy = (apiRequest) => {
	const functionUrl = 'policy';
	try {
		callApi(functionUrl, apiRequest).then((response) => {
			console.log(response + "Api");
			return response;
		}).catch((error) => {
			console.log("Error from Api => ", error);
		})
	} catch (error) {
		console.log('Error from catch => ', error);
	}
}