import HomeHeader from 'components/HomeHeader';
import {theme} from 'shared/theme';
import {BackHandler} from 'react-native';

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

export const backHandlerMethod = (
  navigation: any,
  navigateTo: string,
  navigationParam: any,
) => {
  const backAction = () => {
    navigationParam
      ? navigation.navigate(navigateTo, navigationParam)
      : navigation.navigate(navigateTo);
    return true;
  };
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );
  return () => backHandler.remove();
};
