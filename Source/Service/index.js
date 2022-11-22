import axios from 'axios';
import * as URL from './URL';

const Api_Token = 'buraasıdüzeltilip araştırılacak';

export const MMService = axios.create({
  baseURL: URL.baseURL,
  // withCredentials: true,
  headers: {
    // ApiToken: Api_Token,
    'Content-Type': 'application/json',
    // 'Ocp-Apim-Subscription-Key': 'fe892b2e-92d3-4aa5-aade-c52971c368bd',
    // languageId: 1,
    // Accept: 'application/xml',
    // 'User-Agent': 'bitci',
  },
});

export const setAuthTokenToHeader = authToken => {
  // MMService.interceptors.request.use(async config => {
  //   if (authToken) {
  //     config.headers.Cookie = 'session=' + authToken;
  //     console.log('AUTHTOKENFROmSERVİCE', authToken);
  //     console.log('MMSERVİCEHEADER', MMService.defaults.headers);
  //   }
  // });
  if (authToken) {
    console.log('AUTHTOKENFROmSERVİCE', authToken);
    MMService.defaults.headers.common.Authorization = 'Bearer ' + authToken;
    console.log('MMSERVİCEHEADER', MMService.defaults.headers);
  }
};

export const deleteAuthorizationHeader = () => {
  delete MMService.defaults.headers.common.Authorization;
};

let selectedLanguage = 'en';

//interceptorlar buraya gelecek buranın documentasyonuna bakmak lazım.

const services = {
  Register: requestBody => {
    const generatedRequestBody = {
      ...requestBody,
      language: selectedLanguage,
    };
    return MMService.post(URL.registerURL, generatedRequestBody);
  },
  Login: requestBody => {
    const generatedRequestBody = {
      ...requestBody,
      language: selectedLanguage,
    };
    return MMService.post(URL.loginURL, generatedRequestBody);
  },

  RegisterOtp: requestBody => {
    const generatedRequestBody = {
      ...requestBody,
      language: selectedLanguage,
    };
    return MMService.post(URL.registerOtpURL, generatedRequestBody);
  },

  LoginOtp: requestBody => {
    const generatedRequestBody = {
      ...requestBody,
      language: selectedLanguage,
    };
    return MMService.post(URL.loginOtpURL, generatedRequestBody);
  },
  CustomerInfo: () => {
    return MMService.get(URL.customerInfoURL);
  },
  Logout: () => {
    return MMService.post(URL.logoutUrl);
  },
};

export default services;
