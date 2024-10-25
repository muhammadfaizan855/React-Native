// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack screenOptions={{
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="details" options={{title: 'my screen'}} />

//     </Stack>
//   );
// }



import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}







// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';

// export default function Layout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer>
//         <Drawer.Screen
//           name="index" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Home',
//             title: 'overview',
//           }}
//         />
//         {/* <Drawer.Screen
//           name="user/[id]" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'User',
//             title: 'overview',
//           }}
//         /> */}
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }








// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';

// export default function Layout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer>
//         <Drawer.Screen
//           name="index" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Home',
//             title: 'Home',
//           }}
//         />
//           <Drawer.Screen
//           name="profile" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Profile',
//             title: 'Profile',
//           }}
//         />
//         {/* <Drawer.Screen
//           name="user/[id]" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'User',
//             title: 'overview',
//           }}
//         /> */}
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }