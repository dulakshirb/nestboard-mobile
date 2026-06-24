import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { CircleStop, House, Landmark, MapPin } from 'lucide-react-native'
import SwitchButton from '../../../../components/ui/SwitchButton'
import { Colors } from '../../../../constant/colors'
import { PropertyType } from '../../../../types/common'

const PropertyFilterMenu = [
  {
    title: 'All',
    whiteIcon: <CircleStop color={'white'} />,
    grayIcon: <CircleStop color={Colors.GRAY} />
  },
  {
    title: 'House',
    whiteIcon: <House color={'white'} />,
    grayIcon: <House color={Colors.GRAY} />
  },
  {
    title: 'Villa',
    whiteIcon: <Landmark color={'white'} />,
    grayIcon: <Landmark color={Colors.GRAY} />
  },
  {
    title: 'Apartment',
    whiteIcon: <MapPin color={'white'} />,
    grayIcon: <MapPin color={Colors.GRAY} />
  }
]

type Props = {
  currentPropertyType: PropertyType,
  setCurrentPropertyType: (type: PropertyType) => void
}

const PropertyTypesList = ({ currentPropertyType, setCurrentPropertyType }: Props) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingVertical: 8 }}>
        {
          PropertyFilterMenu.map(i =>
            <SwitchButton
              key={i.title}
              selected={currentPropertyType == i.title}
              text={i.title}
              Icon={(currentPropertyType == i.title) ? i.whiteIcon : i.grayIcon}
              onPress={() => { setCurrentPropertyType(i.title as PropertyType) }} />
          )
        }
      </ScrollView>
    </View>
  )
}

export default PropertyTypesList