import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/main/Home'
import Header from '../screens/main/Home/components/Header'
import TabScreens from './TabNavigation/TabScreens'
import PropertyDetails from '../screens/main/PropertyDetails'

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    }
    >
      <Stack.Screen name='Tab' component={TabScreens} />
      <Stack.Screen name='PropertyDetails' component={PropertyDetails} options={{
        headerShown: false,
        headerTransparent: true
      }} />
    </Stack.Navigator>
  )
}

export default AppStack