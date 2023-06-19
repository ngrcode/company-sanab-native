import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {tabBarName} from 'utils/common.utils';
import HomeHeader from 'components/HomeHeader';
import {theme} from 'shared/theme';
import {StyleSheet} from 'react-native';
import {tabBarStyle, tabBarHeader} from 'utils/common.utils';
import TabBarHeader from 'components/ScreenHeader';

import {routes} from './routes';

const styles = (props?: any) =>
  StyleSheet.create({
    icon: {
      color: props.focused ? theme.colors.blue[0] : theme.colors.gray[0],
      fontSize: 20,
    },
  });

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="myLibrary"
      sceneContainerStyle={{
        backgroundColor: colors.gray[4],
      }}
      screenOptions={({route, navigation, options}: any) => ({
        tabBarStyle: tabBarStyle(route),
        header: ({route, navigation, options}: any) => {
          return (
            <TabBarHeader
              route={route}
              navigation={navigation}
              options={options}
            />
          );
        },
        tabBarIcon: ({focused}) => (
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
  );
}
