import React from 'react';

import { Text } from 'react-native';

function ScreenTitle(props) {
  return (<Text
    style={{
      fontSize: 24,
      fontFamily: "Poppins_400Regular"
    }}
    {...props}
  />);
}

export default ScreenTitle;