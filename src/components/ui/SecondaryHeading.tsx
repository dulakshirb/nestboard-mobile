import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
  text: string
}

const SecondaryHeading = ({ text }: Props) => {
  return (
    <Text style={style.text}>{text}</Text>
  )
}

export default SecondaryHeading

const style = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 24
  }
})