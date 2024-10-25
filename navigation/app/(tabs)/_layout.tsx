// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Tabs } from 'expo-router';

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
//       <Tabs.Screen
//         name="Home"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="Setting"
//         options={{
//           title: 'Setting',
//           tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }






import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'white'
          },
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={28} color="black" />,
        }}
      />
     
      <Tabs.Screen
        name="profiles"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={'black'} />,
        }}
      />
      

       <Tabs.Screen
        name="settings"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={'black'} />,
        }}
      />
    </Tabs>
  );
}