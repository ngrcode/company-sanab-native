import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import PurchaseTab from './PurchaseTab';
import {styles} from './style';

const renderScene = SceneMap({
  one: PurchaseTab,
  two: PurchaseTab,
  three: PurchaseTab,
});

const routes = [
  {key: 'three', title: 'کتاب های نشان شده'},
  {key: 'two', title: 'کتاب صوتی'},
  {key: 'one', title: 'کتاب الکترونیک'},
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const theme = useTheme();
  const {colors} = theme;
  const [index, setIndex] = useState(0);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={{backgroundColor: colors.gray[2]}}
      indicatorContainerStyle={{backgroundColor: colors.gray[2]}}
      labelStyle={styles.label}
      activeColor={colors.blue[0]}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{
        width: layout.width,
      }}
      sceneContainerStyle={{
        backgroundColor: colors.gray[3],
      }}
    />
  );
}
