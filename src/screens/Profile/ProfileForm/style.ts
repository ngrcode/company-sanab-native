import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonClose: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
  },
  textStyle: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonOpen: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
  },
  textError: {
    color: theme.colors.red[2],
    marginTop: 4,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
  },
  title: {
    color: theme.colors.blue[0],
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 26,
    textAlign: 'center',
  },
});
