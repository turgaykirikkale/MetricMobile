import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import MMUserInfoShower from '../../Components/Composite/MMUserInfoShower';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import _ from 'lodash';
const AccountScreen = props => {
  const {navigation} = props;
  const [userInfo, setUserInfo] = useState([
    {name: 'Name', value: 'Turgay'},
    {name: 'Surname', value: 'Kirikkale'},
    {name: 'Country', value: 'Turkey'},
    {name: 'Phone', value: '+905332013068'},
    {name: 'Email', value: 'turgaykirikkale@hotmail.com'},
  ]);
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView>
        <MMStandarHeader navigation={navigation} backButton />

        {_.map(userInfo, item => {
          return <MMUserInfoShower name={item.name} value={item.value} />;
        })}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountScreen;
