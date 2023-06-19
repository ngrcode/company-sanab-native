import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.gray[0],
    width: '100%',
    textAlign: 'right',
  },
});
