import { callApi } from "../../../libraries/Api";

/**
 * 
 * @param{createCareerData} create career data 
 */
export const createCareer = async (requestData = {}) => {
	const functionUrl = "career";
		try {
			return await callApi(functionUrl, requestData)
				.then( response => {
					console.log('response',response);
					return response;
				})
				.catch(error => {
					console.log('Error from API => ', error);
				});
		} catch (error) {
			console.log('Error from catch => ', error);
		}
};

/**
  *
  * @param{postData} post career list data
  * @returns 
  */
 export const careerList = async (criteriaOption = [],page=0, size=100) => {
	const functionUrl = "career_list";
	const requestData = {
		criteria: criteriaOption,
        sortBy: [
			{
				field: "id",
				order: "desc",
			},
		],
        page: page,
        size: size
	}
	try {
		return await callApi(functionUrl, requestData)
			.then(response => {
				console.log('response',response);
				return response;
			})
			.catch(error => {
				console.log('Error from API => ', error);
			});
	} catch (error) {
		console.log('Error from catch => ', error);
	}
};

/**
 * 
 * @param{editData} edit career data 
 */
export const editCareer = async (requestData = {}, id) => {
	const functionUrl = "career";
		try {
			return await callApi(functionUrl, requestData, 'PUT', id)
				.then( response => {
					console.log('response',response);
					return response;
				})
				.catch(error => {
					console.log('Error from API => ', error);
				});
		} catch (error) {
			console.log('Error from catch => ', error);
		}
};

/**
 * 
 * @param{editData} edit career data 
 */
export const getCareer = async (id) => {
	const functionUrl = "career";
		try {
			return await callApi(functionUrl, {}, 'GET', id)
				.then( response => {
					console.log('response',response);
					return response;
				})
				.catch(error => {
					console.log('Error from API => ', error);
				});
		} catch (error) {
			console.log('Error from catch => ', error);
		}
};

/**
 * @param{deleteData} delete career data
 * @returns
 */
export const deleteCareer = async (careerId) => {
	const functionUrl = "career";
	try {
		return await callApi(functionUrl, {}, 'DELETE', careerId)
			.then(async response => {
				if (response.status) {
					console.log('response',response);
				}
				return response;
			})
			.catch(error => {
				console.log('Error from API => ', error);
			});
	} catch (error) {
		console.log('Error from catch => ', error);
	}
};
