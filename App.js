import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { THEME } from './src/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	});
	const [todoId, setTodoId] = useState(null)
	const [todos, setTodos] = useState([])


	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const addTodo = title => {

		setTodos(prev => [
			...prev,
			{
				id: Date.now().toString(),
				title
			}
		])
	}

	const removeTodo = id => {
		const todo = todos.find(t => t.id === id)
		Alert.alert(
			'Удаление элемента',
			`Вы уверены что хотите удалить ${todo.title}?`,
			[
				{
					text: 'Отмена',
					style: 'canсel',
				},
				{
					text: 'Удалить',
					style: 'destructive',
					onPress: () => {
						setTodoId(null)
						setTodos(prev => prev.filter(todo => todo.id !== id))
					}
				},
			],
			{ cancelable: false },
		)
	}

	const updateTodo = (id, title) => {
		setTodos(old => old.map(todo => {
			if (todo.id === id) {
				todo.title = title
			}
			return todo
		}))
	}

	let content = (
		<MainScreen
			todos={todos}
			addTodo={addTodo}
			removeTodo={removeTodo}
			openTodo={setTodoId}
		/>
	)

	if (todoId) {
		const selectedTodo = todos.find(todo => todo.id === todoId)
		content = (
			<TodoScreen
				onRemove={removeTodo}
				goBack={() => setTodoId(null)}
				todo={selectedTodo}
				onSave={updateTodo}
			/>
		)
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<Navbar title="Todo App!" />
			<View style={styles.container}>{content}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: THEME.PADDING_HORIZONTAL,
		paddingVertical: 20,
	},
});
