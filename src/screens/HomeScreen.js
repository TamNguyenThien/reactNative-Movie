import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
  render () {
    return (
      <View>
        <Text> Home Screen </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsScreen')}>
          <Text>Go to DetailsScreen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
