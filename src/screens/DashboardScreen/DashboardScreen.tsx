import { Alert, StyleSheet, Text, View } from 'react-native';
import { CircleButton } from '../../components/CircleButton';

export const DashboardScreen = () => {

	const handklePressCircleButton = () => {
		Alert.alert("Press circle")
	}

	return (
		<View style={styles.container}>
			<View style={styles.block}>
				<Text>Dashboard</Text>
			</View>
			<View style={styles.block}>
				<Text>TEXT</Text>
			</View>
			<CircleButton onPress={handklePressCircleButton}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		position: "relative"
	},
	block: {
		backgroundColor: "#FFF",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	}
});