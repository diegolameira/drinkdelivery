import React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from 'react-native';

const Touchable =
  Platform.OS == 'android' ? TouchableNativeFeedback : TouchableOpacity;

export default (props: any) => (
  <Touchable
    {...props}
    background={
      Platform.OS === 'android'
        ? TouchableNativeFeedback.SelectableBackground()
        : ''
    }
  >
    <View>{props.children}</View>
  </Touchable>
);
