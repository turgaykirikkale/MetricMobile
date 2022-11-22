import {rulesEnums} from '../../Utils/Enums';

const emailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidation =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!~'%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

export const Validation = (type, value) => {
  switch (type) {
    case rulesEnums.email:
      return [
        {
          isValid:
            value || ''
              ? emailValidation.test(String(value).toLowerCase())
              : null,
          errorMessage: 'Please enter correct email.',
        },
      ];
    case rulesEnums.name:
      return [
        {
          isValid: value ? value.length >= 2 : null,
          errorMessage: 'Please enter correct name.',
        },
      ];
    case rulesEnums.surname:
      return [
        {
          isValid: value ? value.length >= 2 : null,
          errorMessage: 'Please enter correct surname.',
        },
      ];
    case rulesEnums.password:
      return [
        {
          isValid: value ? passwordValidation.test(String(value)) : null,
          errorMessage:
            'Your password must contain at least 8 digits, upper and lower case letters, numbers, and symbols.',
        },
      ];
    case rulesEnums.code:
      return [
        {
          isValid: value ? value.length >= 6 && value.length <= 8 : null,
          errorMessage: 'Please enter correct code',
        },
      ];
    case rulesEnums.moneyInput:
      return [
        {
          isValid: value ? value.length >= 1 : null,
          errorMessage: 'Should not be empty',
        },
      ];
    default:
      break;
  }
};

export default {
  Validation,
};
