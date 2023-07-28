import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SettingsScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.block}>
				<Text>Settings</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	block: {
		backgroundColor: "#FFF",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	}
});