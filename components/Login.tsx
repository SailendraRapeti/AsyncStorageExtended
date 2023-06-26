import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Iprops {
  navigation?: any;
}

interface Istate {
  name: string;
  password: string;
}

export class Login extends Component<Iprops, Istate> {
  state = {
    name: '',
    password: '',
  };
  onName = (Text: any) => {
    this.setState({name: Text});
  };
  onPassword = (Text: any) => {
    this.setState({password: Text});
  };
  signup = async () => {
    const getDetails = await AsyncStorage.getItem('userDetails');
    const getParsedData = JSON.parse(getDetails);
    console.log(getParsedData);
    // this.props.navigation.navigate('Signup');
    const {name} = this.state;

    if (getParsedData === null) {
      this.props.navigation.navigate('Signup');
    } else if (getParsedData[0].name === name) {
      this.props.navigation.navigate('Home');
    }
  };

  //   async componentDidMount() {
  //     const getDetails = await AsyncStorage.getItem('userDetails');
  //     console.log('component', getDetails);
  //   }

  //   getData = async () => {
  //     try {
  //       co  this.props.navinst value = await AsyncStorage.getItem('userDetails');
  //       console.log(value);
  //       if (value !== null) {
  //         // value previously stored
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };

//   async componentDidmount() {
//     const getDetails = await AsyncStorage.getItem('userDetails');
  
//     console.log('login', getDetails);
//     if (getDetails !== null) {
//       this.props.navigation.navigate('Home');
//     }
//   }

  render() {
    return (
      <View style={style.container}>
        <Text
          style={{
            marginBottom: 100,
            fontWeight: 'bold',
            fontSize: 28,
            color: 'white',
          }}>
          Login
        </Text>
        <View style={style.card}>
          <View>
            <Text>Name</Text>
            <TextInput
              onChangeText={this.onName}
              style={style.input}
              placeholder="enter ur name "
            />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              onChangeText={this.onPassword}
              style={style.input}
              placeholder="enter ur password"
            />
          </View>
          <Text onPress={this.signup} style={{marginTop: 40}}>
            Login
          </Text>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    height: 250,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 2,
    borderColor: 'black',
  },
});
export default Login;
