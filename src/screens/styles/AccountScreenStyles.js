import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../core/themes';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
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
    color: colors.opinionsText,
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
    color: colors.darkBlue,
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
    backgroundColor: colors.profileContainer,
    marginTop: 23,
    borderRadius: 32,
  },
  findHomeContainer: {
    marginTop: 32,
    marginLeft: 20,
    borderRadius: 20,
  },
  homeTitle: {
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeContainerScroll: {
    marginTop: 6,
  },
  homeCardContainer: {
    width: 230,
    height: 125,
    marginRight: 15,
    padding: 13,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  homeCardTitle: {
    color: colors.darkBlue,
    fontSize: RFValue(10),
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
    color: colors.turquoise,
    fontSize: 9,
    marginTop: 5,
    alignSelf: 'center',
    top: 2,
  },
  homeInformationSection: {
    alignItems: 'center',
    flexGrow: 0,
  },
  homeInformationText: {
    color: colors.whiteOpacity,
    fontSize: RFValue(7),
  },
  Post: {
    marginTop:20,
    marginHorizontal: 20,
  },
  postText:{
    color:colors.darkBlue,
    fontSize:20,
    fontWeight:'bold',
  },
  circleEmpty: {
    backgroundColor: colors.circleEmptyy,
  },
  circleFill: {
    backgroundColor: colors.circleFull,
  },
  levelTexts: {
    position: 'absolute',
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  level: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: colors.chathamsBlue,
    fontSize: RFValue(16),
    letterSpacing: RFValue(1),
    fontWeight: 'bold',
  },
  levelText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: colors.fontBlue,
    fontSize: RFValue(8),
    position: 'relative',
    top: '-16%',
  },
});
