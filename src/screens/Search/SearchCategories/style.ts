import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  hotText: {
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 16,
    color: colors.gray[13],
    textAlign: 'center',
    marginTop: 12,
  },
  searchBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  searchText: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: colors.singletons.black,
    textAlign: 'center',
  },
  arrowIcon: {
    color: colors.singletons.black,
    marginRight: 7,
  },
});
