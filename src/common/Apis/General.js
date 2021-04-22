import "../../libraries/Global";
import { callApi } from "../../libraries/Api";
// import User from "../../models/User";
// import Config from "../../models/Config";

/**
 *
 * @param{getData} get notification data
 * @returns
 */
export const getNotifications = async (requestData = {}) => {
    const functionUrl = "notification";
    const user_id = User.user_id;
    try {
        return await callApi(functionUrl, requestData, "GET", user_id)
            .then((response) => {
                if (response.status) {
                    console.log(response);
                }
                return response;
            })
            .catch((error) => {
                console.log("Error from API => ", error);
            });
    } catch (error) {
        console.log("Error from catch => ", error);
    }
};