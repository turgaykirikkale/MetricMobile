import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    return 'Save Storage Error';
  }
};

export const getDataFromStorage = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    return 'Get Data From Storage Error';
  }
};

export const removeDataFromStorage = async key => {
  try {
    await AsyncStorage.removeItem('Login');
    return true;
  } catch (e) {
    return false;
  }
};
