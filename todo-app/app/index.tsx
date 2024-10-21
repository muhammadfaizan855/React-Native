import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Modal, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';


const Home = () => {
  
  const [input, setInput] = useState(''); 
  const [todo, setTodo] = useState([])
  const [modalVisible , setmodalVisible] = useState(false) 
  const [updateVal , setUpdateVal] = useState('')
  const [index , setIndex] = useState('')

  const addTodo = ()=>{
    console.log(input);
    todo.push(input)
    setTodo([...todo])
    setInput('')
  }

  const deleteBtn = (index : number)=>{
    console.log('delete button' , index);
    todo.splice(index , 1);
    setTodo([...todo])
    
  }


  const editBtn = (index : number)=>{
    // console.log(updateVal , index);
    todo.splice(index , 1 , updateVal) 
    setTodo([...todo]);
    setmodalVisible(false)
  }

  return (
    <SafeAreaView style={styles.bgLight}>
      
      <Text style={{
        textAlign: 'center',
        marginVertical: 40,
        fontSize: 30,
        fontWeight: 'bold'
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
        renderItem={({item , index})=>{
          return <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
           
            {/* Delete Button */}

          <TouchableOpacity style={styles.listBtn} onPress={()=> deleteBtn(index)}>
          <Text>Delete</Text>
          </TouchableOpacity>
            
            {/* Edit Button */}

          <TouchableOpacity style={styles.editBtn} onPress={() => {
              setIndex(index)
              setUpdateVal(todo[index])
              setmodalVisible(true)
            }}>
          <Text>Edit</Text>
          </TouchableOpacity>
          
          </View>
        }}
        keyExtractor={(item , index) => index.toString()}
      /> : <Text style={{
      ...styles.title,
        margin: 20,
      }}>No Data Found...</Text>}


    
    {/*  modal */}


    <View style={styles.centeredView}>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>update Todo</Text>

           {/* Input Field Modal */}

          <TextInput
          style={styles.UpdateInputField} 
          onChangeText={setUpdateVal}
          value={updateVal}
          />
         
         {/* Update Button Modal */}

            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={()=> editBtn(index)}>
              <Text style={styles.textStyle}>Update Todo</Text>
            </Pressable>
           
           {/* Cancel Button Modal */}

          <Pressable
        style={[styles.buttonModal, styles.buttonOpen]}
        onPress={() => setmodalVisible(false)}>
        <Text style={styles.textStyle}>Cancel</Text>
      </Pressable>

      
          </View>
        </View>
      </Modal>
      
    </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ // Changed to styles

  bgLight: {
    flex: 1,
    backgroundColor: '#AFCBFF',
    justifyContent: 'center', 
  },

  inputField: {
    height: 40,
    margin: 20,
    borderWidth: 3,
    padding: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#A282DE',
    padding: 15,
    marginHorizontal : 100,
  },

  listBtn: {
    alignItems: 'center',
    backgroundColor: '#',
    padding: 15,
    marginVertical: 5,
    marginHorizontal : 30,
  },
  
  editBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    marginVertical: 5,
    marginHorizontal : 30
  },

  item: {
    backgroundColor: '#7393',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 25,
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    marginVertical: 5 
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginVertical: 10 
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },


  UpdateInputField:{
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    // padding: 10,
  }

});

export default Home;
