import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  label: {
    color: theme.colors.singletons.black,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
  },
  indicatorStyle: {backgroundColor: 'transparent', color: 'black'},
});
