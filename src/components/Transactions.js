import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {text, primary} from '../assets/color'
import Transactionitem from './Transactionitem'
import Transactionitem2 from './TransactionItem2'

function Transactions() {
	return (
		<View style={styles.transactionsContainer}>
			<View style={styles.titleContainer}>
				<Text style={{color:text, fontWeight: 'bold', fontSize: 15}}>Recent Transactions</Text>
				<Text style={{color:primary, fontWeight: 'bold', fontSize: 15}}>See all</Text>
			</View>
			<View style={{marginTop: 10}}>
				<Transactionitem/>
				<Transactionitem2/>
				<Transactionitem2/>
				<Transactionitem/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	transactionsContainer:{
		marginTop: 30,
		marginBottom: 150
	},
	titleContainer: {
	  flexDirection: 'row',
	  justifyContent: 'space-between'
	}
  });

export default Transactions
