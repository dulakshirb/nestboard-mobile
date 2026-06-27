import { View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Star } from 'lucide-react-native'
import { Colors } from '../../../../constant/colors'
import { PropertyAPI } from '../../../../api/properties'
import { PropertyItem as PItem } from '../../../../types/properties'
import { useNavigation } from '@react-navigation/native'
import PropertyItem from './PropertyItem'

const PropertyList = () => {

  const [properties, setProperties] = useState<PItem[]>([])

  useEffect(() => {
    PropertyAPI.getAllProperties().then((data) => {
      setProperties(data)
      // console.log("Property Data: ", data)
    }).catch(() => { })
  }, [])

  return (
    <View style={style.container}>
      <FlatList
        style={style.flatList}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        showsVerticalScrollIndicator={false}
        data={properties}
        keyExtractor={(data) => data.id}
        renderItem={(dt) => <PropertyItem dt={dt} />
        }
      />
    </View >
  )
}

export default PropertyList

export const style = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {
    flex: 1
  },
  cardWrapper: {
    borderRadius: 16,
    height: 320,
    width: '100%',
    overflow: 'hidden'
  },
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  cardContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    alignItems: 'flex-end',
  },
  propType: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 0.6
  },
  propTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  propLocation: {
    color: 'white',
  },
  propPrice: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  propDuration: {
    color: 'white',
  },
  ratingWrapper: {
    backgroundColor: 'white',
    height: 36,
    position: 'absolute',
    right: 16,
    top: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderRadius: 100
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600'
  }
})