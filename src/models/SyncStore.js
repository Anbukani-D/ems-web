/**
 * This class we are getting session stored value into Mobx value.
 * 12 Mar 2020
 */
import AppConfig from './AppConfig';
import User from './User';
import Config from './Config';
import {GetLocalStorage, readPersist} from '../libraries/LocalStorage';
import '../libraries/Global';

class SyncStore {
    constructor() {
        Config.setReHydrate(true);
        let localLocale = GetLocalStorage('locale', false);
        if (!localLocale) {
            localLocale = 'jp';
        }
        AppConfig.setLocale(localLocale);
        this.init();
    }

    init = async() => {
        let data = await readPersist('app');
        let userData = await readPersist('user');

        if (data) {
            AppConfig.setApiData(JSON.parse(data));
        }
        if (userData) {
            User.setBackValues(JSON.parse(userData))
        }
        Config.setReHydrate(false);
    }
};

export default new SyncStore();