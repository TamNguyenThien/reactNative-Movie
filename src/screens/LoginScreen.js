import React, { useState } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import bgImg from '../assets/images/bg.jpg'
import AsyncStorage from '@react-native-community/async-storage'

function LoginScreen (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onLogin () {
    const accessToken = email + password
    await AsyncStorage.setItem('userToken', accessToken)
    props.navigation.navigate('Dashboard')
  }
  return (
    <ImageBackground source={bgImg} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 21 }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/images/logo1.png')}
              style={{ width: 100, height: 100 }}
              resizeMode='contain'
            />
            <Text style={[styles.textStyle, { fontSize: 26 }]}>Movies</Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={[styles.textStyle, { fontSize: 26, textAlign: 'center' }]}> Đăng nhập </Text>
          </View>
          <View style={{ marginBottom: 20, marginTop: 30 }}>
            <Text style={{ fontSize: 18 }}>Email</Text>
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder='example@gmail.com'
              keyboardType='email-address'
              style={[
                styles.textStyle,
                { borderBottomColor: '#707070', borderBottomWidth: 2, paddingHorizontal: 5, paddingVertical: 8, fontSize: 16, fontFamily: 'Roboto-Regular' }
              ]} />
          </View>
          <View style={{ marginBottom: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>Mật Khẩu</Text>
            <TextInput
              onChangeText={text => setPassword(text)}
              placeholder='password'
              secureTextEntry
              style={[
                styles.textStyle,
                { borderBottomColor: '#707070', borderBottomWidth: 2, paddingHorizontal: 5, paddingVertical: 8, fontSize: 16, fontFamily: 'Roboto-Regular' }
              ]} />
          </View>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={onLogin}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#001F45', '#45003D']} style={{ width: 208, borderRadius: 27, paddingHorizontal: 30, paddingVertical: 10 }}>
              <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular', fontSize: 17, color: '#fff' }}>Đăng nhập</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
export default LoginScreen
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
