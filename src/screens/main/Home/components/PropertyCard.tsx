import { View, Text, TouchableOpacity, ListRenderItemInfo, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { PropertyItem as PItem } from '../../../../types/properties';
import { style } from './PropertyList';
import LinearGradient from 'react-native-linear-gradient';
import { Star } from 'lucide-react-native';
import { Colors } from '../../../../constant/colors';

type Props = {
  dt: ListRenderItemInfo<PItem>
}

const PropertyCard = ({ dt }: Props) => {

  const nav: any = useNavigation();

  return (
    <TouchableOpacity onPress={() => {
      nav.navigate('PropertyDetails', {
        pid: dt.item.id
      })
    }} style={style.cardWrapper}>
      <ImageBackground
        style={style.card}
        source={{ uri: dt.item.image }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={style.gradient}
        >
          <View style={style.ratingWrapper}>
            <Star color={Colors.PRIMARY} />
            <Text style={style.ratingText}>{dt.item.rating}</Text>
          </View>
          <View style={style.cardContentWrapper}>
            <View>
              <Text style={style.propType}>{dt.item.type}</Text>
              <Text style={style.propTitle}>{dt.item.title}</Text>
              <Text style={style.propLocation}>{dt.item.city}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={style.propPrice}>{dt.item.price}</Text>
              <Text style={style.propDuration}>{dt.item.price ? "Month" : ""}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity >
  )
}

export default PropertyCard