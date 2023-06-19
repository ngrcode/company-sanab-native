import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

interface Props {
  title: string;
  description: string;
  iconName: string;
  iconColor: any;
}

function Section(props: Props) {
  const {title, description, iconName, iconColor} = props;
  return (
    <View style={styles().container}>
      <View style={styles().titleBlock}>
        <Text style={styles().text}>{title}</Text>
        <View>
          <Icon name={iconName} style={styles(iconColor).icon} />
        </View>
      </View>
      <Text style={styles().desc}>{description}</Text>
    </View>
  );
}

export default Section;
