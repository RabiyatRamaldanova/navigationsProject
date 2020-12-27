import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IMAGEHAMBURGER} from '../image/index';
import styles from '../styles/styles';

const Tab = createBottomTabNavigator();

function Profile({navigation}) {
    return(
        <View style={styles.barView}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={IMAGEHAMBURGER} style={styles.imageHamburger}/>
        </TouchableOpacity>
        </View>
        </View>
    )
}

function Settings({navigation}) {
    return(
        <View style={styles.barView}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={IMAGEHAMBURGER} style={styles.imageHamburger}/>
        </TouchableOpacity>
        </View>
        </View>
    )    
}
export const TabNavigation = () => {
        return(
            <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 20, marginBottom: 10}}}>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        )
}