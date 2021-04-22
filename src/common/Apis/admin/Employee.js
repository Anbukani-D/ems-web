import { callApi } from "../../../libraries/Api";

/**
 * 
 * @param{createEmployeeData} create employee data 
 */
export const createEmployee = async (requestData = {}) => {
	const functionUrl = "employee";
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
  * @param{postData} post employee list data
  * @returns 
  */
 export const employeeList = async (criteriaOption = [],page=0, size=100) => {
	const functionUrl = "employee_list";
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
 * @param{editData} edit employee data 
 */
export const editEmployee = async (requestData = {}, id) => {
	const functionUrl = "employee";
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
 * @param{editData} edit employee data 
 */
export const getEmployee = async (id) => {
	const functionUrl = "employee";
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
 * @param{deleteData} delete employee data
 * @returns
 */
export const deleteEmployee = async (employeeId) => {
	const functionUrl = "employee";
	try {
		return await callApi(functionUrl, {}, 'DELETE', employeeId)
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
