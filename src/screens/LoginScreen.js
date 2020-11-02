import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {LoginScreenStyles} from './styles';

const LoginScreen = ({navigation}) => {
  const [pass, setPass] = useState(true);

  return (
    <View style={LoginScreenStyles.mainContainer}>
      <ImageBackground
        style={LoginScreenStyles.background}
        source={require('../../assets/images/backgroundPhoto.png')}
      />
      <Image
        style={LoginScreenStyles.logo}
        source={require('../../assets/images/logo.png')}
      />

      <View style={LoginScreenStyles.secondContainer}>
        <View style={LoginScreenStyles.titleContainer}>
          <Text style={LoginScreenStyles.title}>Welcome</Text>
          <Text style={LoginScreenStyles.subtitle}>
            Login for enjoy findhome
          </Text>
        </View>
        <View style={LoginScreenStyles.inputContainer}>
          <Text style={LoginScreenStyles.emailText}>Email</Text>
          <Image
            style={LoginScreenStyles.inputIcons}
            source={require('../../assets/images/home.png')}
          />
          <TextInput
            style={LoginScreenStyles.inputEmail}
            autoCapitalize="none"
            placeholder="email@email.com"
          />
          <Text style={LoginScreenStyles.passwordText}>Password</Text>
          <TouchableOpacity
            onPress={() => {
              setPass(!pass);
            }}>
            <Image
              style={LoginScreenStyles.inputIcons}
              source={require('../../assets/images/eye.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={LoginScreenStyles.inputPassword}
            secureTextEntry={pass}
            placeholder="password"
            autoCapitalize="none"
          />
        </View>
        <View>
          <TouchableOpacity
            style={LoginScreenStyles.button}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <Text style={LoginScreenStyles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={LoginScreenStyles.registerContainer}>
          <TouchableOpacity>
            <Text style={LoginScreenStyles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={LoginScreenStyles.registerText}>
              Create new account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
