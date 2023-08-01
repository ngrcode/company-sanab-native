import {StyleSheet, Dimensions} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
  },
  btnTitle: {
    paddingRight: 5,
    color: theme.colors.blue[0],
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnIcon: {
    color: theme.colors.blue[0],
    fontSize: 15,
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  centered: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    height: Dimensions.get('window').height - 1000,
  },
  img: {
    width: 201,
    height: 252,
    borderRadius: 3,
  },
  closeIcon: {
    color: theme.colors.gray[9],
    textAlign: 'right',
    fontSize: 20,
    marginRight: 10,
    marginTop: 5,
  },
  registerBtn: {
    marginTop: 'auto',
    backgroundColor: theme.colors.blue[0],
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: theme.colors.singletons.white,
    fontWeight: '700',
    fontSize: 15,
  },
});
