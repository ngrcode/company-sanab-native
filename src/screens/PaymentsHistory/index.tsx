import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from './style';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/AntDesign';

const temporaryArr = [
  {
    id: 0,
    title: 'تاریخ',
    desc: <Text style={{textAlign: 'right'}}>1401/11/7 - 12:10</Text>,
  },
  {id: 1, title: 'مبلغ', desc: <Text>160,000ریال</Text>},
  {id: 2, title: 'از طریق', desc: <Text>بانک سامان</Text>},
  {
    id: 3,
    title: 'خرید',
    desc: (
      <View style={styles.subscriptionBlock}>
        <Button
          title="خرید اشتراک"
          btnType="orange"
          width={70}
          fontSize={11}
          padding={5}
        />
        <Text style={styles.subscription}> اشتراک یک ماهه</Text>
      </View>
    ),
  },
  {
    id: 4,
    title: 'وضعیت',
    desc: (
      <View style={styles.status}>
        <Text style={styles.statusText}>لغو شده</Text>
        <Icon name="checkcircleo" style={styles.statusIcon} />
      </View>
    ),
  },
  {
    id: 5,
    title: 'شناسه خرید',
    desc: <Text style={{textAlign: 'right'}}>-</Text>,
  },
  {id: 6, title: 'تخفیف', desc: <Text style={{textAlign: 'right'}}>-</Text>},
];

function ContactUs() {
  return (
    <ScrollView>
      {[1, 2, 3, 4, 5].map((number: any) => (
        <View key={number} style={styles.card}>
          {temporaryArr.map((item: any, index: number) => {
            const {id, title, desc} = item;
            return (
              <View
                key={id}
                style={
                  temporaryArr.length !== index + 1
                    ? [styles.itemBlock, styles.notLastChild]
                    : styles.itemBlock
                }>
                <View style={styles.desc}>{desc}</View>
                <Text style={styles.title}>{title}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
}
export default ContactUs;
