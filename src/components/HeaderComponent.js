import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HeaderComponent extends Component {
  render () {
    return (
      <View style={{ paddingHorizontal: 11, paddingVertical: 12 }}>
        <Text style={{ fontSize: 28, fontFamily: 'Roboto-Bold', color: '#001F45' }}> Trang chủ </Text>
      </View>
    )
  }
}
