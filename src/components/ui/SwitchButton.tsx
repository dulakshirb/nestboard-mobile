import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { Colors } from '../../constant/colors'

type Props = {
  Icon: any,
  text: string,
  selected?: boolean,
  onPress: () => void
}

const SwitchButton = ({ Icon, text, selected, onPress }: Props) => {

  const style_ = useMemo(() => style(selected), [selected])

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style_.wrapper}
    >
      {Icon}
      <Text
        style={style_.buttonText} > {text}
      </Text >
    </TouchableOpacity >
  )
}

export default SwitchButton

const style = (selected?: boolean) => StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderRadius: 100,
    gap: 8,
    paddingHorizontal: 24,
    height: 48,
    alignItems: 'center',
    elevation: 1,
    backgroundColor: selected ? Colors.PRIMARY : 'white'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: selected ? 'white' : Colors.GRAY
  }
})