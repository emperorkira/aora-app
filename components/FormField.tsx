import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View className={`space-y-2 w-full ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className=" w-full h-16 px-4 bg-black-100 border-2 border-slate-600 rounded-2xl focus:border-secondary">
        
      </View>
    </View>
  )
}
