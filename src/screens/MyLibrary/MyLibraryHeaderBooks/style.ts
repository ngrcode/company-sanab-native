import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.green[0],
    height: 84,
    paddingVertical: 8,
    paddingHorizontal: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  block: {
    width: '90%',
  },
  title: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 21,
    color: theme.colors.singletons.black,
  },
  desc: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[1],
  },
  IconWrapper: {
    backgroundColor: theme.colors.green[3],
    width: 38,
    height: 38,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 19,
  },
  heartIcon: {
    color: theme.colors.green[4],
    fontSize: 25,
  },
});
