import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../../constants/color';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
    const [name, setName] = useState('Nguyen Nguyen Trung');
    const [email, setEmail] = useState('trung@gmail.com');
    const [phone, setPhone] = useState('0818099588');
    const [birthdate, setBirthdate] = useState('14/10/2002');
    const [address, setAddress] = useState('123');
    const [occupation, setOccupation] = useState('');
    const navigation = useNavigation();

    const handleSave = () => {
        Alert.alert(
            'Xác nhận lưu thông tin',
            'Bạn có chắc chắn muốn lưu thông tin và quay lại trang chủ?',
            [
                {
                    text: 'Hủy',
                    onPress: () => console.log('Hủy'),
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý',
                    onPress: () => {
                        Alert.alert('Thông tin đã được lưu!');
                        navigation.navigate('Home');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <GestureHandlerRootView style={styles.root}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.header}>
                        <View style={styles.headerTitleContainer}>
                            <Text style={styles.headerTitle}>Sửa thông tin tài khoản</Text>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../../../assets/images/lotso.png')}
                            style={styles.profileImage}
                        />
                        <Text style={{
                            fontSize: 22,
                            marginBottom: 20,
                            fontFamily: 'outfit-medium'
                        }}>
                            Nguyen Nguyen Trung
                        </Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Họ và tên</Text>
                            <TextInput
                                style={[styles.textInput, styles.shadow]}
                                value={name}
                                onChangeText={setName}
                                placeholder="Họ và tên"
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Email</Text>
                            <TextInput
                                style={[styles.textInput, styles.shadow]}
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Số điện thoại</Text>
                            <TextInput
                                style={[styles.textInput, styles.shadow]}
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="Số điện thoại"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Ngày sinh</Text>
                            <TextInput
                                style={[styles.textInput, styles.shadow]}
                                value={birthdate}
                                onChangeText={setBirthdate}
                                placeholder="Ngày sinh"
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Địa chỉ</Text>
                            <TextInput
                                style={[styles.textInput, styles.shadow]}
                                value={address}
                                onChangeText={setAddress}
                                placeholder="Địa chỉ"
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Nghề nghiệp</Text>
                            <TextInput
                                style={[styles.textInput, styles.shadow]}
                                value={occupation}
                                onChangeText={setOccupation}
                                placeholder="Nghề nghiệp"
                            />
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                            <Text style={styles.saveButtonText}>Lưu thông tin</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLOR.white,

    },
    safeArea: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 80,
        paddingHorizontal: 20,
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    headerTitleContainer: {
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    profileContainer: {
        alignItems: 'center',
    },
    profileImage: {
        borderRadius: 100,
        width: 110,
        height: 110,
        marginBottom: 10,
        marginTop: 30,
    },
    infoContainer: {
        width: '100%',
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    textInput: {
        width: '100%',
        height: 60,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderWidth: 0.2,
        fontSize: 15,
        fontFamily: 'outfit',
        color: '#6b6a6a'
    },
    shadow: {
        shadowColor: '#a1a1a1',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    saveButton: {
        width: '100%',
        height: 60,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 15
    },
    saveButtonText: {
        color: COLOR.white,
        fontSize: 18,
        fontWeight: '600',
    },
});
