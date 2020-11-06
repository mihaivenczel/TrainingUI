import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

const TabBar = ({state, descriptors, navigation}) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        onPress={() => {
          setSelected(0);
        }}>
        <MaterialCommunityIcon
          style={selected === 0 ? styles.iconSelected : styles.icon}
          name="home-search-outline"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected(1);
        }}>
        <MaterialCommunityIcon
          style={selected === 1 ? styles.iconSelected : styles.icon}
          name="heart-outline"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected(2);
        }}>
        <SimpleIcon
          style={selected === 2 ? styles.iconSelected : styles.icon}
          name="location-pin"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected(3);
        }}>
        <IonIcon
          style={selected === 3 ? styles.iconSelected : styles.icon}
          name="chatbubble-ellipses-outline"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    color: '#E5EBF1',
    fontSize: RFValue(30),
  },
  iconSelected: {
    color: '#46D0D9',
    fontSize: RFValue(30),
  },
  navContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: 'white',
    height: 55,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default TabBar;
