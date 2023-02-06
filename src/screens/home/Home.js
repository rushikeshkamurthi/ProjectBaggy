import { View, Text, FlatList, Dimensions, StyleSheet, Image, LogBox } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Store from './Product';
import Landing from './Landing';
const Home = () => {

  const navigation = useNavigation();
  return (
  <Landing/>
  )
}

export default Home;

