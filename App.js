import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
	const [todoId, setTodoId] = useState(null)
	const [todos, setTodos] = useState([])

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
		setTodos(prev => prev.filter(todo => todo.id !== id))
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
		content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>
	}

	return (
		<View style={{flex: 1}}>
			<Navbar title="Todo App!" />
			<View style={styles.container}>{content}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});
