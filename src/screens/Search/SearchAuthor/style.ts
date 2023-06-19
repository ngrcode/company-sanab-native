import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  searchBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 27,
    marginTop: 18,
  },
  searchText: {
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 16,
    color: colors.gray[13],
    textAlign: 'center',
    marginRight: 7,
  },
  icon: {
    color: colors.gray[13],
    marginRight: 7,
  },
});
