import React from "react";


export const loginReducer = (prevState, action)=>{
	switch (action.type) {
		case 'get_token':
			return {
				...prevState,
				userToken: action.userToken,
				isLoading: false
			};
		case 'login':
			return {
				...prevState,
				userMail: action.userMail,
				userName: action.userName,
				userToken: action.userToken,
				isLoading: false
			};
		case 'logout':
			return {
				...prevState,
				userToken: null,
				userName: '',
				userMail:'',
				isLoading: false
			};
		case 'signup':
			return {
				...prevState,
				userMail: action.userMail,
				userName: action.userName,
				userToken: action.userToken,
				isLoading: false
			};
		default:
			break;
	}
};

export const initialState = {
	userName: '',
	userMail:'',
	userToken: null,
	isLoading: true
}

