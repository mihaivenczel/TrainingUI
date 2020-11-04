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
import {HomeScreenStyles} from './styles';
import {Input} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={HomeScreenStyles.bckgColor}>
      <View style={HomeScreenStyles.mainContainer}>
        <StatusBar hidden={true} />
        <View style={HomeScreenStyles.headerContainer}>
          <View style={HomeScreenStyles.userLeftContainer}>
            <Image
              style={HomeScreenStyles.userIconProfilePic}
              source={require('../../assets/images/icon.png')}
            />
          </View>
          <View style={HomeScreenStyles.userMiddleContainer}>
            <TouchableOpacity>
              <Image
                style={HomeScreenStyles.userLocation}
                source={require('../../assets/images/location.png')}
              />
            </TouchableOpacity>
            <View style={HomeScreenStyles.locationContainer}>
              <Text style={HomeScreenStyles.text}>Los angeles, CA</Text>
              <TouchableOpacity>
                <Image
                  style={HomeScreenStyles.userDrop}
                  source={require('../../assets/images/drop.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeScreenStyles.userRightContainer}>
            <TouchableOpacity>
              <Image
                style={HomeScreenStyles.bell}
                source={require('../../assets/images/bell.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require('../../assets/images/settings.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeScreenStyles.textContainer}>
          <Text style={HomeScreenStyles.greetText}>Hello Eddie!</Text>
          <Text style={HomeScreenStyles.greetTextSubtitle}>
            Start looking for your house
          </Text>
        </View>
        <View style={HomeScreenStyles.searchContainer}>
          <Input
            style={HomeScreenStyles.homeSearch}
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

        <View style={HomeScreenStyles.categoryContainer}>
          <TouchableOpacity style={HomeScreenStyles.homeBox}>
            <Image source={require('../../assets/images/house.png')} />
            <Text style={HomeScreenStyles.homeText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeScreenStyles.blocBox}>
            <Image source={require('../../assets/images/bloc.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={HomeScreenStyles.blocBox}>
            <Image source={require('../../assets/images/keys.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={HomeScreenStyles.blocBox}>
            <Image source={require('../../assets/images/percentage.png')} />
          </TouchableOpacity>
        </View>

        <View style={HomeScreenStyles.houseContainer}>
          <ImageBackground
            style={HomeScreenStyles.houseCard}
            source={require('../../assets/images/bckgPic.png')}>
            <View style={HomeScreenStyles.pictureLocation}>
              <Image source={require('../../assets/images/location.png')} />
              <Text style={HomeScreenStyles.text}> Los angeles, CA</Text>
            </View>
            <View style={HomeScreenStyles.detailLocation}>
              <View style={{marginLeft: 15}}>
                <TouchableOpacity style={HomeScreenStyles.like}>
                  <Image source={require('../../assets/images/like.png')} />
                </TouchableOpacity>
                <Text style={HomeScreenStyles.houseTextTitle}>
                  Special House mix
                </Text>
                <View style={HomeScreenStyles.userHeader}>
                  <Image
                    style={HomeScreenStyles.userIconHome}
                    source={require('../../assets/images/icon.png')}
                  />
                  <Text style={HomeScreenStyles.userHeaderText}>
                    Timmy bremer
                  </Text>
                  <Text style={HomeScreenStyles.price}> $1500 usd</Text>
                </View>
                <View style={HomeScreenStyles.rating}>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_highlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_highlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_highlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_nohighlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_nohighlight.png')}
                    />
                  </TouchableOpacity>
                  <Text style={HomeScreenStyles.opinions}>20 onions</Text>
                  <View style={HomeScreenStyles.rooms}>
                    <Image
                      style={HomeScreenStyles.roomIcon}
                      source={require('../../assets/images/icon1.png')}
                    />
                    <Text style={HomeScreenStyles.roomNumbers}>2</Text>
                    <Image
                      style={HomeScreenStyles.roomIcon}
                      source={require('../../assets/images/icon2.png')}
                    />
                    <Text style={HomeScreenStyles.roomNumbers}>1</Text>
                    <Image
                      style={HomeScreenStyles.roomIcon}
                      source={require('../../assets/images/icon3.png')}
                    />
                    <Text style={HomeScreenStyles.roomNumbers}>1</Text>
                  </View>
                </View>
                <View></View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={HomeScreenStyles.houseContainer}>
          <ImageBackground
            style={HomeScreenStyles.houseCard}
            source={require('../../assets/images/bckgPic.png')}>
            <View style={HomeScreenStyles.pictureLocation}>
              <Image source={require('../../assets/images/location.png')} />
              <Text style={HomeScreenStyles.text}> Los angeles, CA</Text>
            </View>
            <View style={HomeScreenStyles.detailLocation}>
              <View style={{marginLeft: 15}}>
                <TouchableOpacity style={HomeScreenStyles.like}>
                  <Image source={require('../../assets/images/like.png')} />
                </TouchableOpacity>
                <Text style={HomeScreenStyles.houseTextTitle}>
                  Special House mix
                </Text>
                <View style={HomeScreenStyles.userHeader}>
                  <Image
                    style={HomeScreenStyles.userIconHome}
                    source={require('../../assets/images/icon.png')}
                  />
                  <Text style={HomeScreenStyles.userHeaderText}>
                    Timmy bremer
                  </Text>
                  <Text style={HomeScreenStyles.price}> $1500 usd</Text>
                </View>
                <View style={HomeScreenStyles.rating}>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_highlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_highlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_highlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_nohighlight.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={HomeScreenStyles.starHighlight}
                      source={require('../../assets/images/star_nohighlight.png')}
                    />
                  </TouchableOpacity>
                  <Text style={HomeScreenStyles.opinions}>20 onions</Text>
                  <View style={HomeScreenStyles.rooms}>
                    <Image
                      style={HomeScreenStyles.roomIcon}
                      source={require('../../assets/images/icon1.png')}
                    />
                    <Text style={HomeScreenStyles.roomNumbers}>2</Text>
                    <Image
                      style={HomeScreenStyles.roomIcon}
                      source={require('../../assets/images/icon2.png')}
                    />
                    <Text style={HomeScreenStyles.roomNumbers}>1</Text>
                    <Image
                      style={HomeScreenStyles.roomIcon}
                      source={require('../../assets/images/icon3.png')}
                    />
                    <Text style={HomeScreenStyles.roomNumbers}>1</Text>
                  </View>
                </View>
                <View></View>
              </View>
            </View>
          </ImageBackground>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
