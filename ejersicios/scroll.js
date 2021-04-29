import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const App = () => (
  <ScrollView>
  <Text style={{ fontSize: 96 }}> Hola Soy Cristiandres </Text>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Text style={{fontSize: 96}}> y estos son mis primeros pasos </Text>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Text style={{fontSize: 96}}> Sere el mejor en reat </Text>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Image source = {logo}/>
  <Text style={{fontSize: 96}}> Y voy a crear la mejor apicacion </Text>
  </ScrollView>
);

export default App;
