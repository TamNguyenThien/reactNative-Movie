import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler'

export default class LoginScreen extends Component {
  render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/images/logo1.png')}
                style={{ width: 150, height: 150 }}
                resizeMode='contain'
              />
              <Text style={[styles.textStyle, { fontSize: 26 }]}>Movies</Text>
            </View>
            <View style={{ marginTop: 45 }}>
              <Text style={[styles.textStyle, { fontSize: 26, textAlign: 'center' }]}> Đăng nhập </Text>
            </View>
            <View style={{ marginBottom: 20, marginTop: 30 }}>
              <Text>Email</Text>
              <TextInput
                placeholder='example@gmail.com'
                keyboardType='email-address'
                style={[
                  styles.textStyle,
                  {borderBottomColor: '#707070', borderBottomWidth: 2, paddingHorizontal: 5, paddingVertical: 8, fontSize: 16, fontFamily: 'Roboto-Regular' }
                  ]} />
            </View>
            <View style={{ marginBottom: 10, marginTop: 10 }}>
              <Text>Mật Khẩu</Text>
              <TextInput
                placeholder='password'
                secureTextEntry
                style={[
                  styles.textStyle,
                  {borderBottomColor: '#707070', borderBottomWidth: 2, paddingHorizontal: 5, paddingVertical: 8, fontSize: 16, fontFamily: 'Roboto-Regular' }
                  ]} />
            </View> 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
              <Text>Go to HomeScreen</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#001F45'
  },
  textInputStyle: {
    borderBottomColor: '#707070',
    borderBottomWidth: 2,
    paddingHorizontal: 5, 
    paddingVertical: 8, 
    fontSize: 16, 
    fontFamily: 'Roboto-Regular'
  }
})
