import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { Audio } from 'expo-av';
import COLOR from '../../../constants/color';

const hiraganaDataInitial = [
    { front: 'あ', back: 'a', isFlipped: false, animation: new Animated.Value(0), sound: require('../../../assets/sounds/a.mp3') },
    { front: 'い', back: 'i', isFlipped: false, animation: new Animated.Value(0), sound: require('../../../assets/sounds/i.mp3') },
    { front: 'う', back: 'u', isFlipped: false, animation: new Animated.Value(0), sound: require('../../../assets/sounds/u.mp3') },
    { front: 'え', back: 'e', isFlipped: false, animation: new Animated.Value(0), sound: require('../../../assets/sounds/e.mp3') },
    { front: 'お', back: 'o', isFlipped: false, animation: new Animated.Value(0), sound: require('../../../assets/sounds/o.mp3') },
    { front: 'か', back: 'ka', isFlipped: false, animation: new Animated.Value(0), sound: require('../../../assets/sounds/ka.mp3') },
    { front: 'き', back: 'ki', isFlipped: false, animation: new Animated.Value(0), sound: require('../../../assets/sounds/ki.mp3') },
];

const playSound = async (soundFile) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
};

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
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                zIndex: 1,
                            }}
                            onPress={() => playSound(item.sound)}
                        >
                            <FontAwesomeIcon icon={faVolumeHigh} size={42} color="#1e3050" />
                        </TouchableOpacity>
                        <Animated.View
                            style={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                borderRadius: 15,
                                backfaceVisibility: 'hidden',
                                position: 'absolute',
                                transform: [
                                    { perspective: 1000 },
                                    {
                                        rotateY: item.animation.interpolate({
                                            inputRange: [0, 180],
                                            outputRange: ['0deg', '180deg'],
                                        }),
                                    },
                                ],
                            }}
                        >
                            <Text style={{ fontSize: 68, textAlign: 'center', color: '#333', opacity: item.isFlipped ? 0 : 1 }}>
                                {item.front}
                            </Text>
                            <Text style={{ fontSize: 22, marginTop: 10, fontFamily: 'outfit-medium', color: '#666', opacity: item.isFlipped ? 0 : 1 }}>
                                Chữ cái
                            </Text>
                        </Animated.View>
                        <Animated.View
                            style={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f2f2f2',
                                borderRadius: 15,
                                backfaceVisibility: 'hidden',
                                position: 'absolute',
                                transform: [
                                    { perspective: 1000 },
                                    {
                                        rotateY: item.animation.interpolate({
                                            inputRange: [0, 180],
                                            outputRange: ['180deg', '360deg'],
                                        }),
                                    },
                                ],
                            }}
                        >
                            <Text style={{ fontSize: 68, textAlign: 'center', color: '#333', opacity: item.isFlipped ? 1 : 0 }}>
                                {item.back}
                            </Text>
                            <Text style={{ fontSize: 22, marginTop: 10, fontFamily: 'outfit-medium', color: '#666', opacity: item.isFlipped ? 1 : 0 }}>
                                Phiên âm
                            </Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );

    const handleFlip = (index) => {
        const newData = [...hiraganaData];
        const item = newData[index];
        const toValue = item.isFlipped ? 0 : 180;

        Animated.timing(item.animation, {
            toValue,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            newData[index].isFlipped = !item.isFlipped;
            setHiraganaData(newData);
        });
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
                        {currentTab === 'chucai' ? renderChuCaiContent() : renderMauCauContent()}
                    </View>
                </Modalize>
            </ImageBackground>
        </GestureHandlerRootView>
    );
}
