import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[4],
    height: 54,
    borderBottomColor: '#DDDDDD',
    borderBottomStyle: 'solid',
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 27,
    paddingRight: 27,
  },
  icon: {
    fontSize: 25,
  },
  text: {
    color: theme.colors.blue[0],
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 17,
    textAlign: 'center',
  },
  text1: {
    color: theme.colors.blue[0],
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 24,
  },
});
