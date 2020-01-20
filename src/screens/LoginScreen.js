import React, { useContext } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import bgImg from '../assets/images/bg.jpg'
import { CTX } from '../tools/context'
import LoginSchema from '../validation/Login'
import { Formik } from 'formik'

export default function LoginScreen (props) {
  const { navigation } = props
  const { navigate } = navigation

  const authContext = useContext(CTX)
  const { _authenticate } = authContext

  async function _onLogin (values) {
    const { email, password } = values
    const accessToken = email + password

    _authenticate(accessToken)
    console.log(accessToken)
    navigate('Dashboard')
  }

  function _navigateForgot () {
    navigate('Forgot')
  }

  function _navigateRegister () {
    navigate('Register')
  }
  return (
    // <View>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
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
            <Formik
              initialValues={{ email: 'example@gmail.com', password: '123' }}
              validationSchema={LoginSchema}
              onSubmit={values => {
                _onLogin(values)
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched
              }) => (
                <View>
                  <View style={{ marginBottom: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 18 }}>Email</Text>
                    <TextInput
                      onChangeText={handleChange('email')}
                      placeholder='enter your email'
                      keyboardType='email-address'
                      onBlur={handleBlur('email')}
                      value={values.email}
                      style={[
                        styles.textStyle,
                        { borderBottomColor: '#707070', borderBottomWidth: 2, paddingHorizontal: 5, paddingVertical: 8, fontSize: 16, fontFamily: 'Roboto-Regular' }
                      ]} />
                  </View>
                  {errors.email && touched.email ? (
                    <Text style={styles.error}>{errors.email}</Text>
                  ) : null}
                  <View style={{ marginBottom: 10, marginTop: 10 }}>
                    <Text style={{ fontSize: 18 }}>Mật Khẩu</Text>
                    <TextInput
                      onChangeText={handleChange('password')}
                      placeholder='password'
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry
                      style={[
                        styles.textStyle,
                        { borderBottomColor: '#707070', borderBottomWidth: 2, paddingHorizontal: 5, paddingVertical: 8, fontSize: 16, fontFamily: 'Roboto-Regular' }
                      ]} />
                  </View>
                  {errors.password && touched.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : null}
                  <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={handleSubmit}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                      colors={['#001F45', '#45003D']} style={{ width: 208, borderRadius: 27, paddingHorizontal: 30, paddingVertical: 10 }}>
                      <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular', fontSize: 17, color: '#fff' }}>Đăng nhập</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
    // </View>

  )
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
