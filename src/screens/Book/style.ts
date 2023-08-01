import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const stylesFunc = (prop: any) =>
  StyleSheet.create({
    introduceBlock: {
      marginTop: 51,
      width: '100%',
      display: prop ? 'flex' : 'none',
      marginBottom: 5,
      // borderStyle: 'solid',
      // borderColor: 'red',
      // borderWidth: 1,
    },
  });

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  closeIcon: {
    color: theme.colors.gray[9],
    textAlign: 'right',
    fontSize: 20,
    marginRight: 26,
    marginTop: 10,
  },
  margin24: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 30,
  },
  imgWrapper: {
    elevation: 5,
    shadowColor: theme.colors.gray[8],
    width: 201,
    height: 252,
    marginTop: 32,
  },
  titleImg: {
    borderRadius: 3,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 26,
    color: theme.colors.singletons.black,
    marginTop: 16,
  },
  breadCrumbs: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[0],
    marginTop: 12,
  },
  shareIconBlock: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 19,
  },
  printPrice: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[5],
  },
  pageNumber: {
    borderStyle: 'solid',
    borderLeftColor: theme.colors.gray[5],
    borderLeftWidth: 1,
    paddingLeft: 6,
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[5],
  },
  shareIcon: {
    fontSize: 20,
    color: theme.colors.singletons.black,
  },
  bookmarkIcon: {
    fontSize: 25,
    color: theme.colors.singletons.black,
  },

  introduceTitle: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    color: theme.colors.singletons.black,
    marginBottom: 30,
  },
  introduceDesc: {
    marginTop: 12,
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[5],
    borderStyle: 'solid',
    borderBottomColor: theme.colors.gray[2],
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginBottom: 24,
    textAlign: 'right',
  },
  borderBottom: {
    borderStyle: 'solid',
    borderBottomColor: theme.colors.gray[2],
    borderBottomWidth: 1,
    marginRight: 24,
    marginLeft: 24,
  },
  mr24: {
    // marginRight: 24,
  },
  ml24: {
    // marginLeft: 24,
  },
  mrl24: {
    // marginLeft: 24,
    // marginRight: 24,
  },
  mb24: {
    marginBottom: 24,
  },
  mt24: {
    marginTop: 24,
  },
  mbl24: {
    marginBottom: 24,
    marginLeft: 24,
  },
  usersComment: {
    marginTop: 34,
    // marginRight: 24,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: theme.colors.gray[2],
  },
});
