import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ListProfil from './AccueilScreen/ListProfil';
import Groups from './AccueilScreen/Groups';
import MonCompte from './AccueilScreen/MonCompte';
const Tab = createMaterialBottomTabNavigator();

export default function Acceuil() {
  return (
    <Tab.Navigator activeColor="#4285f4" inactiveColor="#9e9e9e" >
      <Tab.Screen name="listprofils" component={ListProfil}></Tab.Screen>
      <Tab.Screen name="groups" component={Groups}></Tab.Screen>
      <Tab.Screen name="moncompte" component={MonCompte}></Tab.Screen>
    </Tab.Navigator>
  )
}