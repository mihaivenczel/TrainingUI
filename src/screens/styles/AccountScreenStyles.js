import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  chevronContainer: {
    marginLeft: RFValue(37),
    marginTop: RFValue(30),
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
    marginTop: 5,
  },
  star: {
    width: RFValue(15),
    height: RFValue(15),
    marginRight: 2,
  },
  opinionsText: {
    color: '#F0F0F0',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 7,
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: RFValue(90),
    height: RFValue(90),
    borderRadius: RFValue(90 / 2),
  },
  name: {
    color: '#143656',
    fontWeight: 'bold',
    fontSize: 19,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingRight: 17,
  },
  locationPin: {
    alignSelf: 'center',
    marginRight: 5,
    width: RFValue(10),
    height: RFValue(13),
  },
  locationText: {},
  profileContentContainer: {
    backgroundColor: '#F4F8FC',
    marginTop: 23,
    borderRadius: 32,
  },
  findHomeContainer: {
    marginTop: 32,
    marginLeft: 20,
    borderRadius: 20,
  },
  homeTitle: {
    color: '#143656',
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeContainerScroll: {
    backgroundColor: 'green',
    marginTop: 6,
  },
  homeCardContainer: {
    marginRight: 15,
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  homeCardTitle: {
    color: '#143656',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  homeSection: {
    flexDirection: 'row',
  },
  leftHomeSection: {
    flex: 1,
    marginHorizontal: 20,
  },
  rightHomeSection: {
    flex: 1,
    marginHorizontal: 20,
  },
  rightHomeSectionTop: {
    flex: 1,
    flexDirection: 'row',
  },
  dollarIcon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  rightHomeSectionBot: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  personIcon: {
    width: RFValue(11),
    height: RFValue(11),
  },
  homeCardSubTitle: {
    color: '#46D0D9',
    fontSize: 9,
    marginTop: 5,
    alignSelf: 'center',
    top: 2,
  },
  homeInformationSection: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  homeInformationText: {
    color: 'rgba(0,0,0,0.2)',
    fontSize: 12,
  },
  Post: {
    marginHorizontal: 20,
  },
});
