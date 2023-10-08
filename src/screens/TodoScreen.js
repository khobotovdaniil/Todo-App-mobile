import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";

export const TodoScreen = ({goBack, todo, onRemove}) => {
	return (
		<View>
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<Button title='Ред.' />
			</AppCard>

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
						onPress={() => onRemove(todo.id)} 
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
	card: {
		marginBottom: 20,
		padding: 15,
	},
	button: {
		width: '45%',
	},
	title: {
		fontSize: 20,
	}
})