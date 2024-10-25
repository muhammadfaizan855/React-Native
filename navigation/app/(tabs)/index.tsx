import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router';



interface Item {
    name: string,
    id: number
}

const Home = () => {
 
    const [userData , setUserData] = useState<null | []>([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            // console.log(json); 
            setUserData(json) 
        }).catch((err)=>{
         console.log(err);
         
        })
    }, [])

    return (
    
    <SafeAreaView>
      <Text style={styles.header}>All Users</Text>
     
    <ScrollView>

    {userData && userData.map((item : Item)=>{
      return <View key={item.id} style={styles.item}>
             <Text style={styles.itemName}>{item.name}</Text>      
            <TouchableOpacity style={styles.Button}>
              <Link href={{
                pathname: '/[id]',
                params: { id: item.id }, }}>
                  More Details User
              </Link>
            </TouchableOpacity>
         </View>
      })}

      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 8,
},
itemName: {
    fontSize: 18,
    fontWeight: '500',
},
item: {
  padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
},
  linkText: {
    color: 'blue',
    marginTop: 5,
},
Button: {
  alignItems: 'center',
  backgroundColor: '#ffff',
  padding: 15,
  marginVertical: 5,
  marginHorizontal : 30,
},

});



export default Home