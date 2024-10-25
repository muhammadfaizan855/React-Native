import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

interface UserData {
    name: string;
    email: string;
    phone: string;
    website: string;
}



const SingleDetail = () => {
   
    const { id } = useLocalSearchParams<{id : string}>();
    const [userData , setUserData] = useState<UserData | null>(null)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => {
            // console.log(json); 
            setUserData(json) 
        }).catch((err)=>{
         console.log(err);
         
        })
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Single User</Text>
            {userData ? (
                <>
                    <Text style={styles.detail}>Name: {userData.name}</Text>
                    <Text style={styles.detail}>Email: {userData.email}</Text>
                    <Text style={styles.detail}>Phone: {userData.phone}</Text>
                    <Text style={styles.detail}>Website: {userData.website}</Text>
                </>
            ) : (
                <Text style={styles.detail}>Loading...</Text>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
  
container: {
    padding: 16,
},
header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
},
detail: {
    fontSize: 16,
    marginBottom: 4,
},
});

export default SingleDetail
