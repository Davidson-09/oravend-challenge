import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {text, primary, green} from '../assets/color'

function Transactionitem() {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.detContainer}>
				<View style={styles.iconContainer}>

				</View>
				<Text style={{color: text, alignSelf: 'center'}}>Deets</Text>
			</View>
			<Text style={{color:green, alignSelf:'center'}}>20.00 ORV</Text>
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
		backgroundColor: green,
		height: 40,
		width: 40,
		borderRadius: 20,
		alignSelf: 'center',
		marginRight: 10
	},
	detContainer:{
		flexDirection: 'row'
	}
  });

export default Transactionitem
