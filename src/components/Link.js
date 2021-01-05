import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const Link = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.text}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#005EB8',
    fontSize: 15,
  },
})

export default withNavigation(Link)
