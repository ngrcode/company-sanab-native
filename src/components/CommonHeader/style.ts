import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[7],
    height: 54,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.blue[0],
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
  },
});
