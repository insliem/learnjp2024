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
            <ImageBackground
                source={require('../../../assets/images/startScreen.png')}
                style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center' }} // Đặt width và height là 100%
                resizeMode="cover" // Đặt chế độ resize cho ảnh
            >
                <View>
                    <TouchableOpacity style={{
                        width: '80%',
                        height: 60,
                        backgroundColor: COLOR.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginLeft: 40,
                        marginTop: 600,
                    }}
                    onPress={() => navigation.navigate("Login")}

                    >
                        <Text style={{
                            color: COLOR.white,
                            fontSize: 18,
                            fontWeight: '600',
                        }}>Bắt đầu nào!!!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </GestureHandlerRootView>
    )
}
