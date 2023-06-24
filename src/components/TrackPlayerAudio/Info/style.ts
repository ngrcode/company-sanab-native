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
  trackProgress: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    color: '#eee',
  },
  songTitle: {
    fontSize: 32,
    marginTop: 50,
    color: '#ccc',
  },
  artistName: {
    fontSize: 24,
    color: '#888',
  },
});
