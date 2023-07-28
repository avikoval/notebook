import { StyleSheet } from 'react-native';
import { DashboardScreen } from './DashboardScreen';
import { SettingsScreen } from './SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const Navigation = () => {

	return (
		<Tab.Navigator
			initialRouteName="Dashboard"
			screenOptions={{
				tabBarActiveTintColor: 'red',
			}}
			sceneContainerStyle={styles.container}
		>
			<Tab.Screen
				name="Dashboard"
				component={DashboardScreen}
				options={{
					tabBarLabel: 'Dashboard',
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons name="home" color={color} size={20} />
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons name="cog" color={color} size={20} />
					),
				}}
			/>
		</Tab.Navigator>
	)
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EEE',
	},
});