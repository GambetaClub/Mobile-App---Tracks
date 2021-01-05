import React, { useContext } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)

  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Image
        style={styles.image}
        source={{ uri: 'https://i.ytimg.com/vi/i--JWB9GOhM/sddefault.jpg#404_is_fine' }}
      />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail', { _id: item._id })
              }}
            >
              <ListItem key={item._id}>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks',
}

const styles = StyleSheet.create({
  image: {
    height: 200,
  },
})

export default TrackListScreen
