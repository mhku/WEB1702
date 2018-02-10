/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Component1 from 
'./app/component/component1/component1';

import Component２ from 
'./app/component/component２/component２';

export default class myapp extends Component {
  render() {
    return  <Component1 myName='zhangsan'></Component1>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//注册当前组件为根组件
AppRegistry.registerComponent('myapp', () => myapp);
