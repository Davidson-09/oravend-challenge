import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {text, primaryLight} from '../assets/color'

function QuickAccessTab() {
	return (
		<View style={styles.quicActionContainer}>
			<Text style={{color:text, fontSize: 17, fontWeight: 'bold'}}>Quick Actions</Text>
			<View style={styles.actionContainer}>
				<View>
					<View style={{...styles.actions, backgroundColor: primaryLight}}>

					</View>
					<Text style={styles.actionText}>Marketplace</Text>
				</View>

				<View>
					<View style={{...styles.actions, backgroundColor: "#DEF2ED"}}>

					</View>
					<Text style={styles.actionText}>Receive</Text>
				</View>

				<View>
					<View style={{...styles.actions, backgroundColor: '#FFECE7'}}>

					</View>
					<Text style={styles.actionText}>P2P</Text>
				</View>

				<View>
					<View style={{...styles.actions, backgroundColor: '#E3E3E3'}}>

					</View>
					<Text style={styles.actionText}>More</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	quicActionContainer: {
	  paddingTop: 20
	},
	actions:{
		width: 50,
		height: 50,
		borderRadius: 25
	},
	actionContainer: {
		flexDirection:'row',
		justifyContent: 'space-evenly',
		paddingTop: 10
	},
	actionText:{
		color: text,
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 5
	}
  });



export default QuickAccessTab
