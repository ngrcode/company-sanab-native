import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderStyle: 'solid',
    borderBottomColor: theme.colors.gray[7],
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 1,
    height: 64,
    justifyContent: 'space-between',
  },
  IndexTitleBlock: {
    flexDirection: 'row-reverse',
  },
  titleText: {
    color: theme.colors.singletons.black,
    fontSize: 11,
    marginBottom: 10,
  },
  time: {
    color: theme.colors.gray[5],
    fontSize: 11,
  },
  iconClockBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconClock: {
    color: theme.colors.gray[5],
    fontSize: 11,
    marginLeft: 4,
  },
  titleBlock: {
    marginRight: 16,
    alignItems: 'center',
  },
  volume: {
    color: theme.colors.gray[5],
  },
  downloadBlock: {
    fontSize: 11,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  downloadIcon: {
    fontSize: 16,
    color: theme.colors.gray[5],
    marginRight: 4,
  },
});
