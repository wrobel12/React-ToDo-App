import React from 'react';
import { View } from 'react-native';
import Task from '../components/Todo'


const ToDoListContainer = ({ todos }) => (
  <View>
    {todos.map((todo, index) => (
    <Task title={todo.text} key={index} id={todo.id} checked={todo.checked} />
    ))}
  </View>
)


export default ToDoListContainer
