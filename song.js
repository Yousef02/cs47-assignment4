import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    Pressable,
  } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


const MyWebComponent = (navigation) => {
    return (
        <WebView source={{ uri: 'https://reactnative.dev/' }}/>
    );
  };

export default MyWebComponent;