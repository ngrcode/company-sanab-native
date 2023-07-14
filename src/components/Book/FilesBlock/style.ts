import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  btnBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.blue[0],
  },
  audio: {
    bgColor: 'white',
    color: theme.colors.blue[0],
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: theme.colors.blue[0],
    borderWidth: 1,
    height: 45,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  angleLeftIcon: {
    color: theme.colors.blue[0],
  },
  readSample: {
    color: theme.colors.blue[0],
  },
});
