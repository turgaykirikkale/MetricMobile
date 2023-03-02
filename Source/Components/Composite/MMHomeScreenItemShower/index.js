import React, {useState} from 'react';
import {View} from 'react-native';
import MMComboCard from '../../UI/MMComboCard';
import MMNFTImageShower from '../MMNFTImageShower';
import {NFTImageComponentControl} from '../../../Utils/Enums';
import {AttributesShowerTypes} from '../../../Utils/Enums';
import MMNFTAttributesShower from '../MMNFTAttributesShower';
const MMHomeScreenItemShower = props => {
  const {data, selectedItem} = props;
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [item, setItem] = useState(data[selectedItemIndex]);

  const setNextControl = () => {
    if (data.length - 1 > selectedItemIndex) {
      setSelectedItemIndex(selectedItemIndex + 1);
      setItem(data[selectedItemIndex + 1]);
      selectedItem(data[selectedItemIndex + 1]);
    } else if (data.length - 1 === selectedItemIndex) {
      setSelectedItemIndex(0);
      setItem(data[0]);
      selectedItem(data[0]);
    }
  };
  const setBackControl = () => {
    if (selectedItemIndex >= 1) {
      setSelectedItemIndex(selectedItemIndex - 1);
      setItem(data[selectedItemIndex - 1]);
      selectedItem(data[selectedItemIndex - 1]);
    } else if (selectedItemIndex === 0) {
      setSelectedItemIndex(data.length - 1);
      setItem(data[data.length - 1]);
      selectedItem(data[data.length - 1]);
    }
  };

  console.log('selectedItemIndex', selectedItemIndex);
  console.log('SelectedItem', item);
  return (
    <View>
      <MMNFTImageShower
        type={NFTImageComponentControl.home}
        item={item}
        setBackControl={() => setBackControl()}
        setNextControl={() => setNextControl()}
      />

      <View>
        <MMComboCard />
      </View>

      <View>
        <MMNFTAttributesShower
          data={item}
          attributesShowerType={AttributesShowerTypes.home}
        />
      </View>
    </View>
  );
};

export default MMHomeScreenItemShower;
