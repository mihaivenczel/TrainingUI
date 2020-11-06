import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  chevronContainer: {
    marginLeft: 37,
    marginTop: 30,
  },
  chevronBack: {
    fontSize: RFValue(16),
  },
  headerContainer: {
    marginHorizontal: 75,
    marginTop: 25,
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    width: RFValue(15),
    height: RFValue(15),
    marginRight: RFValue(2),
  },
  leftSection: {
    flex: 1,
    marginLeft: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  rightSection: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  profilePicture:{
      width:RFValue(90),
      height:RFValue(90),
      borderRadius:RFValue(90/2),
  },
  name: {
    color: '#143656',
    fontWeight: 'bold',
  },
  locationContainer: {},
  locationText: {},
});
