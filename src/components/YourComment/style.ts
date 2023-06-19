import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    backgroundColor: theme.colors.gray[2],
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingTop: 24,
    paddingBottom: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  yourCommentBlock: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 72,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  imgBlock: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
  },
  title: {
    color: theme.colors.singletons.black,
    marginRight: 8,
  },
  subTitle: {
    color: theme.colors.gray[0],
    marginLeft: 'auto',
    marginBottom: 20,
  },
  desc: {
    color: theme.colors.gray[5],
  },
  date: {
    color: theme.colors.singletons.black,
    marginTop: 11,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    paddingRight: 5,
    color: theme.colors.blue[0],
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
  },
  btnIcon: {
    color: theme.colors.blue[0],
    fontSize: 15,
  },
  descBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
