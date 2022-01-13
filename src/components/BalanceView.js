import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {primary, primaryLight} from '../assets/color'
import Eye from '../assets/icons/Eye'

function BalanceView() {
	return (
		<View style={styles.balanceContainer}>
			<Text style={{textAlign:'center', fontSize:13}}>TOTAL TOKEN BALANCE</Text>
			<View style={{flexDirection:'row', justifyContent:'center'}}>
				<Text style={styles.valueText}>50,000 ORV</Text>
				<View style={{alignSelf:'center', marginLeft:10}}>
					<Eye/>
				</View>
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
		justifyContent:'center',
		shadowColor: '#171717',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	}
  });

export default BalanceView
