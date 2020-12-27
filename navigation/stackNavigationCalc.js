import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Calc from '../calculator/Calc';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IMAGEHAMBURGER} from '../image/index';
import styles from '../styles/styles';


function CalcButton({navigation}) {
    return(
      <View style={{flex: 1}}>
        <TouchableOpacity  onPress={() => navigation.navigate('Calculator')} style={styles.menuContainers}>
            <Text style={styles.menuContainersText}>
                Calculator
            </Text>
        </TouchableOpacity>
      </View>
    );
}

const Stack = createStackNavigator();

export const StackNavigationCalc = ({navigation}) => {

        return(
                <Stack.Navigator>   
                <Stack.Screen name="Tools" component={CalcButton} options={{ title: 'Tools',
          headerStyle: {
            backgroundColor: 'white',
            elevation: 10
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontStyle: 'italic',
          },
          headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Image source={IMAGEHAMBURGER} style={styles.imageHamburger}/>
              </TouchableOpacity>
          ),}}/>
                <Stack.Screen name="Calculator" component={Calc} options={{
            title: 'Film Searcher',headerStyle: {
            backgroundColor: 'white',
            elevation: 10
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontStyle: 'italic',
          }}
          }/>
                </Stack.Navigator>
        );
    
}
