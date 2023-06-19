import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sanab: {
    fontWeight: '900',
    color: theme.colors.blue[0],
    fontSize: 22,
  },
  library: {
    color: theme.colors.blue[0],
    fontSize: 18,
    fontWeight: '400',
  },
});
