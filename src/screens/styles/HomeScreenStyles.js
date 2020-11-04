import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: '3%',
    backgroundColor: '#F8FBFF',
  },
  bckgColor: {
    backgroundColor: '#F8FBFF',
  },
  headerContainer: {
    marginTop: '5%',
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
    color: '#143656',
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
    color: 'rgba(0, 0, 0, 0.3)',
    fontWeight: '400',
    fontSize: 20,
  },
  greetTextSubtitle: {
    color: '#13497B',
    fontSize: 20,
  },
  searchContainer: {
    marginTop: '5%',
  },
  homeSearch: {
    minWidth: '87%',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
  },
  homeBox: {
    backgroundColor: '#46D0D9',
    borderRadius: 10,
    flexDirection: 'column',
    padding: 20,
    paddingBottom: 40,
  },
  homeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    top: '50%',
    fontSize: 16,
  },
  blocBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    padding: 20,
    alignSelf: 'flex-start',
  },
  houseContainer: {
    top: 1,
    elevation: 0.5,
    marginTop: 20,
    height: 345, //cannot make the image render unless it's a fixed value
    //like this. ( picture is 559x411px ). please fix
  },
  houseCard: {
    //imaginea
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  pictureLocation: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    padding: 5,
    position: 'absolute',
    top: '10%',
    left: '15%',
    borderRadius: 20,
  },
  detailLocation: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  like: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 30,
    left: '138%',
    bottom: '85%',
    padding: 10,
    elevation: 0.25,
  },
  houseTextTitle: {
    fontWeight: 'bold',
    color: '#143656',
    fontSize: 20,
    marginTop:10,
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
    color: '#143656',
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
  price: {
    fontSize: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    left: '55%',
    color: '#143656',
    fontWeight: 'bold',
    bottom: 7,
  },
  roomNumbers: {
    fontSize: 12,
    right: 4,
    color: '#8A9BAB',
    bottom: 3,
  },
  rooms: {
    width: 110,
    flexDirection: 'row',
    padding: 5,
    left: '62%',
    justifyContent: 'space-evenly',
  },
  roomIcon: {
    width: 11,
    height: 11,
  },
});
