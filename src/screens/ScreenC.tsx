import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ScreenC = () => {

  const nav: any = useNavigation();

  return (
    <View style={{ backgroundColor: 'yellow', flex: 1 }}>
      <Text>ScreenC</Text>
      {/* Go back to previous screen using this method will remove current screen from the stack same as default back button on the header */}
      <Button title='Go Back' onPress={() => {
        nav.goBack();
      }} />
    </View>
  )
}

export default ScreenC