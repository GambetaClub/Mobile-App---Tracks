import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text h3>Account Screen</Text>
      </Spacer>
      <Button title='Sign Out' onPress={signout} />
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name='account-key' size={24} color='black' />,
}

const styles = StyleSheet.create({})

export default AccountScreen
