import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const ScreenB = () => {

  const nav: any = useNavigation();

  const route: any = useRoute();
  const valueFromPrevScreen = route.params.txt;
  const myName = route.params.name;

  return (
    <View style={{ gap: 10 }}>
      <Text style={{ fontSize: 25 }}>ScreenB</Text>
      <Button title='Goto C' onPress={() => {
        nav.navigate('C')
      }} />
      {/* Go back to previous screen using this method won't remove current screen from the stack, it will keep on the memory */}
      <Button title='Go back to A' onPress={() => {
        nav.Navigate('A');
      }} />
      <Text style={{
        marginVertical: 30,
        fontSize: 30,
        color: 'blue'
      }}>{valueFromPrevScreen}</Text>
      <Text style={{
        marginVertical: 30,
        fontSize: 30,
        color: 'red'
      }}>{myName}</Text>
    </View>
  )
}

export default ScreenB