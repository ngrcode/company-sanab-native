import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  item: {
    borderStyle: 'solid',
    borderBottomColor: theme.colors.gray[7],
    borderBottomWidth: 1,
    backgroundColor: theme.colors.singletons.white,
    margin: 0,
    padding: 20,
  },
});
