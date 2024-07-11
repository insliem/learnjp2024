import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileSreen from '../Screens/ProfileScreen/Profile';
import { Ionicons } from '@expo/vector-icons';
import CategoryScreen from '../Screens/CategoryScreen/Category';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#f5f2f2",
                alignItems: "center",
                justifyContent: "center",
                position: 'absolute',
                borderRadius: 16,
                bottom: 20,
                left: 20,
                right: 20,
                height: 70,
            }
        }}>
            <Tab.Screen
                name="Trang chủ"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            paddingTop: 10
                        }}>
                            <Ionicons
                                marginTop={10}
                                name={focused ? "home" : "home-outline"}
                                color={focused ? "#F02A4B" : "gray"}
                                size={24}
                            />
                            <Text style={{
                                color: focused ? "#F02A4B" : "gray",
                                fontSize: 12,
                                marginTop: 4,
                            }}>
                                Trang chủ
                            </Text>
                        </View>
                    ),
                    tabBarLabel: () => null, // Ẩn chữ "Trang chủ"
                }}
            />
            <Tab.Screen
                name="Danh Mục"
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            paddingTop: 10
                        }}>
                            <Ionicons
                                marginTop={10}
                                name={focused ? "menu" : "menu-outline"}
                                color={focused ? "#F02A4B" : "gray"}
                                size={24}
                            />
                            <Text style={{
                                color: focused ? "#F02A4B" : "gray",
                                fontSize: 12,
                                marginTop: 4,
                            }}>
                                Danh mục
                            </Text>
                        </View>
                    ),
                    tabBarLabel: () => null, // Ẩn chữ "Trang chủ"
                }}
            />
            <Tab.Screen
                name="Thông tin"
                component={ProfileSreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            paddingTop: 10
                        }}>
                            <Ionicons
                                marginTop={10}
                                name={focused ? "person" : "person-outline"}
                                color={focused ? "#F02A4B" : "gray"}
                                size={24}
                            />
                            <Text style={{
                                color: focused ? "#F02A4B" : "gray",
                                fontSize: 12,
                                marginTop: 4,
                            }}>
                                Thông tin
                            </Text>
                        </View>
                    ),
                    tabBarLabel: () => null
                }}
            />
        </Tab.Navigator>
    );
}
