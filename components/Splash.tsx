import {Text, View} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
  navigation?: any;
}

export class Splash extends Component<IProps> {
  componentDidMount() {
    setTimeout(async () => {
      const getDetails = await AsyncStorage.getItem('userDetails');

      console.log('login', getDetails);
      if (getDetails !== null) {
        this.props.navigation.navigate('Home');
      } else {
        this.props.navigation.navigate('Login');
      }
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red', fontSize: 34}}>Splash</Text>
      </View>
    );
  }
}

export default Splash;
