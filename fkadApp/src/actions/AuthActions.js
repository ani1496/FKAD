import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};
