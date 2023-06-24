import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 24,
  },
  notFound: {
    marginLeft: 16,
    marginTop: 16,
    height: 60,
  },
  horizontalScroll: {
    transform: [{scaleX: -1}],
  },
  imgWrapper: {
    shadowColor: theme.colors.singletons.black,
    elevation: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
  },
  img: {
    width: 90,
    height: 140,
    borderRadius: 5,
    transform: [{scaleX: -1}],
  },
});
