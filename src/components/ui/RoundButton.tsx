import { View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native'
import { Colors } from '../../constant/colors'

type Props = {
  Icon: any,
  orangeIndicator?: boolean,
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const RoundButton = ({ Icon, orangeIndicator, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.buttonWrapper}>
      {orangeIndicator && <View style={style.notificationIndicator}></View>}
      {Icon}
      {/* <Bell color={Colors.SECONDARY} size={20} /> */}
    </TouchableOpacity>
  )
}

export default RoundButton

const style = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 100,
    elevation: 2,
  },
  notificationIndicator: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: Colors.PRIMARY,
    position: 'absolute',
    top: 8,
    right: 8
  },
})