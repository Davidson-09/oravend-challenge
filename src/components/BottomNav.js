import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {background, text, primary} from '../assets/color'

function BottomNav() {
	return (
		<View style={styles.navContainer}>
			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}></View>
				<Text style={{color: text, textAlign: 'center'}}>Home</Text>
			</View>
			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}></View>
				<Text style={{color: text, textAlign: 'center'}}>Home</Text>
			</View>

			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.centernav}></View>
			</View>

			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}></View>
				<Text style={{color: text, textAlign: 'center'}}>Home</Text>
			</View>
			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}></View>
				<Text style={{color: text, textAlign: 'center'}}>Home</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	navContainer: {
		height: 80,
		backgroundColor: 'white',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		padding: 0,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignSelf: 'center'
	},
	navItemContainer:{

	},
	navIcon:{
		width: 40,
		height: 40,
		borderRadius: 25,
		backgroundColor: background,
		alignSelf: 'center'
	},
	centernav:{
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: primary,
		marginTop: -40
	}
  });

export default BottomNav
