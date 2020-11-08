import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {},
  bckgColor: {
    flex: 1,
    backgroundColor: '#46D0D9',
  },
  mainContainer: {
    flex: 2,
    backgroundColor: '#F8FBFF',
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
    color: '#13497B',
  },
  passwordText: {
    paddingBottom: 6,
    marginLeft: 5,
    color: '#13497B',
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
    fontFamily: 'Rubik-Light',
    fontSize: 14,
    padding: 10,
    fontWeight: 'bold',
    color: '#13497B',
  },
  forgotText: {
    fontFamily: 'Rubik-Light',
    fontSize: 14,
    padding: 10,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    color: '#13497B',
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Rubik-Light',
    alignSelf: 'center',
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontWeight: '300',
    fontSize: 20,
    alignSelf: 'center',
  },
  button: {
    top: 15,
    backgroundColor: '#13497B',
    borderRadius: 10,
    minWidth: '90%',
    alignSelf: 'center',
    padding: 18,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Rubik-Light',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
