import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMButton from '../../Components/UI/MMButton';
import MMTextInput from '../../Components/UI/MMTextInput';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import MMSelector from '../../Components/Composite/MMSelector';
import MMSelectCountryAndLanguageModal from '../../Components/Composite/MMSelectCountryAndLanguageModal';
import Countries from '../../Assets/Commons/MMCountries';
import MMService from '../../Service';
import {rulesEnums} from '../../Utils/Enums';
import MMInfoModal from '../../Components/Composite/MMModals/MMInfoModal';
import MMErrorModal from '../../Components/Composite/MMModals/MMErrorModal';
import MMSuccesModal from '../../Components/Composite/MMModals/MMSeccesModal';
import MMFullScreenLoader from '../../Components/UI/MMFullScreenLoader';
import {setDataToStorage} from '../../Utils/Storage';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  code: '',
  country: null,
};

const initialValidationState = {
  validEmail: false,
  validName: false,
  validSurname: false,
  validPassowrd: false,
  validCode: false,
};

const LoginScreen = props => {
  const FlexibleDesign = FlexibleDesigns();
  const [userAttrs, setUserAttrs] = useState(initialState);
  const windowWidth = FlexibleDesign.windowWidth;
  const [type, setType] = useState(0);
  const [userAgreement, setUserAgreement] = useState(false);
  const [countrySelector, setCountrySelector] = useState(false);
  const [serviceResponseLoading, setServiceResponseLoading] = useState(false);
  const [showSuccesModal, setShowSuccesModal] = useState(false);
  const [succesMessage, setSuccesMessage] = useState('');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showErrorModal, setShowerrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationState, setValidationState] = useState(
    initialValidationState,
  );
  const {navigation} = props;
  useEffect(() => {
    MMService.CustomerInfo()
      .then(res => {
        console.log('CustomerInFoRespo', res);
      })
      .catch(error => {
        console.log('CustormerInFoErro');
      });
  }, []);
  const data = Countries;

  // const customerInfo = () => {
  //   MMService.CustomerInfo()
  //     .then(res => {
  //       console.log('CustomerInfo', res);
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //       if (error.response && error.response.status === 400) {
  //         let errorVar = error.response.data;
  //         console.log(errorVar);
  //       }
  //     });
  // };

  const disabledControl = () => {
    if (type === 0) {
      if (
        validationState.validEmail &&
        validationState.validPassowrd &&
        validationState.validCode &&
        userAttrs.email !== null &&
        userAttrs.password !== null &&
        userAttrs.code !== null
      ) {
        return false;
      }
      return true;
    } else {
      if (
        validationState.validEmail &&
        validationState.validPassowrd &&
        validationState.validCode &&
        validationState.validName &&
        validationState.validSurname &&
        userAttrs.country !== null &&
        userAgreement &&
        userAttrs.email !== null &&
        userAttrs.password !== null &&
        userAttrs.code !== null &&
        userAttrs.name !== null &&
        userAttrs.surname !== null &&
        userAttrs.country !== null
      ) {
        return false;
      }
      return true;
    }
  };

  const otpServiceCall = () => {
    const requestBody = {
      email: userAttrs.email,
    };
    console.log('OTPSERVICECALL', requestBody, type);
    if (type === 0) {
      setShowInfoModal(false);
      MMService.LoginOtp(requestBody)
        .then(res => {
          if (res && res?.data && res?.status === 200) {
            setSuccesMessage(res?.data);
            setShowSuccesModal(true);
          }
        })
        .catch(error => {
          console.log('ERROR,', error);
          if (error.response && error.response.status === 400) {
            let errorVar = error.response.data;
            setShowerrorModal(true);
            setErrorMessage(errorVar?.errors[0].message);
            console.log('ERROR,', error.response.data);
          } else {
            setShowerrorModal(true);
            setErrorMessage(
              'Servisler şu an bakımdadır lütfen bir süre sonra tekrar deneyiniz.',
            );
          }
        });
    } else {
      setShowInfoModal(false);
      MMService.RegisterOtp(requestBody)
        .then(res => {
          if (res && res?.data && res?.status === 200) {
            setSuccesMessage(res?.data);
            setShowSuccesModal(true);
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            let errorVar = error.response.data;
            setShowerrorModal(true);
            setErrorMessage(errorVar?.errors[0].message);
          } else {
            setShowerrorModal(true);
            setErrorMessage(
              'Servisler şu an bakımdadır lütfen bir süre sonra tekrar deneyiniz.',
            );
          }
        });
    }
  };

  const LoginServiceCall = () => {
    const requestBody = {
      email: userAttrs.email,
      password: userAttrs.password,
      code: userAttrs.code,
    };
    MMService.Login(requestBody)
      .then(async res => {
        console.log('REPONSEAUTHTOKENLOGİN', res?.data?.authToken);
        await setDataToStorage('Login', res?.data?.authToken);
        if (res?.data?.isLogged) {
          navigation.navigate('SplashScreen', {
            type: 1,
          });
        }
      })
      .catch(error => {
        console.log('LOGİiNNERROR', error);
        if (error.response && error.response.status === 400) {
          let errorVar = error.response.data;
          setShowerrorModal(true);
          setErrorMessage(errorVar?.errors[0].message);
        } else {
          setShowerrorModal(true);
          setErrorMessage(
            'Servisler şu an bakımdadır lütfen bir süre sonra tekrar deneyiniz.',
          );
        }
      });
  };
  const RegisterServiceCall = () => {
    const requestBody = {
      name: userAttrs.name,
      surname: userAttrs.surname,
      email: userAttrs.email,
      password: userAttrs.password,
      code: userAttrs.code,
      country: userAttrs.country,
    };
    MMService.Register(requestBody)
      .then(res => {
        if (res && res?.data && res?.status === 201) {
          setSuccesMessage(res?.data?.message);
          setShowSuccesModal(true);
          setUserAttrs(initialState);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          let errorVar = error.response.data;
          setShowerrorModal(true);
          setErrorMessage(errorVar?.errors[0].message);
        } else {
          setShowerrorModal(true);
          setErrorMessage('Beklenmedik bir hata oluştu.');
        }
      });
  };

  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <MMSelectCountryAndLanguageModal
        modalShow={countrySelector}
        selectedCountry={userAttrs.country}
        closeModal={() => setCountrySelector(false)}
        selectAndClose={countryname => {
          setUserAttrs(prevState => ({
            ...prevState,
            country: countryname,
          }));
          setCountrySelector(false);
        }}
        data={data}
      />
      <SafeAreaView style={{flex: 1}}>
        <MMErrorModal
          modalShow={showErrorModal}
          text={errorMessage}
          closeModal={() => setShowerrorModal(false)}
        />
        <MMSuccesModal
          modalShow={showSuccesModal}
          text={succesMessage}
          closeModal={() => setShowSuccesModal(false)}
        />
        <MMFullScreenLoader isLoading={serviceResponseLoading} />
        <MMInfoModal
          text={`Email will send ${userAttrs.email} please control is it true or wrong?`}
          modalShow={showInfoModal}
          onPressButtonOne={() => setShowInfoModal(false)}
          onPressButtonSecond={() => otpServiceCall()}
          buttonOneText={'Düzenle'}
          buttonSecondText={'Gönder'}
        />
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={'padding'}
          showsVerticalScrollIndicator={false}>
          <ScrollView>
            <View
              style={{
                marginTop: windowWidth / 5 / 2,
                flex: 1,
                marginBottom: windowWidth / 5 / 2,
              }}>
              <View
                style={{
                  width: windowWidth / 1.5,
                  height: windowWidth / 3,
                  // backgroundColor: 'red',
                  alignSelf: 'center',
                  borderRadius: windowWidth / 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>LOGO WİLL BE HERE</Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <MMButton
                  onPress={() => {
                    setType(type === 1 ? 0 : 1);
                    disabledControl();
                    setUserAttrs(initialState);
                    setUserAgreement(false);
                    setValidationState(initialValidationState);
                  }}
                  text={type === 0 ? 'Sign Up' : 'Log In'}
                  textStyle={{
                    color: 'white',
                    letterSpacing: 0.7,
                    fontWeight: 'bold',
                  }}
                  containerStyle={{
                    width: 100,
                    borderWidth: 1,
                    alignItems: 'center',
                    paddingVertical: 2,
                    borderRadius: 6,
                    backgroundColor: '#7189ba',
                    borderColor: '#7189ba',
                  }}
                />
              </View>

              <MMTextInput
                ruleType={rulesEnums.email}
                placeHolder={'Email'}
                value={userAttrs.email}
                label={'Email'}
                onChangeValue={value =>
                  setUserAttrs(prevState => ({
                    ...prevState,
                    email: value,
                  }))
                }
                isValidRule={isValid =>
                  setValidationState(prevState => ({
                    ...prevState,
                    validEmail: isValid,
                  }))
                }
              />
              {type === 1 ? (
                <MMTextInput
                  ruleType={rulesEnums.name}
                  placeHolder={'Name'}
                  value={userAttrs.name}
                  label={'Name'}
                  onChangeValue={value =>
                    setUserAttrs(prevState => ({
                      ...prevState,
                      name: value,
                    }))
                  }
                  isValidRule={isValid =>
                    setValidationState(prevState => ({
                      ...prevState,
                      validName: isValid,
                    }))
                  }
                />
              ) : null}

              {type === 1 ? (
                <MMTextInput
                  ruleType={rulesEnums.surname}
                  placeHolder={'Surname'}
                  value={userAttrs.surname}
                  label={'Surname'}
                  onChangeValue={value =>
                    setUserAttrs(prevState => ({
                      ...prevState,
                      surname: value,
                    }))
                  }
                  isValidRule={isValid =>
                    setValidationState(prevState => ({
                      ...prevState,
                      validSurname: isValid,
                    }))
                  }
                />
              ) : null}
              <MMTextInput
                ruleType={rulesEnums.password}
                placeHolder={'Password'}
                value={userAttrs.password}
                secureText
                label={'Password'}
                onChangeValue={value =>
                  setUserAttrs(prevState => ({
                    ...prevState,
                    password: value,
                  }))
                }
                isValidRule={isValid =>
                  setValidationState(prevState => ({
                    ...prevState,
                    validPassowrd: isValid,
                  }))
                }
              />
              <MMTextInput
                ruleType={rulesEnums.code}
                disabled={!validationState.validEmail ? true : false}
                onPressRightIcon={() => setShowInfoModal(true)}
                RightIcon
                RightIconText={'Send'}
                placeHolder={'Code'}
                value={userAttrs.code}
                label={'Code'}
                onChangeValue={value =>
                  setUserAttrs(prevState => ({
                    ...prevState,
                    code: value,
                  }))
                }
                isValidRule={isValid =>
                  setValidationState(prevState => ({
                    ...prevState,
                    validCode: isValid,
                  }))
                }
              />

              {type === 1 ? (
                <MMSelector
                  label={'Country'}
                  placeHolder={userAttrs.country}
                  onPress={() => setCountrySelector(true)}
                />
              ) : null}

              {type === 1 ? (
                <View
                  style={{
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <MMButton
                    onPress={() => setUserAgreement(!userAgreement)}
                    containerStyle={{
                      width: 20,
                      height: 20,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: userAgreement ? '#238636' : null,
                      backgroundColor: userAgreement ? '#238636' : null,
                    }}
                  />
                  <View style={{marginLeft: 8, flexDirection: 'row'}}>
                    <MMButton
                      onPress={() => alert('Metin Sayfası')}
                      text={`Açık Rıza Metni`}
                      textStyle={{fontWeight: 'bold'}}
                    />
                    <Text>'ni okudum ve onayladım.</Text>
                  </View>
                </View>
              ) : null}

              <MMButton
                disabled={disabledControl()}
                onPress={
                  type === 1
                    ? () => RegisterServiceCall()
                    : () => LoginServiceCall()
                }
                text={type === 0 ? 'Log In' : 'Sign Up'}
                textStyle={{
                  textAlign: 'center',
                  marginVertical: 12,
                  fontWeight: 'bold',
                  fontSize: FlexibleDesign.fontSize,
                  color: 'white',
                  letterSpacing: 1,
                }}
                containerStyle={{
                  marginTop: 10,
                  backgroundColor: '#238636',
                  marginHorizontal: 10,
                  marginBottom: 8,
                  borderRadius: 6,
                }}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
