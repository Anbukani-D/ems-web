import { observable, action, decorate } from 'mobx';
import { persistence, useClear, StorageAdapter } from 'mobx-persist-store';
import { readPersist, writePersist } from '../libraries/LocalStorage';

class User {
	user_id = '';
	

	setBackValues(value) {
		Object.keys(value).map((i) =>
			this[i] = value[i]
		);
	}

	setUserType(value) {
		this.user_type = value;
	}
	setUserId(value) {
		this.user_id = value;
	}
	setUpdateUser(value) {
		this.updateUser = value;
	}
	
	// Used for profile page
	setStatus(value) {
		this.status = value;
	}
	clearStore() {
		useClear(this);
		const keys = ['user_id', 'status'];
		this.updateUser = false;
		
		keys.map((i) =>
			this[i] = ''
		);
	}
}

decorate(User, {
	user_id: observable,
	status: observable,
	updateUser: observable,
	setUserId: action,
	setUpdateUser: action,
	clearStore: action
})


persistence({
	name: 'user',
	properties: ['user_id',  'status'],
	adapter: new StorageAdapter({
		read: readPersist,
		write: writePersist,
	}),
	reactionOptions: { // optional
		delay: 2000
	},
})(User);

export default new User();
