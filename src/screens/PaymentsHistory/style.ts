import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  card: {
    borderStyle: 'solid',
    borderColor: theme.colors.gray[0],
    borderWidth: 1,
    height: 380,
    margin: 24,
    padding: 20,
    borderRadius: 5,
  },
  itemBlock: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  notLastChild: {
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colors.gray[6],
    borderBottomWidth: 1.25,
  },
  title: {
    width: '35%',
  },
  desc: {
    width: '65%',
    textAlign: 'right',
  },
  subscription: {
    color: theme.colors.orange[1],
    marginTop: 8,
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.singletons.black,
    backgroundColor: theme.colors.gray[2],
    width: 80,
    padding: 3,
    borderRadius: 2,
    marginLeft: 'auto',
    fontSize: 11,
  },
  statusText: {
    marginRight: 7,
  },
  statusIcon: {
    color: theme.colors.green[2],
  },
  subscriptionBlock: {
    color: theme.colors.orange[1],
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
