import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import DetailsScreen from './screens/DetailsScreen'
import LoginScreen from './screens/LoginScreen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen,
  DetailsScreen: DetailsScreen
}, {
  defaultNavigationOptions: {
    headerShown: false
  }
})

const BottomNav = createBottomTabNavigator({
  HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Trang Chủ'
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Cá Nhân'
    }
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'HomeStack') {
        iconName = 'home'
      } else if (routeName === 'ProfileScreen') {
        iconName = 'user-circle'
      }
      return <FontAwesome5 name={iconName} size={19} color={tintColor} />
    }
  }),
  tabBarOptions: {
    activeTintColor: '#001F45',
    inactiveTintColor: '#5A7B8D',
    style: { paddingVertical: 10 },
    labelStyle: {
      fontFamily: 'Roboto-Regular',
      fontSize: 10
    }
  }
}
)

const SwitchNav = createSwitchNavigator({
  LoginScreen: LoginScreen,
  Dashboard: BottomNav
})

const MainContainer = createAppContainer(SwitchNav)

export default MainContainer
