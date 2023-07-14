import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet} from 'react-native';

import {tabBarName} from 'utils/common.utils';
import {theme} from 'shared/theme';
import TabBarHeader from 'components/ScreenHeader';
import BookModal from 'components/BookModal';
import {routes} from './routes';

const styles = (props?: any) =>
  StyleSheet.create({
    icon: {
      color: props.focused ? theme.colors.blue[0] : theme.colors.gray[0],
      fontSize: 20,
    },
    img: {
      width: 90,
      height: 140,
      marginLeft: 8,
    },
  });

const Tab = createBottomTabNavigator<any>();

export default function TabNavigator() {
  const {colors} = useTheme();

  return (
    <>
      <BookModal />
      <Tab.Navigator
        backBehavior="history"
        initialRouteName="home"
        sceneContainerStyle={{
          backgroundColor: colors.gray[4],
        }}
        screenOptions={({route}: any) => ({
          tabBarStyle: {
            backgroundColor: theme.colors.gray[4],
            borderTopColor: theme.colors.gray[7],
            display:
              route.name === 'PaymentsHistory' ||
              route.name === 'splash' ||
              route.name === 'Book'
                ? 'none'
                : 'flex',
          },
          /* eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow */
          header: ({route, navigation, options}: any) => {
            return (
              <TabBarHeader
                route={route}
                navigation={navigation}
                options={options}
              />
            );
          },
          /*eslint-disable-next-line react/no-unstable-nested-components*/
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon
              name={tabBarName(route)}
              style={styles({focused: focused}).icon}
            />
          ),
          tabBarActiveTintColor: colors.blue[0],
          tabBarInactiveTintColor: colors.gray[0],
        })}>
        {routes &&
          routes?.map((item: any) => {
            const {name, component, options} = item;
            return (
              <Tab.Screen
                key={name}
                name={name}
                component={component}
                options={options}
              />
            );
          })}
      </Tab.Navigator>
    </>
  );
}
