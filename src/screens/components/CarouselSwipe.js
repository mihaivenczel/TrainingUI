import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {bckgPic} from '../../../assets/images';
import {colors} from '../../core/themes';
import {CarouselSwiperStyles as styles} from './styles';

export default class CarouselSwipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View>
        <ImageBackground style={styles.cardImage} source={bckgPic} />
      </View>
    );
  }

  get pagination() {
    const {entries, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={4}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 50,
          padding: 5,
        }}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 5,
          backgroundColor: colors.turquoise,
        }}
        inactiveDotStyle={{}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    );
  }

  render() {
    return (
      <View>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={430}
          itemWidth={430}
          renderItem={this._renderItem}
          loop={true}
          enableSnap={true}
        />
        {this.pagination}
      </View>
    );
  }
}
