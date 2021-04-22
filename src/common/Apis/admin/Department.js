import { callApi } from "../../../libraries/Api";

/**
 * 
 * @param{createDepartmentData} create department data 
 */
export const createDepartment = async (requestData = {}) => {
	const functionUrl = "departments";
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
  * @param{postData} post department list data
  * @returns 
  */
 export const departmentList = async (criteriaOption = [],page=0, size=100) => {
	const functionUrl = "departments_list";
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
 * @param{editData} edit Department data 
 */
export const editDepartment = async (requestData = {}, id) => {
	const functionUrl = "departments";
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
 * @param{editData} edit Department data 
 */
export const getDepartment = async (id) => {
	const functionUrl = "departments";
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
 * @param{deleteData} delete department data
 * @returns
 */
export const deleteDepartment = async (departmentId) => {
	const functionUrl = "departments";
	try {
		return await callApi(functionUrl, {}, 'DELETE', departmentId)
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
