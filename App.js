import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {View} from 'react-native';


const App = () => {
  return (
    <View style={{flex: 1}}>
        <MainNavigator />
    </View>
  );
};
export default App;
