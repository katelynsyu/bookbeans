import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

//import { signIn, signOut } from './actions/index.js'
import BooksOwned from './../../components/BooksOwned.js'
import Sidebar from './components/Sidebar.js'
import Search from './../../components/search.js'
import UserLanding from './../../components/UserLanding.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Router>
          {/* Literally all of this was just copied in from 
            somewhere else. Copy stuff and then delete stuff. 
            this won't work as is*/}
          <Sidebar />
          
          <Routes>
            <Route path="/" exact element={<Search />} /> 
            <Route path="/create" element={<BooksOwned />} />
            <Route path="/user/:id" element={<UserLanding />} />
            
          </Routes>
          
        </Router>
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