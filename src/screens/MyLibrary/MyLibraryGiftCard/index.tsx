import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';
import bgImg from 'assets/images/subscription.png';
import gift from 'assets/images/gift.png';

function MyLibraryBuyForm() {
  return (
    <View style={styles.container}>
      <View style={styles.imgTextBlock}>
        <View style={styles.textBlock}>
          <View style={styles.giftWrapper}>
            <Text style={styles.title}>کارت هدیه اشتراک سناب</Text>
            <Image source={gift} style={styles.giftImg} />
          </View>
          <Text style={styles.period}> 1 هفته</Text>
          <Text style={styles.price}>15,000 تومان</Text>
        </View>
        <Image
          source={bgImg}
          style={{
            width: '100%',
            height: 100,
          }}
        />
      </View>
    </View>
  );
}
export default MyLibraryBuyForm;
