import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Header from '../../screens/main/Home/components/Header';
import Home from '../../screens/main/Home';
import Favorite from '../../screens/main/Favorite';
import Search from '../../screens/main/Search';
import PropertyMap from '../../screens/main/PropertyMap';
import Profile from '../../screens/main/Profile';
import { Heart, House, Map, User, Search as Sh } from 'lucide-react-native';
import { Colors } from '../../constant/colors';
import { BottomTabView } from './BottomTabView';

const Tab = createBottomTabNavigator();

export const Tabs = [
  {
    defaultIcon: <House size={24} color={Colors.GRAY} />,
    selectedIcon: <House size={24} color={Colors.WHITE} />,
  },
  {
    defaultIcon: <Sh size={24} color={Colors.GRAY} />,
    selectedIcon: <Sh size={24} color={Colors.WHITE} />,
  },
  {
    defaultIcon: <Heart size={24} color={Colors.GRAY} />,
    selectedIcon: <Heart size={24} color={Colors.WHITE} />,
  },
  {
    defaultIcon: <Map size={24} color={Colors.GRAY} />,
    selectedIcon: <Map size={24} color={Colors.WHITE} />,
  },
  {
    defaultIcon: <User size={24} color={Colors.GRAY} />,
    selectedIcon: <User size={24} color={Colors.WHITE} />,
  }
]

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false
      }}
      tabBar={(props) => <BottomTabView {...props} />}

    >
      <Tab.Screen name='Home' options={{
        header: Header,
        headerShown: true
      }} component={Home} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Favorite' component={Favorite} />
      <Tab.Screen name='Map' component={PropertyMap} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator >
  )
}

export default TabScreens