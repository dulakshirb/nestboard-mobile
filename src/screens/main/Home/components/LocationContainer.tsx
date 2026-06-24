import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../../constant/colors'

const LocationContainer = () => {
  return (
    <View style={style.container}>
      <View style={style.avatarWrapper}>
        <Text style={style.avatarText}>JD</Text>
      </View>
      <View>
        <Text style={style.location}>Location</Text>
        <Text style={style.userLocation}>Colombo, Sri Lanka</Text>
      </View>
    </View>
  )
}

export default LocationContainer

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  avatarWrapper: {
    width: 48,
    height: 48,
    backgroundColor: Colors.AVATAR_BG,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  avatarText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18
  },
  location: {
    color: Colors.GRAY,
    fontSize: 12
  },
  userLocation: {
    color: Colors.SECONDARY,
    fontWeight: '600',
    fontSize: 16
  }
})