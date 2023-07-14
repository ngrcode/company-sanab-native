import * as Yup from 'yup';

export const profileInfo = (currentUser: any) => [
  {
    id: 0,
    title: 'شماره تلفن',
    desc: currentUser?.phone,
    onPress: (setState: any, setInput: any) => {
      setState(true);
      setInput('phone');
    },
  },
  {
    id: 1,
    title: 'ثبت ایمیل',
    desc: currentUser?.email || 'ثبت نشده',
    onPress: (setState: any, setInput: any) => {
      setState(true);
      setInput('email');
    },
  },
  {
    id: 2,
    title: 'پسوورد',
    desc: 'بازیابی',
    onPress: (setState: any, setInput: any) => {
      setState(true);
      setInput('password');
    },
  },
];

export const profileInfo2 = [
  {
    id: 0,
    title: 'تاریخچه پرداخت',
    navigatePath: 'PaymentsHistory',
  },
  {id: 1, title: 'تماس با ما', navigatePath: 'ContactUs'},
  {id: 2, title: 'درباره سناب', navigatePath: 'about'},
  {
    id: 3,
    title: 'به روزرسانی',
    desc: 'نسخه 9.0.5',
    navigatePath: '',
  },
];

export const emailSchema = () => {
  const recovery = Yup.object().shape({
    email: Yup.string()
      .required('وارد کردن فیلد مورد نظر الزامی میباشد!')
      .min(5, 'حداقل تعداد کاراکتر ها 5 میباشد!')
      .matches(
        '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
        'فرمت ایمیل مورد نظر اشتباه میباشد',
      ),
  });
  return recovery;
};

export const phoneSchema = () => {
  const recovery = Yup.object().shape({
    phone: Yup.string()
      .required('وارد کردن فیلد مورد نظر الزامی میباشد!')
      .matches('^(\\+98|0)?9\\d{9}$', 'فرمت شماره تماس مورد نظر اشتباه میباشد'),
  });
  return recovery;
};

export const passwordSchema = () => {
  const recovery = Yup.object().shape({
    password: Yup.string()
      .required('وارد کردن فیلد مورد نظر الزامی میباشد!')
      .min(5, 'حداقل تعداد کاراکتر ها 5 میباشد!'),
  });
  return recovery;
};

export const inuptPlaceholder = (input: string) => {
  return input === 'phone'
    ? 'شماره خودرا وارد کنید'
    : input === 'email'
    ? 'ایمیل خودرا وارد کنید'
    : 'رمز خودرا وارد کنید';
};

export const onChangeInput = (
  e: any,
  setFieldValue: Function,
  input: string,
) => {
  setFieldValue(
    input === 'phone' ? 'phone' : input === 'email' ? 'email' : 'password',
    e,
  );
};

export const validationSchema = (input: string) => {
  return input === 'email'
    ? emailSchema
    : input === 'phone'
    ? phoneSchema
    : passwordSchema;
};

export const title = (input: string) => {
  return input === 'phone'
    ? 'ثبت شماره تلفن'
    : input === 'email'
    ? 'ثبت ایمیل'
    : 'ثبت رمز عبور';
};
