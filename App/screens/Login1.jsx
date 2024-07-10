import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import COLORS from '../constants/colors';

const Login1 = ({ navigation }) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <ScrollView>
                    <View style={{ flex: 1, paddingHorizontal: 20, marginBottom: 30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>X</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Đăng Nhập</Text>
                            <View style={{ width: 22 }} />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Image
                            source={require('../assets/google.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </View>
                    <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: '500', marginBottom: 20 }}>
                            Chào Mừng
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/user.png')}
                            style={{ width: 30, height: 30, marginRight: 10 }}
                        />
                        <Text style={{ fontSize: 18, fontWeight: 500}}>
                            trung@gmail.com
                        </Text>
                    </View>

                    <View style={{ paddingHorizontal: 20, paddingTop: 65 }}>
                        <TextInput
                            placeholder="Nhập mật khẩu của bạn"
                            placeholderTextColor="#030303"
                            style={{
                                paddingHorizontal: 20,
                                paddingTop: 20,
                                paddingBottom: 20,
                                fontSize: 16,
                                borderColor: '#030303',
                                borderWidth: 1,
                                borderRadius: 8,
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 105 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#1655ba' }}>Bạn quên mật khẩu?</Text>
                            <TouchableOpacity
                                style={{
                                    marginLeft: 20,
                                    backgroundColor: '#0b57cf',
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    borderRadius: 25, 
                                }}
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text style={{ color: '#fff', fontSize: 16 }}>BẮT ĐẦU</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default Login1;
