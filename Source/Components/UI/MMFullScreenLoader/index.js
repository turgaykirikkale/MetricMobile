import React from 'react';
import {View, ActivityIndicator, Modal, Text} from 'react-native';
import {styles} from './assets/styles';

const MMFullScreenLoader = props => {
  const {isLoading, color, text} = props;
  return (
    <Modal
      style={styles.modalContainer}
      animationType="none"
      transparent={true}
      visible={isLoading}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color={'orange'} />
        {text && (
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              marginTop: 18,
            }}>
            {text}
          </Text>
        )}
      </View>
    </Modal>
  );
};

export default MMFullScreenLoader;
