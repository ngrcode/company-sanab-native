import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  containerr: {
    marginRight: 24,
  },
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  scroll: {
    marginBottom: 24,
    transform: [{scaleX: -1}],
  },
  block: {
    transform: [{scaleX: -1}],
    width: 285,
    height: 178,
    backgroundColor: theme.colors.gray[2],
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    marginRight: 16,
  },
  imgBlock: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
  },
  title: {
    color: theme.colors.singletons.black,
    marginRight: 8,
  },
  desc: {
    color: theme.colors.gray[5],
    marginTop: 23,
  },
  date: {
    color: theme.colors.singletons.black,
    marginTop: 'auto',
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
