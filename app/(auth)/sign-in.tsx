import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { images } from '../../constants'
import { FormField } from '@/components'


export default function SignIn () {
  
  const initialValues = {
    email:'',
    password:''
  }

  const [form, setForm] = useState(initialValues)

  return (
    <>
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full justify-start items-center
           h-full px-4 min-h-[85vh] my-6" >
            <Image source={images.logo} resizeMode="contained" className="w-[115px] h-[35px]"/>
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold" > Log in to Aora </Text>
            <FormField 
              title="Email" 
              value={form.email} 
              handleChangeText={(e: string)=> setForm({...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField 
              title="Password" 
              value={form.password} 
              handleChangeText={(e: string)=> setForm({...form, password: e})}
              otherStyles="mt-7"
              keyboardType="password"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
    </>
  )
}
