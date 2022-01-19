import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {text, primary, green} from '../assets/color';
import DownArrow from '../assets/icons/DownArrow'

function Transactionitem() {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.detContainer}>
				<View style={styles.iconContainer}>
				<View style={{alignItems:'center'}}>
						<DownArrow/>
					</View>
				</View>
				<Text style={{color: text, alignSelf: 'center', fontWeight:'bold'}}>Deets</Text>
			</View>
			<Text style={{color:'#F10000', alignSelf:'center'}}>243.00 USD</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	itemContainer: {
	  height: 60,
	  borderRadius: 10,
	  backgroundColor: 'white',
	  flexDirection: 'row',
	  alignContent: 'center',
	  justifyContent:'space-between',
	  paddingHorizontal: 20,
	  marginBottom: 10
	},
	iconContainer:{
		backgroundColor: '#FFECE7',
		height: 40,
		width: 40,
		borderRadius: 20,
		alignSelf: 'center',
		marginRight: 10,
		justifyContent:'center'
	},
	detContainer:{
		flexDirection: 'row'
	}
  });

export default Transactionitem
