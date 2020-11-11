import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {LoginScreenStyles} from './styles';
import {strings} from '../core/constants';
import {Input} from 'react-native-elements';

const LoginScreen = ({navigation}) => {
  const [pass, setPass] = useState(true);
  const [valid, setValid] = useState(false);

  const validateEmail = (mail) => {
    if (
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)$/.test(
        mail,
      )
    ) {
      return setValid(true);
    }
    return setValid(false);
  };

  return (
    <ScrollView style={LoginScreenStyles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={LoginScreenStyles.bckgColor}>
        <ImageBackground
          style={LoginScreenStyles.background}
          source={require('../../assets/images/backgroundPhoto.png')}>
          <Image
            style={LoginScreenStyles.logo}
            source={require('../../assets/images/logo.png')}
          />

          <View style={LoginScreenStyles.secondContainer}>
            <View style={LoginScreenStyles.titleContainer}>
              <Text style={LoginScreenStyles.title}>{strings.TitlePlaceholder}</Text>
              <Text style={LoginScreenStyles.subtitle}>
                {strings.subtitlePlaceholder}
              </Text>
            </View>

            <View style={LoginScreenStyles.inputContainer}>
              <Text style={LoginScreenStyles.emailText}>{strings.email}</Text>

              <Input
                onChangeText={(text) => validateEmail(text)}
                style={LoginScreenStyles.inputEmail}
                autoCapitalize="none"
                placeholder={strings.emailPlaceholder}
                rightIcon={
                  valid ? (
                    <Image
                      style={LoginScreenStyles.inputIcons}
                      source={require('../../assets/images/home.png')}
                    />
                  ) : null
                }
                inputContainerStyle={LoginScreenStyles.inputEmailOutside}
              />
            </View>

            <View style={LoginScreenStyles.inputContainer}>
              <Text style={LoginScreenStyles.passwordText}>{strings.pass}</Text>

              <Input
                style={LoginScreenStyles.inputPassword}
                secureTextEntry={pass}
                placeholder={strings.pass}
                autoCapitalize="none"
                autoCorrect={false}
                rightIcon={
                  <TouchableOpacity
                    style={LoginScreenStyles.inputIcons}
                    onPress={() => {
                      setPass(!pass);
                    }}>
                    <Image source={require('../../assets/images/eye.png')} />
                  </TouchableOpacity>
                }
                inputContainerStyle={LoginScreenStyles.inputPasswordOutside}
              />
            </View>
            <View>
              <TouchableOpacity
                style={LoginScreenStyles.button}
                onPress={() => {
                  navigation.navigate('HomeScreen');
                }}>
                <Text style={LoginScreenStyles.buttonText}>{strings.LOGIN}</Text>
              </TouchableOpacity>
            </View>
            <View style={LoginScreenStyles.registerContainer}>
              <TouchableOpacity>
                <Text style={LoginScreenStyles.forgotText}>
                  {strings.forgotPass}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={LoginScreenStyles.registerText}>
                  {strings.createAccount}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
