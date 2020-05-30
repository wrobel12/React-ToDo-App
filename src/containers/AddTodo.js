import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { addTodo } from '../actions/types/index'

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
    alignSelf: "center"
  },
  viewStyle: {
    marginTop: 40,
    backgroundColor: 'pink',
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 20
  }
})



const AddTodo  = ({ dispatch} ) => {

  

  const [inputValue, setInputValue] = useState('');

  const handleItemChange = ev => {
    setInputValue(ev);
    // console.log(inputValue)
    
  }

  const handleSubmit= () => {
        dispatch(addTodo(inputValue));
        setInputValue('')
  }



  return (

      <ScrollView>
        <View style={styles.viewStyle}>
       <Text style={styles.text}>Add some awesome tasks</Text>
        <Input 
        placeholder='...'
        rightIcon={  <Icon
          name='pencil'
          size={24}
          color='black'
        />}
        value={inputValue}
        onChangeText={handleItemChange}
        containerStyle={{marginBottom: 15}}
         />
       <Button
          title="Submit"
          color="#F08080"
          onPress={handleSubmit}
          />
          </View>
      </ScrollView>
  )
  }

export default connect()(AddTodo)
