import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const labelStyles = (focused: boolean) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // flex: 1,
      borderRadius: 2,
      minWidth: 56,
      height: 20,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: focused ? colors.blue[0] : colors.gray[13],
      backgroundColor: focused
        ? ' rgba(22, 186, 197, 0.2)'
        : colors.singletons.white,
    },
    label: {
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 19,
      color: focused ? colors.blue[0] : colors.gray[13],
      textAlign: 'center',
    },
  });

export const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: 'transparent',
    color: 'black',
  },
  block: {
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray[2],
    marginHorizontal: 24,
    paddingHorizontal: 24,
    marginTop: 10,
  },
  text: {
    color: colors.orange[1],
  },
});
