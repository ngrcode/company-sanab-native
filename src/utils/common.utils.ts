import HomeHeader from 'components/HomeHeader';
import {theme} from 'shared/theme';

export const tabBarName = (route: any) => {
  let name;
  if (route.name === 'myLibrary') {
    name = 'book';
  } else if (route.name === 'home') {
    name = 'home';
  } else if (route.name === 'search') {
    name = 'search';
  } else {
    name = 'bars';
  }
  return name;
};

export const tabBarStyle = (route: any) => ({
  backgroundColor: theme.colors.gray[4],
  borderTopColor: theme.colors.gray[7],
  display:
    route.name === 'payments-history' ||
    route.name === 'profile' ||
    route.name === 'splash'
      ? 'none'
      : 'flex',
});
