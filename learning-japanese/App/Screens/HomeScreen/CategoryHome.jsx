import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function CategoryHome() {
  const navigation = useNavigation();

  const renderCard = (title, navigateTo) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(navigateTo)}>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Danh mục</Text>
        <Text style={styles.headerLink}>Xem tất cả</Text>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Course')}>
          <Image
            source={require('../../../assets/images/alphabet.jpg')}
            style={styles.imgcard}
          />
          <Text style={styles.cardText}>Bảng chữ cái</Text>
          <Text style={styles.cardText1}>Xem tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Course')}>
          <Image
            source={require('../../../assets/images/course.jpg')}
            style={styles.imgcard}
          />
          <Text style={styles.cardText}>Bài học</Text>
          <Text style={styles.cardText1}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Course')}>
          <Image
            source={require('../../../assets/images/practice.jpg')}
            style={styles.imgcard}
          />
          <Text style={styles.cardText}>Luyện tập</Text>
          <Text style={styles.cardText1}>Xem tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Course')}>
          <Image
            source={require('../../../assets/images/achivement.jpg')}
            style={styles.imgcard}
          />
          <Text style={styles.cardText}>Thành tích</Text>
          <Text style={styles.cardText1}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  headerText: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
  headerLink: {
    fontSize: 14,
    fontFamily: 'outfit-medium',
    color: '#F02A4B',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
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
    width: 90,
    height: 90,
    marginBottom: 15,
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
    color: '#b3b3b3'
  }
});
