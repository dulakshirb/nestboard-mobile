import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Bell, Search } from 'lucide-react-native';

const ScreenA = () => {

  const nav: any = useNavigation();

  const [text, setText] = useState("");

  return (
    <View>
      <Text style={{ fontSize: 25 }}>ScreenA</Text>

      <TextInput onChangeText={setText} value={text} style={{
        borderWidth: 1,
        width: '100%',
        fontSize: 20
      }} />

      <Button title='Goto B' onPress={() => {
        // nav.navigate('B')
        nav.push('B', {
          txt: text,
          name: 'Dulakshi'
        })
      }} />

      <Search color={'red'} size={100}/>
      
    </View>
  )
}

export default ScreenA