import { callApi } from "../../../libraries/Api";

/**
 * 
 * @param{createLeaveData} create leave data 
 */
export const createLeave = async (requestData = {}) => {
	const functionUrl = "leave";
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
  * @param{postData} post leave list data
  * @returns 
  */
 export const leaveList = async (criteriaOption = [],page=0, size=100) => {
	const functionUrl = "leave_list";
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
 * @param{editData} edit leave data 
 */
export const editLeave = async (requestData = {}, id) => {
	const functionUrl = "leave";
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
 * @param{editData} edit leave data 
 */
export const getLeave = async (id) => {
	const functionUrl = "leave";
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
 * @param{deleteData} delete leave data
 * @returns
 */
export const deleteLeave = async (leaveId) => {
	const functionUrl = "leave";
	try {
		return await callApi(functionUrl, {}, 'DELETE', leaveId)
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

/**
 * 
 * @param{applyLeaveData} apply leave data 
 */
 export const applyLeave = async (requestData = {}) => {
	const functionUrl = "applyLeave";
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

