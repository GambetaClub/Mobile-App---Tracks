import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Title from '../components/Title'

import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <Spacer>
        <Title text={'Ready to leave?'} />
      </Spacer>
      <Spacer>
        <Spacer />
      </Spacer>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name='account-key' size={24} color='black' />,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 180,
  },
})

export default AccountScreen
