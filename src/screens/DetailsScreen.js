import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DetailsScreenStyles as styles} from './styles';
import {
  icon as profilepic,
  locationpin,
  dollarsign,
  personIcon,
  chevronBack,
  like,
  dot,
  icon1,
  icon2,
  icon3,
  percentage,
  share,
  information,
  comments,
  offers,
} from '../../assets/images';

const DetailsScreen = ({navigation}) => {
  const mockData = {
    profilepic,
    locationpin,
    dollarsign,
    personIcon,
    chevronBack,
    like,
    dot,
    icon1,
    icon2,
    icon3,
    percentage,
    share,
    information,
    comments,
    offers,
    description: 'Description',
    booked: 'Available',
    location: 'Los angeles, CA',
    title: 'Special House mix',
    wifi: 'High-speed wifi',
    deskspace: 'Deskspace',
    safeLocation: 'Safe location',
    informationText: 'Information',
    commentsText: 'Comments',
    percentageText: 'Offers',
    sharedText: 'Shared',
    price: ' $1500 usd',
    bookNow: 'Reserved now!',
    LoremIpsum:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };
  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.chevronBack}
              onPress={() => navigation.goBack()}>
              <Image style={styles.chevron} source={mockData.chevronBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerMiddle}>
            <View style={styles.headerMiddleText}>
              <Text style={styles.postTextBooked}>{mockData.booked}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.like}>
              <Image source={mockData.like} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <Text> carousel here </Text>
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.bodyMargin}>
            <View style={styles.bodyHeader}>
              <View style={styles.locationContainerLeft}>
                <View style={styles.titleContainer}>
                  <Image
                    style={styles.locationPin}
                    source={mockData.locationpin}
                  />
                  <Text style={styles.locationText}>{mockData.location}</Text>
                </View>
                <Text style={styles.bodyTitle}>{mockData.title}</Text>
              </View>
              <View style={styles.locationContainerRight}>
                <Image style={styles.userIcon} source={mockData.profilepic} />
              </View>
            </View>

            <View style={styles.bodySubtitle}>
              <Text style={styles.bodySubtitleText}>{mockData.wifi}</Text>
              <Image style={styles.dot} source={mockData.dot} />
              <Text style={styles.bodySubtitleText}>{mockData.deskspace}</Text>
              <Image style={styles.dot} source={mockData.dot} />
              <Text style={styles.bodySubtitleText}>
                {mockData.safeLocation}
              </Text>
            </View>

            <View style={styles.rooms}>
              <Image style={styles.roomIcon} source={mockData.icon1} />
              <Text style={styles.roomNumbers}>2</Text>
              <Image style={styles.roomIcon} source={mockData.icon2} />
              <Text style={styles.roomNumbers}>1</Text>
              <Image style={styles.roomIcon} source={mockData.icon3} />
              <Text style={styles.roomNumbers}>1</Text>
            </View>

            <View style={styles.categoriesContainer}>
              <View style={styles.category}>
                <TouchableOpacity style={styles.socialCategory}>
                  <Image
                    style={styles.information}
                    source={mockData.information}
                  />
                  <Text style={styles.socialText}>
                    {mockData.informationText}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialCategory}>
                  <Image
                    style={styles.information}
                    source={mockData.comments}
                  />
                  <Text style={styles.socialTextSelected}>
                    {mockData.commentsText}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialCategory}>
                  <Image style={styles.information} source={mockData.offers} />
                  <Text style={styles.socialTextSelected}>
                    {mockData.percentageText}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialCategory}>
                  <Image style={styles.information} source={mockData.share} />
                  <Text style={styles.socialTextSelected}>
                    {mockData.sharedText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.bodyTitleDescription}>
                {mockData.description}
              </Text>
              <Text style={styles.descriptionText}>{mockData.LoremIpsum}</Text>
            </View>
          </View>

          <View style={styles.bookingContainer}>
            <View style={styles.bookingContainerLeft}>
              <Text style={styles.price}>{mockData.price}</Text>
            </View>
            <View style={styles.bookingContainerRight}>
              <TouchableOpacity style={styles.reserveButton}>
                <Text style={styles.reserve}>{mockData.bookNow}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
