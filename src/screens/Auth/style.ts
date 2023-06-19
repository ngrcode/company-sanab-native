import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    display: 'flex',
    alignItems: 'center',
  },
  touchableBlock: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  touchable: {
    width: '80%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: 64,
  },
  logo: {
    width: 50,
    height: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
  },
  formik: {
    width: '100%',
  },
});
