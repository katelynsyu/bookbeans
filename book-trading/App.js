import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';

import AddBookScreen from './src/screens/AddBookScreen/AddBookScreen.js';
const Stack = createStackNavigator();

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    OpenSans_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // const [loading, setLoading] = useState(true)
  // const [user, setUser] = useState(null)

  // if (loading) {	
  //   return (	
  //     <Text>SDF</Text>
  //   );
  // }

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection('users');
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data()
  //           setLoading(false)
  //           setUser(userData)
  //         })
  //         .catch((error) => {
  //           setLoading(false)
  //         });
  //     } else {
  //       setLoading(false)
  //     }
  //   });
  // }, []);
  
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       { user ? (
  //         <Stack.Screen name="Home">
  //           {props => <HomeScreen {...props} extraData={user} />}
  //         </Stack.Screen>
  //       ) : (
  //         <>
  //           <Stack.Screen name="Login" component={LoginScreen} />
  //           <Stack.Screen name="Registration" component={RegistrationScreen} />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <View>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <AddBookScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});