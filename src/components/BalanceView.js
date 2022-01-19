import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {primary, primaryLight} from '../assets/color'
import Eye from '../assets/icons/Eye'

function BalanceView() {
	return (
		<View style={styles.balanceContainer}>
			<Text style={{textAlign:'center', fontSize:13, color:'white'}}>TOTAL TOKEN BALANCE</Text>
			<View style={{flexDirection:'row', justifyContent:'center'}}>
				<Text style={styles.valueText}>50,000 ORV</Text>
				<View style={{alignSelf:'center', marginLeft:10}}>
					<Eye/>
				</View>
			</View>
			<View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop:50}}>
				<View style={styles.button}>
					<Text style={{textAlign:'center', color:'white'}}>Buy</Text>
				</View>
				<View style={styles.button}>
					<Text style={{textAlign:'center', color:'white'}}>Send</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	balanceContainer: {
	  backgroundColor: primary,
	  borderRadius: 20,
	  padding: 20,
	  fontWeight: 'bold'
	},
	valueText:{
		fontSize: 30,
		textAlign: 'center',
		color: 'white'
	},
	button:{
		backgroundColor: primaryLight,
		width: 120,
		height: 40,
		textAlign:'center',
		borderRadius: 5,
		alignContent:'center',
		justifyContent:'center',
		shadowColor: '#171717',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	}
  });

export default BalanceView
