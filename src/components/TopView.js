import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import userPic from '../assets/images/man.jpg';
import Notificationbell from '../assets/icons/Notificationbell';
import { textLight } from '../assets/color';
import Scan from '../assets/icons/Scan'

const TopView =()=>{
	return(
		<View style={styles.topBarContainer}>
			<View style={styles.imageContainer} >
				<Image source={userPic} style={styles.userPic} />
			</View>
			
			<View style={styles.iconContainer}>
				<Notificationbell/>
				<View style={styles.line}/>
				<Scan/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	topBarContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15
	},
	imageContainer:{
		width: 50,
		height: 50
	},
	userPic: {
		flex:1,
		width: null,
		height: null,
		resizeMode: 'cover',
		borderRadius: 25
	},
	line:{
		backgroundColor: textLight,
		height: 20,
		width: 1
	},
	iconContainer:{
		flexDirection: 'row',
		alignSelf: 'center',
		width: 70,
		justifyContent:'space-evenly'
	}
  });

export default TopView