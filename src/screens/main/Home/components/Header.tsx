import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native'
import { Colors } from '../../../../constant/colors'
import RoundButton from '../../../../components/ui/RoundButton'

const Header = () => {
  return (
    <View style={style.headerWrapper}>
      <Text style={style.nest}>Nest<Text style={style.board}>Board</Text></Text>
      <RoundButton Icon={<Bell color={Colors.SECONDARY} size={20} />} orangeIndicator />
    </View>
  )
}

export default Header

const style = StyleSheet.create({
  headerWrapper: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  nest: {
    color: Colors.SECONDARY,
    fontWeight: '700',
    fontSize: 30
  },
  board: {
    color: Colors.PRIMARY,
    fontWeight: '700',
    fontSize: 30
  }
})