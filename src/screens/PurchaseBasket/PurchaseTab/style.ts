import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
    paddingLeft: 24,
    paddingRight: 24,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imgBlockWrapper: {
    marginBottom: 32,
  },
  imgBlock: {
    width: 148,
    height: 220,
  },
  img: {
    width: '100%',
    height: '100%',
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
});
