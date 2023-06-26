import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Iprops {
  navigation?: any;
}

interface Istate {
  name: string;
  password: string;
  array: any[];
}

export class Signup extends Component<Iprops, Istate> {
  state = {
    name: '',
    password: '',
    array: [],
  };

  async componentDidMount() {
    const getDetails = await AsyncStorage.getItem('userDetails');
    // console.log('component', getDetails);
  }
  onName = (Text: any) => {
    this.setState({name: Text});
  };
  onPassword = (Text: any) => {
    this.setState({password: Text});
  };

  storeData = async () => {
    try {
      const details = JSON.stringify(this.state.array);
      //   console.log(details);

      await AsyncStorage.setItem('userDetails', details);

      //   const getDetails = await AsyncStorage.getItem('userDetails');
      //   console.log(getDetails);
    } catch (e) {
      // saving error
    }
    this.props.navigation.navigate('Login');
  };

  onLogin = () => {
    const {name, password, array} = this.state;
    const obj = {
      id: new Date(),
      password,
      name,
    };
    this.setState({array: [...array, obj]}, () => {
      this.storeData();
    });
  };
  //   getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('userDetails');
  //       console.log(value);
  //       if (value !== null) {
  //         // value previously stored
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };

  //   componentDidmount() {
  //     this.getData();
  //   }

  render() {
    const {array} = this.state;
    // console.log(array);
    return (
      <View style={style.container}>
        <Text
          style={{
            marginBottom: 100,
            fontWeight: 'bold',
            fontSize: 28,
            color: 'white',
          }}>
          Signup
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
          <Text onPress={this.onLogin} style={{marginTop: 40}}>
            Sign Up
          </Text>
          {/* <Text onPress={this.storeData} style={{marginTop: 40}}>
            Login{' '}
          </Text> */}
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
export default Signup;
