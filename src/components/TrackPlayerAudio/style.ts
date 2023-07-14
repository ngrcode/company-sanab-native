import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  iconsBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  iconPlayBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue[0],
    width: 33,
    height: 33,
    borderRadius: 17,
  },
  iconPlay: {
    fontSize: 46,
    marginLeft: -6,
    marginTop: -1,
  },
  duration: {
    color: theme.colors.gray[5],
    fontSize: 11,
  },
  sliderTimeBlock: {
    flexDirection: 'row-reverse',
  },
});
