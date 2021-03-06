import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputV2 = ({
	placeholder,
	label,
	value,
	onChangeText,
	secureTextEntry,
	autoCapitalize,
	style
}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={style}
				value={value}
				onChangeText={onChangeText}
				autoCapitalize='none'
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: 'white',
		backgroundColor: '#ADCBE0',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 17,
		lineHeight: 23,
		flex: 1,
		width: '100%',
		alignSelf: 'stretch'
	},
	labelStyle: {
		fontSize: 18,
		marginTop: -20,
		marginBottom: -10,
		flex: 1,
		color: '#3982B6',
		fontFamily: 'AppleGothic'
	},
	containerStyle: {
		height: 35,
		backgroundColor: '#fff',
		borderRadius: 2,
		// borderWidth: 1,
		borderColor: '#3982B6',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginTop: 30,
		marginBottom: 10
	}
};

export { InputV2 };
