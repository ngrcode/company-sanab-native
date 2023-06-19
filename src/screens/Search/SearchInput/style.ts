import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[7],
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  inputWrapper: {
    position: 'relative',
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
      height: 40,
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
