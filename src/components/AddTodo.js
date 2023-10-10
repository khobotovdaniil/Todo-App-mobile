import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	const pressHandler = () => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
			Keyboard.dismiss()
		} else {
			Alert.alert('Название дела не может быть пустым')
		}
	}

	return (
		<View style={styles.wrapper}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder="Введите дело..."
				autoCorrect={false}
				autoCapitalize="none"
			/>
			<AntDesign.Button onPress={pressHandler} name="pluscircleo" backgroundColor={THEME.MAIN_COLOR}>
				Добавить
			</AntDesign.Button>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	input: {
		width: '60%',
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: THEME.MAIN_COLOR,
	}

})
