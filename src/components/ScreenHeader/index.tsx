import React from 'react';
import HomeHeader from 'components/HomeHeader';
import CommonHeader from 'components/CommonHeader';

export default function TabBarHeader(props: any) {
  const {route, options} = props;
  return (
    <>
      {route.name === 'home' ? (
        <HomeHeader />
      ) : (
        <CommonHeader options={options} route={route} />
      )}
    </>
  );
}
