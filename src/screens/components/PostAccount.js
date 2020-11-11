import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {PostAccountStyles as styles} from './styles';
import {
  bckgPic,
  location,
  like,
  icon,
  star_highlight,
  star_nohighlight,
  icon1,
  icon2,
  icon3,
} from '../../../assets/images';

const Post = () => {
  const mockData = {
    bckgPic,
    location,
    like,
    icon,
    star_highlight,
    star_nohighlight,
    icon1,
    icon2,
    icon3,
  };
  return (
    <View style={styles.houseContainer}>
      <ImageBackground style={styles.houseCard} source={mockData.bckgPic}>
        <View style={styles.pictureLocation}>
          <Image source={mockData.location} />
          <Text style={styles.text}> Los angeles, CA</Text>
        </View>
        <View style={styles.detailLocation}>
          <View>
            <TouchableOpacity style={styles.like}>
              
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
                <Image style={styles.userIconHome} source={mockData.icon} />
                <Text style={styles.userHeaderText}>Timmy bremer</Text>
              </View>
              <View style={styles.rating}>
                <TouchableOpacity>
                  <Image
                    style={styles.starHighlight}
                    source={mockData.star_highlight}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.starHighlight}
                    source={mockData.star_highlight}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.starHighlight}
                    source={mockData.star_highlight}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.starHighlight}
                    source={mockData.star_highlight}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.starHighlight}
                    source={mockData.star_nohighlight}
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
                <Image style={styles.roomIcon} source={mockData.icon1} />
                <Text style={styles.roomNumbers}>2</Text>
                <Image style={styles.roomIcon} source={mockData.icon2} />
                <Text style={styles.roomNumbers}>1</Text>
                <Image style={styles.roomIcon} source={mockData.icon3} />
                <Text style={styles.roomNumbers}>1</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Post;
