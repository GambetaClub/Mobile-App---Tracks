import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { track_name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext)
  const [saveTrack] = useSaveTrack()

  return (
    <>
      <View style={styles.input}>
        <Input placeholder='Enter name' value={track_name} onChangeText={changeName} />
      </View>
      {recording ? (
        <Spacer>
          <Button title='Stop' onPress={stopRecording} />
        </Spacer>
      ) : (
        <Spacer>
          <Button title='Start Recording' onPress={startRecording} />
        </Spacer>
      )}
      {!recording && locations.length ? (
        <Spacer>
          <Button title='Save Recording' onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  )
}
const styles = StyleSheet.create({
  input: {
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: -17,
  },
})

export default TrackForm
