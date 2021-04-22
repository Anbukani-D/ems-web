import { DeviceUUID } from 'device-uuid';
import { callApi } from '../../libraries/Api';
import {
	SetLocalStorage
} from '../../libraries/LocalStorage';
import { hashValue } from '../../libraries/Secure';
import { objectDecrypt } from '../../common/Utilities';
import AppConfig from '../../models/AppConfig';
import Config from '../../models/Config';
import User from '../../models/User';
import '../../libraries/Global';

const device = new DeviceUUID().get();


/**
 *
 * Api call will check username & password and allow to login the system.
 * @param{requestData} Login request data
 * @returns
 */
export const auth = async (requestData = false) => {
	if (requestData) {
		requestData['deviceId'] = device;
		const functionUrl = 'login';
		try {
			return await callApi(functionUrl, requestData)
				.then(async response => {
					console.log(response);
					if (response.status && response.result) {
						const result = response.result;
						let encryptData = {};
						let decryptData = {};
						let apiDate = {};
						let user_id = '';
						encryptData = {
							userId: result.userId,
							sessionId: result.sessionId,
						};
						// When 2FA enabled.
						if(result && result.tfaID) {
							decryptData = await objectDecrypt(encryptData);
							// Localstorage the device key
							await Config.setTfaID(result.tfaID);
						}else {
							encryptData['authToken'] = result.authToken;
							encryptData['apiEncryptionKey'] = result.apiEncryptionKey;
							encryptData['deviceKey'] = result.deviceKey;
							encryptData['deviceEncryptionKey'] = result.deviceEncryptionKey;
							decryptData = await objectDecrypt(encryptData);
							let authToken = decryptData.authToken;
							authToken = authToken.replace('token:', '').trim();
							apiDate['authorization'] = authToken;
							apiDate['device_key'] = decryptData.deviceKey;
							apiDate['device_encryption_key'] = decryptData.deviceEncryptionKey;
							apiDate['api_key'] = decryptData.apiEncryptionKey;
							
							// Localstorage the device key
							await User.setStatus(result.userStatus);
							const UserHash = hashValue(user_id);
							SetLocalStorage('user', UserHash.slice(0, 10));
							SetLocalStorage('device_key', decryptData.deviceKey);
						}
						user_id = decryptData.userId;
						apiDate['session_id'] = decryptData.sessionId;
						await AppConfig.setApiData(apiDate);
						SetLocalStorage('user_id', user_id);
					}
					return response;
				})
				.catch(error => {
					console.log('Error from API => ', error);
				});
		} catch (error) {
			console.log('Error from catch => ', error);
		}
	}
};

/**
 *
 * @param{requestData} init forget password request
 * @returns
 */
export const initPasswordReset = async (requestData = false) => {
	const functionUrl = 'password';
	if (requestData) {
		try {
			return await callApi(functionUrl, requestData)
				.then(response => {
					if (response.status) {
						console.log(response);
					}
					return response;
				})
				.catch(error => {
					console.log('Error from API => ', error);
				});
		} catch (error) {
			console.log('Error from catch => ', error);
		}
	}
};

