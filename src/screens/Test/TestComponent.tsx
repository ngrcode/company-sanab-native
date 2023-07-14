import React from 'react';
import {Text, View} from 'react-native';

function ContactUs(props: any) {
  return (
    <View>
      <Text>component</Text>
      {props.footer}
    </View>
  );
}
export default ContactUs;
