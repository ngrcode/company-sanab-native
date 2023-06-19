import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  imgBlockWrapper: {
    marginBottom: 32,
  },
  img: {
    width: 148,
    height: 220,
    borderRadius: 3,
  },
  title: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: '#000000',
    textAlign: 'center',
    marginTop: 8,
  },
  author: {
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 16,
    color: theme.colors.gray[0],
    textAlign: 'center',
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
