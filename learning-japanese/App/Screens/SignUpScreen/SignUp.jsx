import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import COLOR from '../../../constants/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons, AntDesign , Ionicons, MaterialIcons } from '@expo/vector-icons';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmsetpassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (password !== confirmpassword) {
      setError('Mật khẩu không khớp. Vui lòng kiểm tra lại.');
      return;
    }

    console.log(`Đăng ký với số điện thoại: ${phone} và mật khẩu: ${password}`);
    setError('');
    navigation.navigate('Home');
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.white }}>
        <ScrollView> 
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              < AntDesign name="left" size={24} color={COLOR.primary} style={styles.back}/>
            </TouchableOpacity>
            <Image source={require('../../../assets/images/toystory.png')} style={styles.logo} />
            <Text style={styles.title}>Đăng ký tài khoản</Text>
            <TextInput
              style={[styles.input, styles.shadow]}
              placeholder="Số điện thoại"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <TextInput
              style={[styles.input, styles.shadow]}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              style={[styles.input, styles.shadow]}
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={true}
              value={confirmpassword}
              onChangeText={text => setConfirmsetpassword(text)}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity style={[styles.button, styles.shadow]} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>
            <Text style={styles.textwith}>- Hoặc đăng nhập với -</Text>
            <View style={styles.loginwith}>
              <TouchableOpacity style={[styles.shadow, styles.button1]}>
                <Image source={require('../../../assets/images/google.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.shadow, styles.button1]}>
                <Image source={require('../../../assets/images/facebook.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLOR.white,
  },
  back: {
    marginRight: 330,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    marginRight: 164,
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff', // đảm bảo nền trắng để đổ bóng rõ hơn
    borderWidth: 0.2,
    fontSize: 16,
    fontFamily: 'outfit-medium'
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 15
  },
  buttonText: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#a1a1a1',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  loginwith: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
  },
  button1: {
    width: '40%',
    height: 60,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15
  },
  textwith: {
    fontSize: 14,
    fontFamily: 'outfit',
    marginBottom: 10
  }
});

export default SignUpScreen;
