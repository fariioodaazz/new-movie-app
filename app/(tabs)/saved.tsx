import { View, Text ,Image} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


const saved = () => {
  return (
    <View className='flex-1 bg-primary px-10'>
          <View className='flex-col flex-1 items-center justify-center gap-5'>
            <Image source={icons.save} className='size-10' tintColor="#fff"/>
            <Text className='text-gray-500 text-base'>saved</Text>
          </View>
        </View>
  )
}

export default saved