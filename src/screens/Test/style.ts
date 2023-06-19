import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
  },
  title: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.singletons.black,
  },
  desc: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    marginTop: 12,
    color: theme.colors.gray[5],
  },
  imageDescContainer: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
  name: {
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 16,
    color: theme.colors.gray[0],
  },
  time: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.singletons.black,
  },
  discount: {
    textDecorationLine: 'line-through',
    color: theme.colors.gray[5],
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 16,
  },
  booksTitle: {
    color: theme.colors.singletons.black,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    marginTop: 32,
    marginBottom: 12,
  },
});
