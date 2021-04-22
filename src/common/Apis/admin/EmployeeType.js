import { callApi } from "../../../libraries/Api";

/**
 * 
 * @param{createEmployeeTypeData} create employee type data 
 */
export const createEmployeeType = async (requestData = {}) => {
	const functionUrl = "employeeType";
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
  * @param{postData} post employee type list data
  * @returns 
  */
 export const employeeTypeList = async (criteriaOption = [],page=0, size=100) => {
	const functionUrl = "employeeType_list";
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
 * @param{editData} edit employee type data 
 */
export const editEmployeeType = async (requestData = {}, id) => {
	const functionUrl = "employeeType";
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
 * @param{editData} edit employee type data 
 */
export const getEmployeeType = async (id) => {
	const functionUrl = "employeeType";
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
 * @param{deleteData} delete employee type data
 * @returns
 */
export const deleteEmployeeType = async (employeeTypeId) => {
	const functionUrl = "employeeType";
	try {
		return await callApi(functionUrl, {}, 'DELETE', employeeTypeId)
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
