import React from 'react';

import { View } from 'react-native';

function ScreenContainer(props) {
  return (
    <View 
      style={{
        padding: 24,
        fontFamily: ['Poppins', 'Open Sans']
      }}
      {...props}
    />
  )
}

export default ScreenContainer;