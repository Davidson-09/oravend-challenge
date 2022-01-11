import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {text, primaryLight} from '../assets/color';
import Marketplace from '../assets/icons/Marektplace'
import Receive from '../assets/icons/Receive'
import P2P from '../assets/icons/P2P'
import More from '../assets/icons/More'

function QuickAccessTab() {
	return (
		<View style={styles.quicActionContainer}>
			<Text style={{color:text, fontSize: 17, fontWeight: 'bold'}}>Quick Actions</Text>
			<View style={styles.actionContainer}>
				<View>
					<View style={{...styles.actions, backgroundColor: '#AFAAD0', justifyContent:'center'}}>
						<View style={{alignSelf:'center', justifyContent:'center'}}>
							<Marketplace/>
						</View>
					</View>
					<Text style={styles.actionText}>Marketplace</Text>
				</View>

				<View>
					<View style={{...styles.actions, backgroundColor: "#DEF2ED", justifyContent:'center'}}>
					<View style={{alignSelf:'center', justifyContent:'center'}}>
							<Receive/>
						</View>
					</View>
					<Text style={styles.actionText}>Receive</Text>
				</View>

				<View>
					<View style={{...styles.actions, backgroundColor: '#FFECE7', justifyContent:'center'}}>
					<View style={{alignSelf:'center', justifyContent:'center'}}>
							<P2P/>
						</View>
					</View>
					<Text style={styles.actionText}>P2P</Text>
				</View>

				<View>
					<View style={{...styles.actions, backgroundColor: '#E3E3E3', justifyContent:'center'}}>
					<View style={{alignSelf:'center', justifyContent:'center'}}>
							<More/>
						</View>
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
