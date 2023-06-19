import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = (iconColor?: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.gray[2],
      marginBottom: 24,
      padding: 8,
    },
    titleBlock: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 12,
    },
    text: {
      color: theme.colors.singletons.black,
      fontWeight: '500',
      fontSize: 13,
      lineHeight: 22,
    },
    icon: {
      fontSize: 17,
      marginLeft: 10,
      backgroundColor: iconColor,
      padding: 5,
      borderRadius: 15,
      textAlign: 'center',
      alignSelf: 'center',
    },
    desc: {
      color: theme.colors.gray[5],
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 22,
      textAlign: 'right',
    },
  });
