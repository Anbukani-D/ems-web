import { callApi } from "../../../libraries/Api";

/**
 * 
 * @param{createHolidayData} create holiday data 
 */
export const createHoliday = async (requestData = {}) => {
	const functionUrl = "holiday";
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
  * @param{postData} post holiday list data
  * @returns 
  */
 export const holidayList = async (criteriaOption = [],page=0, size=100) => {
	const functionUrl = "holiday_list";
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
 * @param{editData} edit holiday data 
 */
export const editHoliday = async (requestData = {}, id) => {
	const functionUrl = "holiday";
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
 * @param{editData} edit holiday data 
 */
export const getholiday = async (id) => {
	const functionUrl = "holiday";
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
 * @param{deleteData} delete holiday data
 * @returns
 */
export const deleteHoliday = async (holidayId) => {
	const functionUrl = "holiday";
	try {
		return await callApi(functionUrl, {}, 'DELETE', holidayId)
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
