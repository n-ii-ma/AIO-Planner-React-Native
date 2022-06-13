import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const IsLoading = () => {
  return (
    <View style={{justifyContent: 'center', marginBottom: 25}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default IsLoading;
