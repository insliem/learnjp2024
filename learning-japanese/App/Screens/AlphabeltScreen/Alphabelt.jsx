import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import COLOR from '../../../constants/color';

const hiraganaDataInitial = [
    { front: 'あ', back: 'a', isFlipped: false },
    { front: 'い', back: 'i', isFlipped: false },
    { front: 'う', back: 'u', isFlipped: false },
    { front: 'え', back: 'e', isFlipped: false },
    { front: 'お', back: 'o', isFlipped: false },
    { front: 'か', back: 'ka', isFlipped: false },
    { front: 'き', back: 'ki', isFlipped: false },
];

export default function Alphabelt() {
    const [hiraganaData, setHiraganaData] = useState(hiraganaDataInitial);

    const [currentTab, setCurrentTab] = useState('chucai');

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    const renderChuCaiContent = () => (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{
                marginTop: 20,
                marginBottom: 20,
                paddingVertical: 10,
            }}
        >
            {hiraganaData.map((item, index) => (
                <View
                key={index}
                style={{
                    width: 390,  
                    paddingHorizontal: 25,  
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        padding: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',  
                        height: 300,
                        backgroundColor: '#f2f2f2',
                        ...(!item.isFlipped ? { elevation: 10 } : {}),
                    }}
                    onPress={() => handleFlip(index)}
                >
                    <Animated.View
                        style={{
                            transform: [
                                { perspective: 1000 },
                                {
                                    rotateY: item.isFlipped ? '180deg' : '0deg',
                                },
                            ],
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: item.isFlipped ? '#f2f2f2' : '#f2f2f2',
                            borderRadius: item.isFlipped ? 15 : 0,
                            scaleX: item.isFlipped ? -1 : 1, 
                        }}
                    >
                        <Text style={{ fontSize: 68, textAlign: 'center', color: '#333', transform: [{ scaleX: item.isFlipped ? -1 : 1 }] }}>
                            {item.isFlipped ? item.back : item.front}
                        </Text>
                        <Text style={{ fontSize: 22, marginTop: 10,fontFamily: 'outfit-medium', color: '#666', transform: [{ scaleX: item.isFlipped ? -1 : 1 }] }}>
                            {item.isFlipped ? 'Phiên âm' : 'Chữ cái'}
                        </Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
            ))}
        </ScrollView>
    );

    const handleFlip = (index) => {
        const newData = [...hiraganaData];
        newData[index] = { ...newData[index], isFlipped: !newData[index].isFlipped };
        setHiraganaData(newData);
    };

    const renderMauCauContent = () => (
        <View style={{
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <Text style={{ color: '#333', fontSize: 20 }}>Đây là nội dung của tab Mẫu câu</Text>
        </View>
    );

    return (
        <GestureHandlerRootView>
            <ImageBackground
                source={require('../../../assets/images/alphabelt.jpg')}
                style={{ width: '100%', height: '100%' }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        paddingHorizontal: 20,
                    }}
                ></View>
                <Text
                    style={{
                        color: '#404040',
                        fontSize: 28,
                        fontFamily: 'outfit-medium',
                        marginTop: 120,
                        marginHorizontal: 20,
                    }}
                >
                    Bảng Hiragana
                </Text>

                <Modalize
                    handleStyle={{
                        marginTop: 15,
                        backgroundColor: COLOR.white,
                    }}
                    modalStyle={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                    alwaysOpen={630}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                    panGestureEnabled={false}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 10,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    backgroundColor:
                                        currentTab === 'chucai' ? COLOR.primary : COLOR.white,
                                    height: 40,
                                    width: 110,
                                    alignItems: 'center',
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    marginRight: 10,
                                    borderWidth: 0.2
                                }}
                                onPress={() => handleTabChange('chucai')}
                            >
                                <Text
                                    style={{
                                        fontWeight: 600,
                                        fontSize: 18,
                                        color:
                                            currentTab === 'chucai' ? COLOR.white : COLOR.primary,
                                    }}
                                >
                                    Chữ cái
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor:
                                        currentTab === 'maucau' ? COLOR.primary : COLOR.white,
                                    height: 40,
                                    width: 110,
                                    alignItems: 'center',
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    borderWidth: 0.2
                                }}
                                onPress={() => handleTabChange('maucau')}
                            >
                                <Text
                                    style={{
                                        fontWeight: 600,
                                        fontSize: 18,
                                        color:
                                            currentTab === 'maucau' ? COLOR.white : COLOR.primary,
                                    }}
                                >
                                    Mẫu câu
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Hiển thị nội dung tương ứng với tab */}
                        {currentTab === 'chucai' ? renderChuCaiContent() : null}
                        {currentTab === 'maucau' ? renderMauCauContent() : null}
                    </View>
                </Modalize>
            </ImageBackground>
        </GestureHandlerRootView>
    );
}
