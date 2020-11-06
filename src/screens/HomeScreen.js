import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {HomeScreenStyles as styles} from './styles';
import {Input} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.bckgColor}>
      <View style={styles.mainContainer}>
        <StatusBar hidden={true} />
        <View style={styles.headerContainer}>
          <View style={styles.userLeftContainer}>
            <Image
              style={styles.userIconProfilePic}
              source={require('../../assets/images/icon.png')}
            />
          </View>
          <View style={styles.userMiddleContainer}>
            <TouchableOpacity>
              <Image
                style={styles.userLocation}
                source={require('../../assets/images/location.png')}
              />
            </TouchableOpacity>
            <View style={styles.locationContainer}>
              <Text style={styles.text}>Los angeles, CA</Text>
              <TouchableOpacity>
                <Image
                  style={styles.userDrop}
                  source={require('../../assets/images/drop.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userRightContainer}>
            <TouchableOpacity>
              <Image
                style={styles.bell}
                source={require('../../assets/images/bell.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
              <Image source={require('../../assets/images/settings.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.greetText}>Hello Eddie!</Text>
          <Text style={styles.greetTextSubtitle}>
            Start looking for your house
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <Input
            style={styles.homeSearch}
            placeholder="What are you looking for?"
            leftIcon={
              <TouchableOpacity>
                <Image source={require('../../assets/images/search.png')} />
              </TouchableOpacity>
            }
            rightIcon={
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/search_options.png')}
                />
              </TouchableOpacity>
            }
            inputContainerStyle={{
              borderBottomWidth: 0,
              borderRadius: 10,
              alignSelf: 'center',
              padding: 8,
              paddingHorizontal: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.homeBox}>
            <Image source={require('../../assets/images/house.png')} />
            <Text style={styles.homeText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blocBox}>
            <Image source={require('../../assets/images/bloc.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.blocBox}>
            <Image source={require('../../assets/images/keys.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.blocBox}>
            <Image source={require('../../assets/images/percentage.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.houseContainer}>
          <ImageBackground
            style={styles.houseCard}
            source={require('../../assets/images/bckgPic.png')}>
            <View style={styles.pictureLocation}>
              <Image source={require('../../assets/images/location.png')} />
              <Text style={styles.text}> Los angeles, CA</Text>
            </View>
            <View style={styles.detailLocation}>
              <View>
                <TouchableOpacity style={styles.like}>
                  <Image source={require('../../assets/images/like.png')} />
                </TouchableOpacity>
                <Text style={styles.houseTextTitle}>Special House mix</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.detailLocationContainer1,
                    styles.detailLocationContainer,
                  ]}>
                  <View style={styles.userHeader}>
                    <Image
                      style={styles.userIconHome}
                      source={require('../../assets/images/icon.png')}
                    />
                    <Text style={styles.userHeaderText}>Timmy bremer</Text>
                  </View>
                  <View style={styles.rating}>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_highlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_highlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_highlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_nohighlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_nohighlight.png')}
                      />
                    </TouchableOpacity>
                    <Text style={styles.opinions}>20 onions</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.detailLocationContainer2,
                    styles.detailLocationContainer,
                  ]}>
                  <Text style={styles.price}> $1500 usd</Text>
                  <View style={styles.rooms}>
                    <Image
                      style={styles.roomIcon}
                      source={require('../../assets/images/icon1.png')}
                    />
                    <Text style={styles.roomNumbers}>2</Text>
                    <Image
                      style={styles.roomIcon}
                      source={require('../../assets/images/icon2.png')}
                    />
                    <Text style={styles.roomNumbers}>1</Text>
                    <Image
                      style={styles.roomIcon}
                      source={require('../../assets/images/icon3.png')}
                    />
                    <Text style={styles.roomNumbers}>1</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.houseContainer}>
          <ImageBackground
            style={styles.houseCard}
            source={require('../../assets/images/bckgPic.png')}>
            <View style={styles.pictureLocation}>
              <Image source={require('../../assets/images/location.png')} />
              <Text style={styles.text}> Los angeles, CA</Text>
            </View>
            <View style={styles.detailLocation}>
              <View>
                <TouchableOpacity style={styles.like}>
                  <Image source={require('../../assets/images/like.png')} />
                </TouchableOpacity>
                <Text style={styles.houseTextTitle}>Special House mix</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.detailLocationContainer1,
                    styles.detailLocationContainer,
                  ]}>
                  <View style={styles.userHeader}>
                    <Image
                      style={styles.userIconHome}
                      source={require('../../assets/images/icon.png')}
                    />
                    <Text style={styles.userHeaderText}>Timmy bremer</Text>
                  </View>
                  <View style={styles.rating}>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_highlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_highlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_highlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_nohighlight.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.starHighlight}
                        source={require('../../assets/images/star_nohighlight.png')}
                      />
                    </TouchableOpacity>
                    <Text style={styles.opinions}>20 onions</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.detailLocationContainer2,
                    styles.detailLocationContainer,
                  ]}>
                  <Text style={styles.price}> $1500 usd</Text>
                  <View style={styles.rooms}>
                    <Image
                      style={styles.roomIcon}
                      source={require('../../assets/images/icon1.png')}
                    />
                    <Text style={styles.roomNumbers}>2</Text>
                    <Image
                      style={styles.roomIcon}
                      source={require('../../assets/images/icon2.png')}
                    />
                    <Text style={styles.roomNumbers}>1</Text>
                    <Image
                      style={styles.roomIcon}
                      source={require('../../assets/images/icon3.png')}
                    />
                    <Text style={styles.roomNumbers}>1</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
