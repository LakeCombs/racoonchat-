import * as Yup from 'yup';

export const defaultValues = {
  email: '',
  password: '',
  userName: '',
  verifyPassword: '',
};

// export const validationSchema = Yup.object().shape({
//   email: Yup.string().email('invalid email address').required(),
//   password: Yup.string()
//     .required('Required')
//     .min(8, 'Must be at least 8 characteers'),
//   verifyPassword: Yup.string()
//     .required('Required')
//     .oneOf([Yup.ref('password'), null], 'passwords must match'),
//   userName: Yup.string()
//     .required('Required')
//     .matches(/^\$*$/, 'No spaces')
//     .min(3, 'must be at least 3 characters'),
// });

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('invalid email addres').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'must be at least 8 characters'),
  verifyPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'password must match'),
  userName: Yup.string()
    .required('Required')
    .matches(/^\S*$/, 'no spaces')
    .min(3, 'must be at least 3 characters'),
});
