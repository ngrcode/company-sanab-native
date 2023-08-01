import {StyleSheet, Dimensions} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 38,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - 350,
    // borderStyle: 'solid',
    // borderColor: 'green',
    // borderWidth: 10,
  },
  block: {
    display: 'flex',
    backgroundColor: colors.gray[12],
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.singletons.black,
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.singletons.white,
    textAlign: 'right',
    paddingRight: 12,
  },
  textarea: {
    textAlignVertical: 'top',
  },
  registerBtn: {
    // marginTop: 'auto',
    backgroundColor: theme.colors.blue[0],
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  registerText: {
    color: theme.colors.singletons.white,
    fontWeight: '700',
    fontSize: 15,
  },
});
