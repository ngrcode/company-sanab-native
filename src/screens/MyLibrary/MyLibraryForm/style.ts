import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    height: 30,
    marginTop: 62,
    marginHorizontal: 57,
    borderRadius: 3,
  },
  btn: {
    width: 43,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.blue[0],
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  btnText: {
    color: theme.colors.singletons.white,
  },
  input: {
    width: '90%',
    padding: 0,
    backgroundColor: theme.colors.gray[11],
    paddingRight: 12,
  },
  textError: {
    color: theme.colors.red[2],
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    marginHorizontal: 57,
    marginTop: 4,
  },
  btnWrapper: {
    marginHorizontal: 24,
    marginTop: 39,
  },
});
