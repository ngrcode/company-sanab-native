import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  errors: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.red[2],
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    marginTop: 24,
    textAlign: 'center',
  },
  inputButton: {
    marginTop: 53,
  },
  touchable: {
    width: '90%',
  },
  center: {
    alignItems: 'center',
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
    marginTop: 53,
    width: '100%',
  },
  textInput: {
    height: 40,
    marginBottom: 36,
  },
  noAccount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
});
