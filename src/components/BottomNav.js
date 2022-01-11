import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {background, text, primary} from '../assets/color';
import Home from '../assets/icons/Home'
import Wallet from '../assets/icons/Wallet'
import ScanWhite from '../assets/icons/ScanWhite'
import Resources from '../assets/icons/Resources'
import Profile from '../assets/icons/Profile'

function BottomNav() {
	return (
		<View style={styles.navContainer}>
			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}>
						<Home/>
				</View>
				<Text style={{color: text, textAlign: 'center'}}>Home</Text>
			</View>
			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}>
					<Wallet/>
				</View>
				<Text style={{color: '#ECEBED', textAlign: 'center'}}>Wallet</Text>
			</View>

			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.centernav}>
					<ScanWhite/>
				</View>
			</View>

			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}>
					<Resources/>
				</View>
				<Text style={{color: '#ECEBED', textAlign: 'center'}}>Resources</Text>
			</View>
			<View style={{width: 70, height: 70, justifyContent:'center'}}>
				<View style={styles.navIcon}>
					<Profile/>
				</View>
				<Text style={{color: '#ECEBED', textAlign: 'center'}}>Profile</Text>
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
		alignSelf: 'center',
		justifyContent:'center',
		alignItems:'center'
	},
	centernav:{
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: primary,
		marginTop: -40,
		justifyContent:'center',
		alignItems:'center'
	}
  });

export default BottomNav
