import { Pressable, StyleSheet } from 'react-native';
import { CircleButtonProps } from './types';

export const CircleButton = (props: CircleButtonProps)=> {
	const { onPress } = props;

	return (
		<Pressable
			onPress={onPress}
			style={({pressed}) => [{backgroundColor: pressed ? '#6d78fc' : '#5b67f5'}, styles.button]}
		/>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 75,
		height: 75,
		borderRadius: 50,
		position: "absolute",
		bottom: 0,
		right: 0,
		margin: 20,
	},
});
