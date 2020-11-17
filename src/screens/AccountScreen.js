import React from 'react';
import {View, TouchableOpacity, ScrollView, Image, Text} from 'react-native';
import {AccountScreenStyles as styles} from './styles';
import {genStars} from '../core/helpers';
import {
  icon as profilepic,
  locationpin,
  dollarsign,
  personIcon,
  chevronBack,
} from '../../assets/images';
import Svg, {Circle} from 'react-native-svg';
import PostAccount from './components/PostAccount';
import {colors} from '../core/themes';

const size = 35;
const strokeWidth = 11;
const radius = size - strokeWidth;
const circumference = 2 * Math.PI * radius;

const AccountScreen = ({navigation}) => {
  const fillLevel = (60 * circumference) / 100;
  const mockData = {
    name: 'Eddie bremmer',
    stars: '4',
    opinions: '(10)',
    location: 'Los angeles, CA',
    post: 'Post',
    profilepic,
    locationpin,
    findHomeTitle: 'FindHome Gold',
    dollarsign,
    personIcon,
    chevronBack,
    estadistics: 'Estadistics',
    clients: '09 clients',
    moreInfo: 'View more info',
    information: 'Information',
    complete: 'Complete',
    sales: '10 sales',
    level: '30',
    levelText: 'Level',
    LoremIpsum:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.chevronContainer}
        onPress={() => navigation.goBack()}>
        <Image style={styles.chevronBack} source={mockData.chevronBack} />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <View style={styles.leftSection}>
          <Text style={styles.name}>{mockData.name} </Text>
          <View style={styles.starContainer}>
            {genStars(4, styles.star, styles.star)}
            <Text style={styles.opinionsText}>{mockData.opinions}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Image style={styles.locationPin} source={mockData.locationpin} />
            <Text style={styles.locationText}>{mockData.location}</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Image style={styles.profilePicture} source={mockData.profilepic} />
        </View>
      </View>

      <View style={styles.profileContentContainer}>
        <View style={styles.findHomeContainer}>
          <Text style={styles.homeTitle}>{mockData.findHomeTitle}</Text>
          <ScrollView style={styles.homeContainerScroll} horizontal={true}>
            <View style={styles.homeCardContainer}>
              <View>
                <Text style={styles.homeCardTitle}>{mockData.estadistics}</Text>
              </View>
              <View style={styles.homeSection}>
                <View style={styles.leftHomeSection}>
                  <Svg width={70} height={70} style={{alignSelf: 'center'}}>
                    <View style={styles.levelTexts}>
                      <Text style={styles.level}>{mockData.level}</Text>
                      <Text style={styles.levelText}>{mockData.levelText}</Text>
                    </View>
                    <Circle
                      stroke={colors.circleEmpty}
                      fill="none"
                      r={radius}
                      cx={35}
                      cy={35}
                      strokeWidth={strokeWidth}
                      strokeDasharray={`${circumference}`}
                    />

                    <Circle
                      stroke={colors.circleFill}
                      fill="none"
                      r={radius}
                      cx={35}
                      cy={35}
                      strokeWidth={strokeWidth}
                      strokeDasharray={`${fillLevel} ${
                        circumference - fillLevel
                      }`}
                      strokeDashoffset={circumference / 6}
                    />
                  </Svg>
                </View>
                <View style={styles.rightHomeSection}>
                  <View style={styles.rightHomeSectionTop}>
                    <Image
                      style={styles.dollarIcon}
                      source={mockData.dollarsign}
                    />
                    <View>
                      <Text>{mockData.sales}</Text>
                      <Text>{mockData.complete}</Text>
                    </View>
                  </View>
                  <View style={styles.rightHomeSectionBot}>
                    <Image
                      style={styles.dollarIcon}
                      source={mockData.dollarsign}
                    />
                    <Text>{mockData.clients}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.homeCardSubTitle}>{mockData.moreInfo}</Text>
            </View>

            <View style={styles.homeCardContainer}>
              <View style={styles.homeInformationSection}>
                <Text style={styles.homeCardTitle}>{mockData.information}</Text>

                <Text style={styles.homeInformationText}>
                  {mockData.LoremIpsum}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.Post}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsScreen')}>
            <Text style={styles.postText}>{mockData.post}</Text>
          </TouchableOpacity>
          <PostAccount />
          <PostAccount />
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
