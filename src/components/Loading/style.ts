import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray[5],
    opacity: 0.4,
    zIndex: 99999999999,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    // zIndex: 9999999999999999999999999999999999999999999999999999999999,
    position: 'absolute',
  },
});
