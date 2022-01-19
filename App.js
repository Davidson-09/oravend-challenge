
import React from 'react';
import TopView from './src/components/TopView';
import BalanceView from './src/components/BalanceView';
import QuickAccessTab from './src/components/QuickAccessTab';
import {background} from './src/assets/color';
import Transactions from './src/components/Transactions';
import BottomNav from './src/components/BottomNav';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {

	return(
		<SafeAreaView>
			<ScrollView style={styles.appContainer}>
				<TopView/>
				<BalanceView/>
				<QuickAccessTab/>
				<Transactions/>
			</ScrollView>
			<BottomNav/>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 30,
	backgroundColor: background,
	width: '100%',
	paddingTop: 30
  }
});

export default App;
