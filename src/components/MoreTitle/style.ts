import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  moreBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: theme.colors.gray[0],
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
  },
  icon: {
    paddingRight: 8,
  },
});
