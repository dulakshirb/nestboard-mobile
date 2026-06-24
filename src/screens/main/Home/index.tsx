import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import LocationContainer from './components/LocationContainer'
import SearchContainer from './components/SearchContainer'
import PropertyTypesList from './components/PropertyTypesList'
import { PropertyType } from '../../../types/common'
import SecondaryHeading from '../../../components/ui/SecondaryHeading'
import PropertyList from './components/PropertyList'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {

  const [currentPropertyType, setCurrentPropertyType] = useState<PropertyType>('All')

  return (
    <SafeAreaView style={style.homeContainer}>
      <LocationContainer />
      <SearchContainer />
      <PropertyTypesList
        currentPropertyType={currentPropertyType}
        setCurrentPropertyType={setCurrentPropertyType}
      />
      <View style={style.titleContainer}>
        <SecondaryHeading text='Popular' />
        <Text style={style.smallText}>See all</Text>
      </View>
      <PropertyList />
    </SafeAreaView>
  )
}

export default Home