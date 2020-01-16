import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'
import ProfileScreen from './screens/ProfileScreen'
import MainContainer from './routes'
export default class App extends Component {
  render () {
    return (
      // <SafeAreaView>
      //   <Text> Main </Text>
      //   <ProfileScreen />
      // </SafeAreaView>
      <MainContainer />
    )
  }
}
