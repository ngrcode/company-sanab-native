import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24,
    borderRadius: 4,
    overflow: 'hidden',
  },
  imgTextBlock: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.singletons.black,
  },
  giftWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  textBlock: {
    position: 'absolute',
    top: 11,
    bottom: 11,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  price: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.singletons.black,
    marginTop: 4,
  },
  period: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.singletons.black,
    backgroundColor: theme.colors.orange[4],
    marginTop: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  giftImg: {
    width: 30,
    height: 19,
  },
});
