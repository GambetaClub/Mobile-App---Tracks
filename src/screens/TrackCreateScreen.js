//import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { Ionicons } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext)
  const callback = useCallback((location) => {
    addLocation(location, recording)
  })
  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Map />
      {err ? <Text>Please enable location services </Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <Ionicons name='add' size={24} color='black' />,
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
