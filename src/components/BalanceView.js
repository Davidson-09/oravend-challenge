import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {primary, primaryLight} from '../assets/color'

function BalanceView() {
	return (
		<View style={styles.balanceContainer}>
			<Text style={{textAlign:'center', fontSize:13}}>TOTAL TOKEN BALANCE</Text>
			<View>
				<Text style={styles.valueText}>50,000 ORV</Text>
			</View>
			<View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop:70}}>
				<View style={styles.button}>
					<Text style={{textAlign:'center'}}>Buy</Text>
				</View>
				<View style={styles.button}>
					<Text style={{textAlign:'center'}}>Send</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	balanceContainer: {
	  backgroundColor: primary,
	  height: 200,
	  borderRadius: 20,
	  paddingTop: 20,
	  fontWeight: 'bold'
	},
	valueText:{
		fontSize: 40,
		textAlign: 'center'
	},
	button:{
		backgroundColor: primaryLight,
		width: 120,
		height: 40,
		textAlign:'center',
		borderRadius: 5,
		alignContent:'center',
		justifyContent:'center'
	}
  });

export default BalanceView
