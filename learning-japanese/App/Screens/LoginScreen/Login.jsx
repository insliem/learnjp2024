import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import COLOR from '../../../constants/color';

export default function Login({navigation}) {
    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: COLOR.white  }}>
            <SafeAreaView style={{ flex: 1}}>
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
                            source={require('../../../assets/images/toystory.png')}
                            style={{ width: 60, height: 60 }}
                        />
                    </View>
                    <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: '500', marginBottom: 20 }}>
                            Đăng nhập
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 26 }}>
                            Sử dụng tài khoản Google của bạn. Bạn cũng sẽ đăng nhập vào các dịch vụ của Google trong các ứng dụng của mình.
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
                        <TextInput
                            placeholder="Nhập số điện thoại để đăng nhập"
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
                    <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ color: '#1254cf' }}>Bạn quên số điện thoại ?</Text>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 80 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={{ color: '#1655ba' }}>Tạo tài khoản</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    marginLeft: 20,
                                    backgroundColor: '#0b57cf',
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    borderRadius: 25,
                                }}
                                onPress={() => navigation.navigate('Login1')}
                            >
                                <Text style={{ color: '#fff', fontSize: 16 }}>BẮT ĐẦU</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}