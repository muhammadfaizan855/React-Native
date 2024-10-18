import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';


const Home = () => {
  
  const [input, setInput] = useState(''); 
  const [todo, setTodo] = useState([])

  const addTodo = ()=>{
    console.log(input);
    todo.push(input)
    setTodo([...todo])
    setInput('')
  }

  return (
    <SafeAreaView>
      
      <Text style={{
        textAlign: 'center',
        marginVertical: 40,
        fontSize: 20,
        fontStyle: 'italic',
      }}>Todo App</Text>
      
      
     {/*  Input value */}
      
      <TextInput
        style={styles.inputField} 
        onChangeText={setInput}
        value={input}
        placeholder="Enter todo"
      />

      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      

       {/* Render Todo   */}

      {todo.length > 0 ?  <FlatList
        data={todo}
        renderItem={({item})=>{
          return <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        }}
        keyExtractor={(item , index) => index.toString()}
      /> : <Text style={{
      ...styles.title,
        margin: 20,
      }}>No Data Found...</Text>}

     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ // Changed to styles
  inputField: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    marginHorizontal : 100,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});

export default Home;
