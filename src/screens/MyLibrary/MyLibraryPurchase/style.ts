import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 26,
    color: theme.colors.singletons.black,
  },
  desc: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[1],
  },
  mt24: {
    marginTop: 24,
  },
  mt8: {
    marginTop: 8,
  },
  mt54: {
    marginTop: 54,
  },
  price: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.singletons.black,
  },
  buySubs: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.singletons.black,
  },
  period: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 26,
    color: theme.colors.singletons.black,
    backgroundColor: theme.colors.orange[4],
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: theme.colors.gray[11],
    marginBottom: 16,
    paddingRight: 22,
    paddingLeft: 16,
  },
});

export const checkboxStyles = (isChecked: boolean) =>
  StyleSheet.create({
    checkbox: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    innerIconStyle: {
      borderColor: isChecked ? theme.colors.gray[11] : theme.colors.blue[0],
      width: 16,
      height: 16,
      borderRadius: 5,
    },
    iconStyle: {
      borderColor: isChecked ? theme.colors.gray[11] : theme.colors.blue[0],
      backgroundColor: isChecked ? theme.colors.gray[11] : theme.colors.blue[0],
      width: 16,
      height: 16,
      borderRadius: 5,
    },
    text: {
      textDecorationLine: 'none',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 22,
      color: theme.colors.singletons.black,
    },
  });
