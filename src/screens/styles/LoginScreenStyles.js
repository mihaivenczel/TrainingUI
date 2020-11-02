import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#46D0D9',
  },
  secondContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: '25%',
  },
  logo: {
    alignSelf: 'center',
    marginTop: '5%',
  },
  inputIcons: {
    alignSelf: 'flex-end',
  },
  inputContainer: {
      marginBottom:20,
  },
  emailText: {
    margin: 5,
    paddingLeft: 19,
    color: '#13497B',
  },
  passwordText: {
    margin: 5,
    paddingLeft: 19,
    color: '#13497B',
  },
  inputEmail: {
    borderRadius: 10,
    minWidth: '90%',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  inputPassword: {
    borderRadius: 10,
    minWidth: '90%',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  registerContainer: {
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
