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
import Test from 'screens/Test';
import CategoryItem from 'screens/Category';

const dontShowTabBar = {
  tabBarItemStyle: {
    display: 'none',
  },
};

export const routes = [
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
    name: 'payments-history',
    component: PaymentsHistory,
    options: {
      tabBarLabel: 'تاریخچه پرداخت ها',
      title: 'تاریخچه پرداخت ها',
      ...dontShowTabBar,
    },
  },

  {
    name: 'login-or-register',
    component: LoginOrRegister,
    options: {
      tabBarLabel: `${i18next.t('auth.profile')}`,
      title: `${i18next.t('auth.profile')}`,
      ...dontShowTabBar,
    },
  },
  {
    name: 'contact-us',
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
    name: 'auth',
    component: Auth,
    options: {headerShown: false, ...dontShowTabBar},
  },
  {
    name: 'purchase-basket',
    component: PurchaseBasket,
    options: {
      tabBarLabel: `${i18next.t('gl.purchaseBasket')}`,
      ...dontShowTabBar,
    },
  },
];

// {
//   name: 'unauthorized',
//   component: Unauthorized,
//   options: {
//     headerShown: false,
//     ...dontShowTabBar,
//   },
// },
// {
//   name: 'test',
//   component: Test,
//   options: {
//     tabBarLabel: 'test',
//     title: 'test',
//   },
// },
// {
//   name: 'category-item',
//   component: CategoryItem,
//   options: {
//     tabBarLabel: `${i18next.t('gl.search')}`,
//     title: `${i18next.t('gl.search')}`,
//   },
// },
