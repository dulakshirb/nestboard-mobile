import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { style } from './PropertyList';
import Skeleton from '../../../../components/ui/Skeleton';

export const PropertyItemSkeleton = () => {

  const nav: any = useNavigation();

  return (
    <Skeleton height={320} width={'100%'} style={{
      justifyContent: 'flex-end'
    }} >
      <Skeleton style={style.ratingWrapper} width={60} />
      <View style={
        {
          flexDirection: 'row',
          padding: 24,
          justifyContent: 'space-between'
        }
      }>
        <View style={{ gap: 8 }}>
          <Skeleton height={20} width={80} backgroundColor={'#cbcbcb'} />
          <Skeleton height={25} width={200} backgroundColor={'#cbcbcb'} />
          <Skeleton height={15} width={80} backgroundColor={'#cbcbcb'} />
        </View>
        <View style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end', gap: 8
        }}>
          <Skeleton height={30} width={100} backgroundColor={'#cbcbcb'} />
          <Skeleton height={20} width={80} backgroundColor={'#cbcbcb'} />
        </View>
      </View>
    </Skeleton>
  )
}

export default PropertyItemSkeleton