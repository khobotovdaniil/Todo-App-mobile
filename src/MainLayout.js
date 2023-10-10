import React, { useState, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";

import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { Navbar } from './components/Navbar';
import { THEME } from './theme';
import { TodoContext } from "./context/todo/todoContext";

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
  const [todoId, setTodoId] = useState(null)
  // const [todos, setTodos] = useState([])

  // const addTodo = title => {

  //   setTodos(prev => [
  //     ...prev,
  //     {
  //       id: Date.now().toString(),
  //       title
  //     }
  //   ])
  // }

  // const removeTodo = id => {
  //   const todo = todos.find(t => t.id === id)
  //   Alert.alert(
  //     'Удаление элемента',
  //     `Вы уверены что хотите удалить ${todo.title}?`,
  //     [
  //       {
  //         text: 'Отмена',
  //         style: 'canсel',
  //       },
  //       {
  //         text: 'Удалить',
  //         style: 'destructive',
  //         onPress: () => {
  //           setTodoId(null)
  //           setTodos(prev => prev.filter(todo => todo.id !== id))
  //         }
  //       },
  //     ],
  //     { cancelable: false },
  //   )
  // }

  // const updateTodo = (id, title) => {
  //   setTodos(old => old.map(todo => {
  //     if (todo.id === id) {
  //       todo.title = title
  //     }
  //     return todo
  //   }))
  // }

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
    <View style={{ flex: 1 }} >
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});