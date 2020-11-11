import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../core/themes';

export default StyleSheet.create({
  mainContainer: {},
  headerContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 80,
  },
  headerLeft: {
    flex: 1,
  },
  chevronBack: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    padding: 10,
    elevation: 0.25,
  },
  chevron: {
    fontSize: RFValue(16),
  },
  headerMiddle: {
    flex: 1,
  },
  headerMiddleText: {
    borderRadius: 50,
    padding: 7,
    alignSelf: 'center',
    backgroundColor: colors.darkLime,
  },
  postTextBooked: {
    color: colors.white,
    fontSize: 14,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  headerRight: {
    flex: 1,
  },
  like: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 10,
    elevation: 0.25,
  },
  bodyContainer: {
    marginTop: 40,
    backgroundColor: colors.grey,
    borderRadius: 30,
  },
  bodyMargin: {
    marginHorizontal: 30,
  },
  bodyHeader: {
    marginTop: 30,
    flexDirection: 'row',
  },
  locationContainerLeft: {
    flex: 2,
  },
  locationContainerRight: {
    flex: 1,
  },
  userIcon: {
    alignSelf: 'flex-end',
  },
  locationPin: {
    marginRight: 5,
  },
  locationText: {
    color: colors.darkBlue,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  bodyTitle: {
    color: colors.darkBlue,
    alignSelf: 'flex-start',
    fontSize: 26,
    fontWeight: 'bold',
  },
  bodySubtitle: {
    marginTop: 10,
    flexDirection: 'row',
  },
  bodySubtitleText: {
    fontSize: 15,
    color: colors.chathamsBlueOpacity,
    marginRight: 5,
  },
  dot: {
    top: 1,
    marginRight: 5,
    alignSelf: 'center',
  },
  rooms: {
    flexDirection: 'row',

    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  roomNumbers: {
    fontSize: 20,
    marginLeft: 2,
    padding: 1,
    paddingRight: 40,
    top: 3,
    color: colors.textColor,
  },

  roomIcon: {
    width: 19,
    height: 18,
  },
  categoriesContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: colors.greyOpac,
  },
  category: {
    marginTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },
  socialCategory: {
    alignContent: 'center',

    marginHorizontal: 20,
  },
  information: {
    alignSelf: 'center',
  },
  socialTextSelected: {
    color: colors.greyOpac,
  },
  socialText: {
    color: colors.turquoise,
  },
  bodyTitleDescription: {
    color: colors.darkBlue,
    alignSelf: 'flex-start',
    fontSize: 26,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginTop: 25,
  },
  descriptionText: {
    fontSize: 12,
    color: colors.textColor,
  },
  bookingContainer: {
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding:20,
  },
  bookingContainerLeft: {
    flex: 1,
  },
  bookingContainerRight: {
    flex: 1,
  },
  price: {
    color: colors.chathamsBlue,
    fontSize: 20,
    alignSelf: 'center',
    paddingRight: 20,
    paddingTop:10,
    fontWeight: 'bold',
  },
  reserveButton: {
    backgroundColor: colors.turquoise,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  reserve: {
    fontSize: 16,
    color: colors.white,
  },
});
