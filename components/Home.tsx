import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Iprops {
  navigation?: any;
}

export class Home extends Component<Iprops> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home</Text>
        <TouchableOpacity
          style={{
            borderColor: 'red',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
          onPress={async () => {
            await AsyncStorage.removeItem('userDetails');
            this.props.navigation.navigate('Login');
          }}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
