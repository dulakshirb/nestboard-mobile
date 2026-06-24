import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchInput from '../../../../components/ui/SearchInput'
import RoundButton from '../../../../components/ui/RoundButton'
import { SlidersHorizontal } from 'lucide-react-native'
import { Colors } from '../../../../constant/colors'

const SearchContainer = () => {
  return (
    <View style={style.container}>
      <View style={style.searchInputWrapper}><SearchInput /></View>
      <RoundButton Icon={<SlidersHorizontal color={Colors.SECONDARY} size={20} />} />
    </View>
  )
}

export default SearchContainer

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12
  },
  searchInputWrapper: {
    flex: 1
  }
})