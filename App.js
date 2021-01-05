import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { setNavigator } from './src/navigationRef'
import { LogBox } from 'react-native'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { Ionicons } from '@expo/vector-icons'

LogBox.ignoreLogs([
  'Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).',
])

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <Ionicons name='list' size={24} color='black' />,
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
})

switchNavigator.navigationOptions = {
  backgroundColor: 'black',
}

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator)
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}
