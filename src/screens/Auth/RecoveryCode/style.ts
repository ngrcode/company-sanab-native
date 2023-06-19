import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  center: {
    alignItems: 'center',
    marginTop: 64,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
    color: theme.colors.singletons.black,
  },
  editText: {
    fontSize: 16,
    color: theme.colors.blue[0],
    paddingRight: 4,
  },
  editIcon: {
    fontSize: 16,
    color: theme.colors.blue[0],
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumber: {
    color: theme.colors.singletons.black,
    marginRight: 10,
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: theme.colors.singletons.black,
    marginRight: 5,
    textAlign: 'center',
    color: theme.colors.singletons.black,
  },
  sendAgain: {
    color: theme.colors.blue[0],
    marginRight: 10,
  },
  notGetCodeBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  notGetCode: {
    color: theme.colors.gray[0],
  },
  mt20: {
    marginTop: 20,
    color: theme.colors.red[2],
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
  },
  resendBlock: {
    flexDirection: 'row-reverse',
    marginTop: 24,
  },
  focusCell: {
    borderColor: '#000',
  },
});
