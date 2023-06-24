import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const stylesFunc = (props: any) =>
  StyleSheet.create({
    fullBar: {
      width: props,
      height: 3,
      backgroundColor: theme.colors.blue[0],
      position: 'absolute',
      overflow: 'visible',
      marginBottom: 100,
    },
    playerPosition: {
      position: 'absolute',
      left: props,
      top: '-80%',
      width: 8,
      height: 8,
      backgroundColor: theme.colors.blue[0],
      borderRadius: 4,
    },
  });
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 10,
  },
  trackProgress: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    color: '#eee',
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
  bar: {
    position: 'relative',
    alignSelf: 'center',
    width: '90%',
    height: 3,
    marginTop: 58,
    marginBottom: 100,
    backgroundColor: theme.colors.gray[7],
  },
});
