import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function BookOwnedScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Books Owned Screen</Text>
        <Button
            title="Add a book"
            onPress={() => navigation.navigate('AddBook')}
        />
      </View>
    );
}


