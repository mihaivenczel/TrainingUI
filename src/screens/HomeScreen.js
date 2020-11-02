import React from 'react';
import {View, Text, Button} from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="go to login" onPress={() => {navigation.navigate("LoginScreen")}} />
    </View>
  );
};

export default HomeScreen;
