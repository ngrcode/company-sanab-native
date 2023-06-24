import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: 24,
    paddingBottom: 28,
    backgroundColor: theme.colors.gray[4],
  },
  infoBlock: {
    backgroundColor: theme.colors.gray[2],
    width: '100%',
  },
  imgBtnBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 50,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 54,
    paddingRight: 24,
    paddingLeft: 29,
  },
  borderBtm: {
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colors.gray[0],
    borderBottomWidth: 1,
  },
  descWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 10,
  },
  desc: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    color: theme.colors.gray[0],
    marginLeft: 18,
  },
  title: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    color: theme.colors.singletons.black,
  },
});
