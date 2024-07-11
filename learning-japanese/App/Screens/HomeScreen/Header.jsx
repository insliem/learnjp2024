import { View, Text, Image } from 'react-native'
import React from 'react'
import COLOR from '../../../constants/color'
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function Header() {
    return (
        <View style={{
            paddingHorizontal: 20,
            backgroundColor: "#F02A4B",
            borderRadius: 18,
            paddingBottom: 20,
        }}>
            <View style={{
                marginTop: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                }}>
                    <Image
                        source={require('../../../assets/images/lotso.png')}
                        style={{ width: 50, height: 50, borderRadius: 22 }}
                    />
                    <View style={{
                        marginTop: 10
                    }}>
                        <Text style={{
                            color: COLOR.white,
                            fontSize: 14,
                            fontWeight: 600
                        }}>Chào mừng,</Text>
                        <Text style={{
                            color: COLOR.white,
                            fontSize: 22,
                            fontFamily: "outfit",
                            fontWeight: 600,
                            marginTop: 5,
                            marginBottom: 10
                        }}>Lotso</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={24} color="white" />
            </View>
            <View style={{
                marginTop: 10,
                marginBottom: 15,
                display: 'flex',
                flexDirection: 'row',
                gap: 10
            }}>
                <TextInput placeholder='Tìm kiếm' style={{
                    padding: 10,
                    paddingHorizontal: 10,
                    backgroundColor: COLOR.white,
                    borderRadius: 10,
                    width: '85%',
                    fontSize: 16
                }} />
                <FontAwesome name="search" size={24} color="#F02A4B"  style={{
                    backgroundColor: COLOR.white,
                    padding: 10,
                }}/>
            </View>
        </View>
    )
}
