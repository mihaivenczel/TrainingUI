import {StyleSheet} from 'react-native';
import {colors} from '../../core/themes';

export default StyleSheet.create({
  background: {},
  bckgColor: {
    flex: 1,
    backgroundColor: colors.turquoise,
  },
  mainContainer: {
    flex: 2,
    backgroundColor: colors.grey,
  },
  secondContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: '49%',
    bottom: '8%',
  },
  logo: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  inputIcons: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    top: 10,
    marginHorizontal: 20,
  },
  emailText: {
    paddingBottom: 6,
    marginLeft: 5,
    color: colors.chathamsBlue,
  },
  passwordText: {
    paddingBottom: 6,
    marginLeft: 5,
    color: colors.chathamsBlue,
  },
  inputEmail: {
    borderRadius: 10,
    paddingHorizontal: 13,
    minWidth: '90%',
    alignSelf: 'center',
  },
  inputEmailOutside: {
    borderBottomWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 13,
    minWidth: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  inputPassword: {
    borderRadius: 10,
    minWidth: '90%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputPasswordOutside: {
    borderBottomWidth: 0,
    borderRadius: 10,
    minWidth: '90%',
    alignSelf: 'center',
    paddingHorizontal: 13,
    backgroundColor: 'white',
  },
  registerContainer: {
    top: '5%',
    paddingHorizontal: '3%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  registerText: {
    fontSize: 14,
    padding: 10,
    fontWeight: 'bold',
    color: colors.chathamsBlue,
  },
  forgotText: {
    fontSize: 14,
    padding: 10,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    color: colors.chathamsBlue,
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  },
  subtitle: {
    color: colors.whiteOpacity,
    fontWeight: '300',
    fontSize: 20,
    alignSelf: 'center',
  },
  button: {
    top: 15,
    backgroundColor: colors.chathamsBlue,
    borderRadius: 10,
    minWidth: '90%',
    alignSelf: 'center',
    padding: 18,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
