import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';
const {colors} = theme;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 80,
    position: 'relative',
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  imgWrapper: {
    display: 'flex',
    marginTop: 16,
  },
  image: {
    width: 45,
    height: 69,
    borderRadius: 2,
    overflow: 'hidden',
  },
  text: {
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 16,
    color: colors.gray[13],
    marginRight: 12,
  },
});
