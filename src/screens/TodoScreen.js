import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";

export const TodoScreen = ({goBack, todo}) => {
	return (
		<View>
			<Text>{todo.title}</Text>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button 
						title="Назад" 
						onPress={goBack} 
						color={THEME.GREY_COLOR}
					/>
				</View>
				<View style={styles.button}>
					<Button 
						title="Удалить" 
						color={THEME.DANGER_COLOR}
						onPress={() => console.log('To Remove')} 
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: '45%',


	}
})