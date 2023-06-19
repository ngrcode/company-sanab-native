import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 17,
  },
  version: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.singletons.black,
    marginBottom: 12,
  },
  aboutUsWrapper: {
    marginLeft: 24,
    marginRight: 24,
  },
  aboutUs: {
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 19,
    marginBottom: 12,
    marginTop: 16,
    color: theme.colors.blue[0],
  },
  specific: {
    marginTop: 40,
    marginBottom: 12,
    color: theme.colors.blue[0],
  },
  buttonBlock: {
    borderBottomStyle: 'solid',
    paddingBottom: 16,
    borderBottomColor: theme.colors.gray[7],
    borderBottomWidth: 1,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
});
