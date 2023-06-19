import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = (loading: any) =>
  StyleSheet.create({
    centeredView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.4,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: loading ? 'flex' : 'none',
    },
  });
