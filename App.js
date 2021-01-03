import React from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Login from './login.js'
import Dashboard from './dashboard.js'


const App = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} hideNavBar={true}/>
         <Scene key = "dashboard" component = {Dashboard} title = "Dashboard"  renderBackButton={()=><View/>} style={{textAlign: 'right'}} />
      </Scene>
   </Router>
)
export default App