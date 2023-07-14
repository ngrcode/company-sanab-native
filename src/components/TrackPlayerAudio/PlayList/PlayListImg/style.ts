import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  imgBlock: {
    marginTop: 12,
    flexDirection: 'row-reverse',
    marginHorizontal: 24,
  },
  img: {
    width: 90,
    height: 140,
    marginLeft: 8,
  },
  text: {
    color: '#6D6D6D',
    fontSize: 11,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  textBlock: {
    flexDirection: 'row-reverse',
    marginTop: 21,
  },
  trackProgress: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    color: '#eee',
  },
  iconClock: {
    fontSize: 15,
    marginLeft: 4,
  },
  playlist: {
    marginTop: 40,
    marginBottom: 40,
  },
  playlistItem: {
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
});
