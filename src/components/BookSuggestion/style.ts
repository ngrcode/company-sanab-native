import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginRight: 24,
  },
  grayBg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-end',
    paddingLeft: 24,
    backgroundColor: theme.colors.gray[1],
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    color: theme.colors.singletons.white,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 22,
  },
});
