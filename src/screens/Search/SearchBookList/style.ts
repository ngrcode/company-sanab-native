import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';
const {colors} = theme;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    marginVertical: 16,
    marginHorizontal: 24,
    position: 'relative',
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
