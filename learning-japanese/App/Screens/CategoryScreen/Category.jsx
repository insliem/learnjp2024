import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Category() {
    const navigation = useNavigation();

    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <FontAwesomeIcon icon={faChevronLeft} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={[styles.headerText, { textAlign: 'center' }]}>Danh mục</Text>
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
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('')}>
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
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('')}>
                            <Image
                                source={require('../../../assets/images/practice.jpg')}
                                style={styles.imgcard}
                            />
                            <Text style={styles.cardText}>Luyện tập</Text>
                            <Text style={styles.cardText1}>Xem tất cả</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('')}>
                            <Image
                                source={require('../../../assets/images/achivement.jpg')}
                                style={styles.imgcard}
                            />
                            <Text style={styles.cardText}>Thành tích</Text>
                            <Text style={styles.cardText1}>Xem tất cả</Text>
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
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backButton: {
        padding: 10,
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'outfit-medium',
        textAlign: 'center',
        flex: 1,
        marginLeft:-39,
    },
    headerLink: {
        fontSize: 14,
        fontFamily: 'outfit-medium',
        color: '#F02A4B',
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
