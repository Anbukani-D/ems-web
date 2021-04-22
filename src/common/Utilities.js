//Import the libraries
import {AesUtil} from '../libraries/Secure';
const AES = new AesUtil(128, 168);

export const objectEncrypt = async ObjectData => {
	if (ObjectData && typeof ObjectData === 'object') {
		let encryptObjectData = {};
		for (let i in ObjectData) {
			encryptObjectData[i] = await AES.encrypt(ObjectData[i]);
		}
		return await encryptObjectData;
	} else if (ObjectData) {
		const encryptData = await AES.encrypt(ObjectData);
		return await encryptData;
	}
	return await ObjectData;
};

export const objectDecrypt = async ObjectData => {
	if (ObjectData && typeof ObjectData === 'object') {
		let decryptObjectData = {};
		for (let i in ObjectData) {
			if (ObjectData[i] && /(::)/g.test(ObjectData[i]) !== false) {
				decryptObjectData[i] = await AES.decrypt(ObjectData[i]);
			}
		}
		return await decryptObjectData;
	} else if (ObjectData) {
		const decryptData = await AES.decrypt(ObjectData);
		return await decryptData;
	}
	return await ObjectData;
};
// Moeny Format
export const momeyFormat = (x) => {
	if (x) {
	    var parts = x.toString().split(".");
	    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	    return parts.join(".");
    }else {
    	return x;
    }
}
export const zeroFillDecimal=( number, width=2 )=>{
	if (number) {
		let to_amount = number.toString().split(".");
		if(to_amount[1]){
			number = to_amount[1];
		}else{
			return number ;
		}
		if(number.toString().length>width){
			number=number.toString().substring(0, width);
		}
		width -= number.toString().length;
		if ( width > 0 )
		{
			number =number + new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '' );
		}
		if(to_amount[1]){
			number = to_amount[0]+"."+number;
		}
	}
	return number + ""; // always return a string
}