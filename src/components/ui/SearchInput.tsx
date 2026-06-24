import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Search } from 'lucide-react-native'
import { Colors } from '../../constant/colors'

const SearchInput = () => {
  return (
    <View style={style.inputWraper}>
      <Search color={Colors.GRAY} size={20} />
      <TextInput placeholder='Search your place' multiline={true} style={style.textInputText} />
    </View>
  )
}

export default SearchInput

const style = StyleSheet.create({
  inputWraper: {
    height: 48,
    width: '100%',
    borderRadius: 100,
    paddingHorizontal: 14,
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 12
  },
  textInputText: {
    fontSize: 16,
    color: Colors.GRAY,
    marginRight: 14,
  }
})