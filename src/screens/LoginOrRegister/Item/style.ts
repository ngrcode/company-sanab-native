import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 54,
    paddingRight: 24,
    paddingLeft: 29,
  },
  borderBtm: {
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colors.gray[0],
    borderBottomWidth: 1,
  },
  descWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 10,
  },
  desc: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    color: theme.colors.gray[0],
    marginLeft: 18,
  },
  title: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    color: theme.colors.singletons.black,
  },
});
