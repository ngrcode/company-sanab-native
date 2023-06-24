import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  img: {
    width: 231,
    height: 290,
    marginTop: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iconClock: {
    fontSize: 20,
  },
  iconDownload: {
    fontSize: 22,
  },
  iconNavicon: {
    fontSize: 30,
  },
  iconsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
  },
  iconBlock: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[5],
    marginTop: 8,
  },

  block: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 24,
    fontSize: 100,
  },
  imgTitle: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.singletons.black,
    marginLeft: 15,
  },
  imgNumber: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.gray[0],
  },
});
