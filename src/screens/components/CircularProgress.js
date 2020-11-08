/*
 * This needs a big rework, not working properly.
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 2.7;
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

renderThirdLayer = (percent) => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View
        style={[
          styles.secondProgressLayer,
          propStyle(percent - 50, 45),
        ]}></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({percent}) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      <View style={styles.insideText}>
        <Text style={styles.display}>30</Text>
        <Text style={styles.displayLevel}>Level</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  insideText: {
    alignItems: 'center',
  },
  displayLevelNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  displayLevel: {
    bottom: 4,
    fontSize: 8,
  },
  container: {
    width: 62,
    height: 62,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 62,
    height: 62,
    borderWidth: 10,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#46D0D9',
    borderTopColor: '#46D0D9',
    transform: [{rotateZ: '-135deg'}],
  },
  secondProgressLayer: {
    width: 62,
    height: 62,
    position: 'absolute',
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#46D0D9',
    borderTopColor: '#46D0D9',
    transform: [{rotateZ: '45deg'}],
  },
  offsetLayer: {
    width: 62,
    height: 62,
    position: 'absolute',
    borderWidth: 10,
    borderRadius: 10,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#F7F7F7',
    borderTopColor: '#F7F7F7',
    transform: [{rotateZ: '-135deg'}],
  },
});

export default CircularProgress;
