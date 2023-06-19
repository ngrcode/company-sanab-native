import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 16,
    borderStyle: 'solid',
    borderColor: theme.colors.blue[0],
    borderBottomWidth: 1,
    position: 'relative',
  },
  textWrapper: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.blue[0],
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.blue[0],
    backgroundColor: theme.colors.gray[4],
    paddingLeft: 10,
    paddingRight: 10,
  },
});
