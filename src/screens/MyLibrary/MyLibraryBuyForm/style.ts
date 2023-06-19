import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: colors.gray[12],
    padding: 16,
    marginTop: 32,
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
});
