import * as Yup from 'yup';

export const loginOrRegisterInfo = [
  {id: 0, title: 'تماس با ما', navigateTo: 'contact-us'},
  {id: 1, title: 'درباره سناب', navigateTo: 'about'},
  {id: 2, title: 'به روزرسانی', desc: 'نسخه 9.0.5', navigateTo: 'contact-us'},
];

export const validateSchema = (showRecovery: any) => {
  const login = Yup.object().shape({
    phone: Yup.string().required('وارد کردن فیلد مورد نظر الزامی میباشد!'),
  });
  const recovery = Yup.object().shape({
    recoveryCode: Yup.string()
      .required('وارد کردن فیلد مورد نظر الزامی میباشد!')
      .min(4, 'حداقل تعداد کاراکتر ها 4 میباشد!'),
  });
  return showRecovery ? recovery : login;
};
