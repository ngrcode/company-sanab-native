import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 16,
  },
  itemWrapper: {
    backgroundColor: theme.colors.gray[2],
    width: '100%',
    paddingRight: 24,
    paddingLeft: 29,
    paddingBottom: 24,
    marginTop: 16,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 34,
  },
  info: {
    // marginBottom: 35,
    marginTop: 16,
  },
  title: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    color: theme.colors.singletons.black,
  },
  desc: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    color: theme.colors.gray[0],
    marginLeft: 18,
  },
  icon: {
    fontSize: 10,
  },
  descWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
