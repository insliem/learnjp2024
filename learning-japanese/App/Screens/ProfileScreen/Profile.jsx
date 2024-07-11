import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import COLOR from '../../../constants/color';
import { FontAwesome, MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: COLOR.white }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 20,
                        marginBottom: 30
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: 22 }} />
                            <Text style={{ fontSize: 18, fontWeight: '600' }}>Thông tin tài khoản</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='logout' size={30} color={"#F02A4B"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../../assets/images/lotso.png')}
                            style={{
                                borderRadius: 100,
                                width: 110,
                                height: 110,
                                marginBottom: 10,
                                marginTop: 20
                            }} />
                        <Text style={{
                            fontSize: 22,
                            fontFamily: 'outfit-medium'
                        }}>
                            Nguyen Nguyen Trung
                        </Text>
                        <TouchableOpacity
                            style={{
                                marginTop: 15,
                                paddingVertical: 15,
                                paddingHorizontal: 25,
                                backgroundColor: COLOR.primary,
                                borderRadius: 14
                            }}
                            onPress={() => navigation.navigate("Editprofile")}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'outfit-medium',
                                color: COLOR.white
                            }}>
                                Chỉnh sửa thông tin
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        paddingHorizontal: 20,
                        marginTop: 25,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: 'outfit-medium',
                            marginBottom: 15
                        }}>
                            Thông tin cơ bản
                        </Text>
                        <View style={{
                            backgroundColor: COLOR.white,
                            borderRadius:16,
                            padding: 15,
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 6 },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesome name="user" size={24} color="#F02A4B" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Họ và tên</Text>
                                </View>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'outfit-medium'
                                }}>Nguyễn Nguyên Trung</Text>
                            </View>

                            <View style={{
                                height: 1,
                                backgroundColor: '#e3e3e3',
                                marginVertical: 5,
                            }} />

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 15,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: -3
                                }}>
                                    <MaterialCommunityIcons name="email" size={24} color="#F02A4B" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 5,
                                        color: '#b8b8b8'
                                    }}>Email</Text>
                                </View>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'outfit-medium'
                                }}>nguyentrung.2002@gmail.com</Text>
                            </View>

                            <View style={{
                                height: 1,
                                backgroundColor: '#e3e3e3',
                                marginVertical: 5,
                            }} />

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 15,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesome name="phone" size={24} color="#F02A4B" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Số điện thoại</Text>
                                </View>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'outfit-medium'
                                }}>0818099588</Text>
                            </View>

                            <View style={{
                                height: 1,
                                backgroundColor: '#e3e3e3',
                                marginVertical: 5,
                            }} />

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 15,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesome name="calendar" size={24} color="#F02A4B" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Ngày sinh</Text>
                                </View>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'outfit-medium'
                                }}>14/10/2002</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        paddingHorizontal: 20,
                        marginTop: 25,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: 'outfit-medium',
                            marginBottom: 15
                        }}>
                            Quản lý học tập
                        </Text>
                        <View style={{
                            backgroundColor: COLOR.white,
                            borderRadius:16,
                            padding: 15,
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 6 },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Ionicons name="time" size={24} color="#2bc704" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Thời gian học</Text>
                                </View>
                                <TouchableOpacity onPress={() => console.log('Time learning pressed')}>
                                    <FontAwesome name='angle-right' size={24} />
                                </TouchableOpacity>

                            </View>

                            {/* Divider */}
                            <View style={{
                                height: 1,
                                backgroundColor: '#e3e3e3',
                                marginVertical: 15,
                            }} />

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>
                                    <MaterialCommunityIcons name="timeline-check" size={24} color="#9d02c4" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Lịch sử học</Text>
                                </View>
                                <TouchableOpacity onPress={() => console.log('History learning pressed')}>
                                    <FontAwesome name='angle-right' size={24} />
                                </TouchableOpacity>
                            </View>

                            {/* Divider */}
                            <View style={{
                                height: 1,
                                backgroundColor: '#e3e3e3',
                                marginVertical: 15,
                            }} />

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <MaterialIcons name="cloud-done" size={24} color="#670180" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Kết quả các bài test</Text>
                                </View>
                                <TouchableOpacity onPress={() => console.log('Results pressed')}>
                                    <FontAwesome name='angle-right' size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        paddingHorizontal: 20,
                        marginTop: 25,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: 'outfit-medium',
                            marginBottom: 15
                        }}>
                            Năng lực
                        </Text>
                        <View style={{
                            backgroundColor: COLOR.white,
                            borderRadius:16,
                            padding: 15,
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 6 },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <MaterialCommunityIcons name="typewriter" size={24} color="#057ef0" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Viết bài giới thiệu</Text>
                                </View>
                                <TouchableOpacity onPress={() => console.log('Time learning pressed')}>
                                    <FontAwesome name='angle-right' size={24} />
                                </TouchableOpacity>

                            </View>

                            {/* Divider */}
                            <View style={{
                                height: 1,
                                backgroundColor: '#e3e3e3',
                                marginVertical: 15,
                            }} />

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>
                                    <FontAwesome name="video-camera" size={24} color="#e30215" />
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'outfit',
                                        marginLeft: 10,
                                        color: '#b8b8b8'
                                    }}>Quay videos</Text>
                                </View>
                                <TouchableOpacity onPress={() => console.log('History learning pressed')}>
                                    <FontAwesome name='angle-right' size={24} />
                                </TouchableOpacity>
                            </View>

                            {/* Divider */}
                            <View style={{
                                height: 1,
                                backgroundColor: '#e3e3e3',
                                marginVertical: 15,
                            }} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}
