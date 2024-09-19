import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { images } from '../constants'; // Ensure this path is correct
import { CustomButton } from '@/components';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="bg-primary h-full" >
        <ScrollView contentContainerStyle={{ heigth: '100%' }}>
          <View className="w-full justify-center items-center h-full px-4">
            <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
            <Image source={images.cards} className="max-w--[380px] w-full h-[300px]" resizeMode="contain"/>
            <View className="relative mt-5 overflow-visible">
                <Text className="text-3xl text-white font-bold text-center" >
                  Discover Endless Possibilities with
                  <Text className="text-secondary-200"> Aora </Text>
                </Text>
                <Image source={images.path} className="w-[136px] h-[15px] absolute-bottom-2 -right-[198px]" resizeMode="contain" />
            </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center"> Where creativity meets innovation: embar on a journey of limitless exploration with Aora</Text>
            <CustomButton  title="Continue with Email" handlePress={()=>{}} containerStyles="w-full mt-7" />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
