//import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { GET_ORDERS, GET_ALL_ORDERS } from './types';

export const getOrders = id => {
	return dispatch => {
		axios
			.get(
				`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/orderapi/${id}`,
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(res => {
				dispatch({
					type: GET_ORDERS,
					payload: res.data
				});
			});
	};
};

export const getAllOrders = () => {
	return dispatch => {
		axios.get(
			'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/orderapi/',
			{
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		)
		.then(res => {
			dispatch({
				type: GET_ALL_ORDERS,
				payload: res.data
			});
		});
	};
};
