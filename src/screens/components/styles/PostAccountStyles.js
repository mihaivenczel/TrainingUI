import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: '3%',
    backgroundColor: colors.grey,
  },
  bckgColor: {
    backgroundColor: colors.grey,
  },
  headerContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLeftContainer: {
    flex: 1,
    alignContent: 'flex-start',
  },
  userMiddleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  userDrop: {
    top: 3,
  },
  text: {
    color: colors.darkBlue,
    fontSize: 12,
  },
  userRightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  bell: {
    left: 20,
  },
  textContainer: {
    marginTop: '10%',
    alignSelf: 'flex-start',
  },
  greetText: {
    color: colors.whiteOpacity,
    fontWeight: '400',
    fontSize: 20,
  },
  greetTextSubtitle: {
    color: colors.chathamsBlue,
    fontSize: 20,
  },
  searchContainer: {
    marginTop: '5%',
  },
  homeSearch: {
    minWidth: '87%',
    alignSelf: 'center',
    padding: 10,
  },
  homeSearchOutside: {
    borderBottomWidth: 0,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 8,
    marginHorizontal: 27,
    backgroundColor: colors.white,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
  },
  boxHighlight: {
    backgroundColor: colors.turquoise,
    borderRadius: 10,

    padding: 20,
    paddingBottom: 40,
  },
  boxNoHighlight: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    padding: 20,
    alignSelf: 'flex-start',
  },
  homeText: {
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: 30,
    fontSize: 16,
  },

  houseContainer: {
    top: 1,
    elevation: 0.5,
    marginTop: 5,
    height: 345, //cannot make the image render unless it's a fixed value
    //like this. ( picture is 559x411px ). please fix
  },
  houseCard: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  pictureLocation: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-evenly',
    padding: 5,
    position: 'absolute',
    top: 35,
    left: 65,
    borderRadius: 20,
  },
  detailLocation: {
    padding: 5,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  detailLocationContainer1: {
    flex: 1,
    marginLeft: 26,
  },
  like: {
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 20,
    elevation: 0.55,
    right: 22,
    top: -20,
  },
  detailLocationContainer: {
    marginBottom: 15,
  },
  houseTextTitle: {
    marginLeft: 26,
    fontWeight: 'bold',
    color: colors.darkBlue,
    fontSize: 20,
    marginTop: 10,
  },
  userHeader: {
    flexDirection: 'row',
    right: 4,
  },
  userIconHome: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignContent: 'flex-start',
  },

  userHeaderText: {
    color: colors.darkBlue,
    fontSize: 11,
    fontWeight: '300',
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  rating: {
    marginTop: 5,
    left: 2,
    flexDirection: 'row',
  },
  starHighlight: {
    width: 14,
    height: 14,
    alignSelf: 'baseline',
    resizeMode: 'contain',
  },
  opinions: {
    fontSize: 9,
    color: 'rgba(0, 0, 0, 0.2)',
    fontWeight: '300',
    top: 1,
    left: 5,
  },
  detailLocationContainer2: {
    flex: 1,
  },
  price: {
    fontSize: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 25,
    color: colors.darkBlue,
    fontWeight: 'bold',
  },
  rooms: {
    flexDirection: 'row',
    padding: 5,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 25,
  },
  roomNumbers: {
    fontSize: 12,
    marginLeft: 2,
    padding: 1,
    top: 3,
    color: colors.textColor,
  },

  roomIcon: {
    width: 11,
    height: 11,
    marginLeft: 6,
  },
});
