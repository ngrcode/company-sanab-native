import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopColor: '#DDDDDD',
    borderBottomColor: '#DDDDDD',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 12,
    paddingVertical: 8,
    marginHorizontal: 24,
  },
  flexBlock: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  headPhoneIcon: {
    color: theme.colors.gray[5],
    fontSize: 20,
    marginLeft: 4,
  },
  duration: {
    color: theme.colors.gray[5],
    fontSize: 11,
  },
});
