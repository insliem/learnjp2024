import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import COLOR from '../../../constants/color';
import Header from './Header';
import Slider from './Slider';
import CategoryHome from './CategoryHome';

export default function HomeScreen() {
    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: COLOR.white }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                    <Header/>
                    <Slider/>
                    <CategoryHome/>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}