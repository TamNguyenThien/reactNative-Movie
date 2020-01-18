import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'
import ProfileScreen from './screens/ProfileScreen'
import MainContainer from './routes'
import Context from '../src/tools/context'
export default class App extends Component {
  render () {
    return (
      <Context>
        <MainContainer />
      </Context>
    )
  }
}
