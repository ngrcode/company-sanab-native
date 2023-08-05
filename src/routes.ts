import HomeScreen from 'screens/Home';
import Splash from 'screens/Splash';
import PaymentsHistory from 'screens/PaymentsHistory';
import Profile from 'screens/Profile';
import MyLibraryScreen from 'screens/MyLibrary';
import CategoryScreen from 'screens/Category';
import SearchScreen from 'screens/Search';
import i18next from 'i18next';
import LoginOrRegister from 'screens/LoginOrRegister';
import ContactUs from 'screens/ContactUs';
import About from 'screens/About';
import Auth from 'screens/Auth';
import PurchaseBasket from 'screens/PurchaseBasket';
import AudioBook from 'screens/AudioBook';
import Book from 'screens/Book';
import CommentList from 'screens/CommentList';

// const {token} = store.getState().common;

const dontShowTabBar = {
  tabBarItemStyle: {
    display: 'none',
  },
};

const showOrNotByToken = (token: any) => {
  return {
    tabBarItemStyle: {
      display: token ? 'flex' : 'none',
    },
  };
};

export const routes = (token: any) => [
  // {
  //   name: 'test',
  //   component: Test,
  //   options: {
  //     tabBarLabel: `${i18next.t('gl.search')}`,
  //     title: `${i18next.t('gl.search')}`,
  //   },
  // },
  {
    name: 'Book',
    component: Book,
    options: {
      headerShown: false,
      ...dontShowTabBar,
    },
  },
  {
    name: 'CommentList',
    component: CommentList,
    options: {
      headerShown: false,
      ...dontShowTabBar,
    },
  },
  {
    name: 'search',
    component: SearchScreen,
    options: {
      tabBarLabel: `${i18next.t('gl.search')}`,
      title: `${i18next.t('gl.search')}`,
    },
  },
  {
    name: 'category',
    component: CategoryScreen,
    options: {
      tabBarLabel: `${i18next.t('gl.category')}`,
      title: `${i18next.t('gl.category')}`,
    },
  },
  {
    name: 'myLibrary',
    component: MyLibraryScreen,
    options: {
      tabBarLabel: `${i18next.t('gl.myLibrary')}`,
      title: `${i18next.t('gl.myLibrary')}`,
      ...showOrNotByToken(token),
    },
  },
  {
    name: 'home',
    component: HomeScreen,
    options: {
      tabBarLabel: `${i18next.t('gl.home')}`,
      title: `${i18next.t('gl.home')}`,
    },
  },
  {
    name: 'splash',
    component: Splash,
    options: {
      headerShown: false,
      ...dontShowTabBar,
    },
  },
  {
    name: 'profile',
    component: Profile,
    options: {
      tabBarLabel: `${i18next.t('auth.profile')}`,
      title: `${i18next.t('auth.profile')}`,
      ...dontShowTabBar,
    },
  },
  {
    name: 'LoginOrRegister',
    component: LoginOrRegister,
    options: {
      tabBarLabel: `${i18next.t('auth.profile')}`,
      title: `${i18next.t('auth.profile')}`,
      ...dontShowTabBar,
    },
  },
  {
    name: 'auth',
    component: Auth,
    options: {headerShown: false, ...dontShowTabBar},
  },
  {
    name: 'PaymentsHistory',
    component: PaymentsHistory,
    options: {
      tabBarLabel: 'تاریخچه پرداخت ها',
      title: 'تاریخچه پرداخت ها',
      ...dontShowTabBar,
    },
  },
  {
    name: 'AudioBook',
    component: AudioBook,
    options: {
      tabBarLabel: 'فایل صوتی',
      title: 'فایل صوتی',
      ...dontShowTabBar,
    },
  },
  {
    name: 'ContactUs',
    component: ContactUs,
    options: {...dontShowTabBar},
  },
  {
    name: 'about',
    component: About,
    options: {
      tabBarLabel: `${i18next.t('gl.about')}`,
      title: `${i18next.t('gl.about')}`,
      ...dontShowTabBar,
    },
  },
  {
    name: 'PurchaseBasket',
    component: PurchaseBasket,
    options: {
      tabBarLabel: `${i18next.t('gl.purchaseBasket')}`,
      ...dontShowTabBar,
    },
  },
];
