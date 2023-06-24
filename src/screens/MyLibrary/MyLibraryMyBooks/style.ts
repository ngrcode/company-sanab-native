import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  title: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.blue[0],
    textAlign: 'center',
    marginBottom: 32,
  },
});
