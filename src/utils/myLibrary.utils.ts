import * as Yup from 'yup';

export const purchasesArr = [
  {id: 0, price: '15,000 تومان', period: '1 هفته'},
  {id: 1, price: '15,000 تومان', period: '1 ماه'},
  {id: 2, price: '200,000 تومان', period: '6 ماه '},
  {id: 3, price: '200,000 تومان', period: '6 ماه '},
  {id: 4, price: '200,000 تومان', period: '6 ماه '},
  {id: 5, price: '200,000 تومان', period: '6 ماه '},
];

export const discountCodeSchema = () => {
  const recovery = Yup.object().shape({
    code: Yup.string()
      .required('وارد کردن فیلد مورد نظر الزامی میباشد!')
      .min(5, 'حداقل تعداد کاراکتر ها 5 میباشد!'),
  });
  return recovery;
};
