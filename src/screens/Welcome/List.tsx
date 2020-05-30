import React from 'react';
import { View } from 'react-native'
import AddTodo from '../../containers/AddTodo'
import TodoList from '../../components/TodoList'


const List = () => (
    <View>
    <AddTodo />
    <TodoList />
    </View>

)

export default List