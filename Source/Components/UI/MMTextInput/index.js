import React, {useState} from 'react';
import {View, TextInput, Text, Platform} from 'react-native';
import MMButton from '../MMButton';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import {Validation} from '../../../Utils/Validation';
const MMTextInput = props => {
  const {
    label,
    onChangeValue,
    keyboardType,
    RightIcon,
    placeHolder,
    onPressRightIcon,
    value,
    RightIconText,
    disabled,
    secureText,
    ruleType,
    isValidRule,
  } = props;
  const testValidation = Validation(ruleType);
  console.log('tes', testValidation);
  const [borderColor, setBorderColor] = useState('#7189ba');
  const [secureTextControl, setSecureTextControl] = useState(secureText);
  const [showErrorIcon, setShowErrorIcon] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    testValidation[0].errorMessage,
  );
  const [isValid, setIsValid] = useState(false);
  const FlexibleDesign = FlexibleDesigns();

  const controlOnFocus = () => {
    setBorderColor('#238636');
    setShowErrorIcon(true);
  };

  const controlOnBlur = () => {
    setBorderColor('#7189ba');
    setShowErrorIcon(false);
    setShowErrorMessage(false);
  };

  const onChangeTextControl = changeValue => {
    onChangeValue && onChangeValue(changeValue);
    const testValidation1 = Validation(ruleType, changeValue);
    console.log('TesgtValidat', testValidation1);
    if (testValidation1[0].isValid) {
      setIsValid(true);
      setShowErrorMessage(false);
      setShowErrorIcon(true);
      isValidRule && isValidRule(true);
    } else {
      setShowErrorIcon(true);
      setIsValid(false);
      setErrorMessage(testValidation1[0].errorMessage);
      isValidRule && isValidRule(false);
    }
  };

  console.log('Value', value);
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          backgroundColor: '#e6e6e6',
          marginLeft: 25,
          marginTop: 3,
          borderRadius: 4,
          width: 100,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: '#7189ba',
            marginHorizontal: 10,
            letterSpacing: 1,
            borderRadius: 6,
            fontWeight: '500',
          }}>
          {label}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 6,
          paddingVertical: Platform.OS === 'ios' ? 11 : 1,
          borderColor: borderColor,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          value={value}
          secureTextEntry={secureTextControl}
          onFocus={() => controlOnFocus()}
          onBlur={() => controlOnBlur()}
          autoCapitalize="none"
          placeholderTextColor={'gray'}
          placeholder={placeHolder}
          keyboardType={keyboardType}
          style={{
            fontSize: FlexibleDesign.fontSize,
            color: 'black',
            fontWeight: '600',
            letterSpacing: 1,
            flex: 1,
            marginVertical: Platform.OS === 'ios' ? 0 : -5,
          }}
          onChangeText={changeValue => onChangeTextControl(changeValue)}
        />
        {RightIcon ? (
          <MMButton
            containerStyle={{marginRight: 5}}
            disabled={disabled}
            onPress={() => onPressRightIcon && onPressRightIcon()}
            text={RightIconText}
            textStyle={{
              color: 'orange',
              fontWeight: 'bold',
              letterSpacing: 0.8,
              fontSize: FlexibleDesign.fontSize,
            }}
          />
        ) : null}

        {secureText ? (
          <MMButton
            containerStyle={{marginRight: 5}}
            // disabled={disabled}
            iconName={!secureTextControl ? 'eye' : 'eye-slash'}
            iconSize={20}
            iconColor={'#7189ba'}
            onPress={() => setSecureTextControl(!secureTextControl)}
          />
        ) : null}

        {showErrorIcon ? (
          <MMButton
            containerStyle={{marginRight: 5}}
            disabled={(!isValid && value) || value === '' ? false : true}
            onPress={() => setShowErrorMessage(!showErrorMessage)}
            iconName={isValid && value ? 'check' : 'exclamation-triangle'}
            iconSize={16}
            iconColor={isValid && value ? '#238636' : '#c64141'}
          />
        ) : null}
      </View>
      {showErrorMessage ? (
        <View style={{marginVertical: 5, marginHorizontal: 20}}>
          <Text style={{fontSize: 10, color: '#c64141'}}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  );
};
export default MMTextInput;
