import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../../constants/color';

export default function Start() {
    const navigation = useNavigation()
    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: COLOR.white }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground 
                    source={require('../../../assets/images/start.jpg')} 
                    style={{ flex: 1 }} // Đặt style cho ImageBackground
                    resizeMode="cover" // Optional: Đặt chế độ resize cho ảnh
                />
            </SafeAreaView>
        </GestureHandlerRootView>   
    )
}
