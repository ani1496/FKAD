import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
	Header,
	Button,
	Input,
	InputThree,
	CheckBoxInput,
	DropDown
} from '../common';

class TimeAndPlace extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>Time and Place:</Text>
					<View style={{ marginTop: 15 }}>
						<Text style={styles.textStyle}>Day</Text>
						<View style={styles.todayTomorrowStyle}>
							<CheckBoxInput label="Today" />
							<CheckBoxInput label="Tomorrow" />
						</View>
						<Text style={styles.textStyle}>Time: </Text>
						<DropDown label=' Select Time ' options={times} />
						<Text style={styles.textStyle}>Place Order At: </Text>
						<View style={styles.todayTomorrowStyle}>
							<CheckBoxInput label="Doorway" />
							<CheckBoxInput label="Inside" />
						</View>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							&#8826;&#8826; Back
						</Button>
						<Button
							onPress={() => {
								Actions.deliverTo();
							}}
						>
							Next &#8827;&#8827;
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		margin: 10,
		height: '100%'
	},
	textStyle: {
		marginTop: 20,
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	threeInputsStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	},
	todayTomorrowStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	}
};

const times = [
	'12:00 am',
	'1:00 am',
	'2:00 am',
	'3:00 am',
	'4:00 am',
	'5:00 am',
	'6:00 am',
	'7:00 am',
	'8:00 am',
	'9:00 am',
	'10:00 am',
	'11:00 am',
	'12:00 pm',
	'1:00 pm',
	'2:00 pm',
	'3:00 pm',
	'4:00 pm',
	'5:00 pm',
	'6:00 pm',
	'7:00 pm',
	'8:00 pm',
	'9:00 pm',
	'10:00 pm',
	'11:00 pm'
];

export default TimeAndPlace;
