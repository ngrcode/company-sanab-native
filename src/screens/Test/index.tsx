import React from 'react';
import {Text, View} from 'react-native';
import TestComponent from './TestComponent';

function ContactUs() {
  return (
    <View>
      <Text>test</Text>
      <TestComponent footer={<Text>negar</Text>} />
    </View>
  );
}
export default ContactUs;
