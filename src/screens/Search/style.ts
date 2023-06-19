import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: colors.gray[7],
    padding: 10,
  },

  hotText: {
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 16,
    color: colors.gray[13],
    textAlign: 'center',
    marginTop: 12,
  },
  searchBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  searchText: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: colors.singletons.black,
    textAlign: 'center',
  },
  arrowIcon: {
    color: colors.singletons.black,
    marginRight: 7,
  },
  searchIcon: {
    right: 11,
  },
  cancelIcon: {
    left: 11,
  },
  inputIcons: {
    color: colors.gray[9],
    fontSize: 20,
    position: 'absolute',
  },
  inputBlock: {
    position: 'relative',
  },
});

export const inputStyles = (value: string) =>
  StyleSheet.create({
    input: {
      backgroundColor: colors.singletons.white,
      borderStyle: 'solid',
      borderColor: colors.gray[13],
      borderWidth: 1,
      borderRadius: 2,
      paddingRight: 8,
      textAlign: value ? 'center' : 'right',
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 19,
      color: colors.singletons.black,
    },
    inputIconBlock: {
      height: '100%',
      position: 'absolute',
      zIndex: 5,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      display: value ? 'flex' : 'none',
    },
  });
