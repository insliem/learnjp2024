import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Course() {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <FontAwesomeIcon icon={faChevronLeft} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={[styles.headerText, { textAlign: 'center' }]}>Bài học</Text>
          </View>
          <View style={styles.searchContainer}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
            <TextInput
              placeholder='Tìm kiếm'
              style={styles.input}
              placeholderTextColor='#b3b3b3'
            />
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hiragana')}>
              <Image
                source={require('../../../assets/images/Hiragana.png')}
                style={styles.imgcard}
              />
              <Text style={styles.cardText}>Hiragana</Text>
              <Text style={styles.cardText1}>Hiragana là một trong ba bảng chữ cái chính của tiếng Nhật, được sử dụng chủ yếu cho các từ gốc Nhật và ngữ pháp</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Katakana')}>
              <Image
                source={require('../../../assets/images/alphabet.jpg')}
                style={styles.imgcard}
              />
              <Text style={styles.cardText}>Katakana</Text>
              <Text style={styles.cardText1}>Katakana là bảng chữ cái tiếng Nhật, chủ yếu được dùng để viết từ mượn, tên riêng, và từ ngữ khoa học</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Kanji')}>
              <Image
                source={require('../../../assets/images/kanji.png')}
                style={styles.imgcard}
              />
              <Text style={styles.cardText}>Kanji</Text>
              <Text style={styles.cardText1}>Kanji là các ký tự Hán được sử dụng trong tiếng Nhật, biểu thị ý nghĩa và có nguồn gốc từ tiếng Trung Quốc</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Vocabulary')}>
              <Image
                source={require('../../../assets/images/vocabulary.png')}
                style={styles.imgcard}
              />
              <Text style={styles.cardText}>Từ vựng</Text>
              <Text style={styles.cardText1}>Từ vựng trong tiếng Nhật bao gồm các từ và cụm từ, bao gồm cả từ gốc Nhật và từ mượn từ các ngôn ngữ khác. Việc học từ vựng là cơ sở quan trọng để nâng cao kỹ năng ngôn ngữ Nhật của bạn</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    color: '#000',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    textAlign: 'center',
    flex: 1,
    marginLeft: -14,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
  },
  searchIcon: {
    marginRight: 10,
    color: '#b3b3b3',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
    color: '#000',
  },
  cardContainer: {
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingBottom:20,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imgcard: {
    width: 160,
    height: 120,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    marginRight: 'auto',
    marginBottom: 5,
  },
  cardText1: {
    fontSize: 14,
    marginRight: 'auto',
    color: '#b3b3b3',
  },
});
