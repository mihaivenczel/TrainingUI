import React from 'react';
import {Image} from 'react-native';
import {star_highlight, star_nohighlight} from '../../../assets/images';

export const genStars = (stars, style1, style2) => {
  const arr = [];
  for (let i = 0; i < 5; i++)
    if (i < stars) {
      arr.push(<Image style={style1} source={star_highlight} />);
    } else {
      arr.push(<Image style={style2} source={star_nohighlight} />);
    }
    return arr;
};
