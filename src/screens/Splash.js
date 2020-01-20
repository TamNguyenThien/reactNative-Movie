import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SplashScreen (props) {
  const { navigation } = props
  const { navigate } = navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('Intro')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👻Movies</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D12734'
  },
  title: {
    color: 'white'
  }
})
