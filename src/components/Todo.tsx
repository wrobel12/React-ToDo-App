import React from 'react'
import { connect } from 'react-redux'
import { CheckBox } from 'react-native-elements'
import { toggleTodo } from '../actions/types/index'


const Task = ({title, checked, id, dispatch}) => {
  return (
    <CheckBox  title={title} checked={checked} onPress={() => {dispatch(toggleTodo(id))}}/>
  )
}

export default connect()(Task)
