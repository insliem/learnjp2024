import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Slider() {
  const navigation = useNavigation();
  const images = [
    { id: '1', src: require('./../../../assets/images/hira.jpg') },
    { id: '2', src: require('./../../../assets/images/kata.jpg') },
    { id: '3', src: require('./../../../assets/images/kanji.jpg') }
  ];

  const handleImagePress = (id) => {
    navigation.navigate('Alphabelt')
  };

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontFamily: "outfit-medium", marginBottom: 10 }}>
        Danh sách các bảng chữ cái
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map(image => (
          <TouchableOpacity key={image.id} onPress={() => handleImagePress(image.id)}>
            <Image
              source={image.src}
              style={{ 
                width: 220, 
                height: 140, 
                marginRight: 10, 
                borderRadius: 18, 
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
