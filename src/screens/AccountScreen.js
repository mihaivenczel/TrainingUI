import React from 'react';
import {View, TouchableOpacity, ScrollView, Image, Text} from 'react-native';
import {AccountScreenStyles as styles} from './styles';
import {genStars} from '../core/helpers';
import {icon as profilepic} from '../../assets/images';

const AccountScreen = ({navigation}) => {
  const mockData = {
    name: 'Eddie bremmer',
    stars: '4',
    opinions: '10',
    location: 'Los angeles, CA',
    profilepic,
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.chevronContainer}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.chevronBack}
          source={require('../../assets/images/goback.png')}
        />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <View style={styles.leftSection}>
          <Text style={styles.name}>{mockData.name} </Text>
          <View style={styles.starContainer}>
            {genStars(5, styles.star, styles.star)}
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>{mockData.location}</Text>
          </View>
        </View>
        <View style={styles.RightSection}>
          <Image style={styles.profilePicture} source={mockData.profilepic} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
