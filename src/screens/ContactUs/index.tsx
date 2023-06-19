import React from 'react';
import {Text, View} from 'react-native';
import {contactUsItems} from 'utils/constant.utils';
import Section from './Section';
import {styles} from './style';
import Map from 'screens/ContactUs/Map';

function ContactUs() {
  return (
    <View style={styles.container}>
      {contactUsItems.map((item: any) => {
        const {iconName, title, description, id, iconColor} = item;
        return (
          <Section
            key={id}
            title={title}
            description={description}
            iconName={iconName}
            iconColor={iconColor}
          />
        );
      })}
      {/* <Map /> */}
    </View>
  );
}
export default ContactUs;
