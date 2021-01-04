import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AllNavigations from '../filmSearcher/navigations/allNavigatios';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IMAGEHAMBURGER} from '../image/index'
import styles from '../styles/styles';

function Entertainment({navigation}) {
    return(
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('Film')} style={styles.menuContainers}>
            <Text style={styles.menuContainersText}> 
                Film Searcher
            </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const Stack= createStackNavigator();

  export const StackNavigationApi = ({navigation}) => {
  
    return(
        <Stack.Navigator>   
          <Stack.Screen name="Entertainment" component={Entertainment} options={{
          title: 'Entertainment',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontStyle: 'italic',
          },
          headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Image source={IMAGEHAMBURGER} style={styles.imageHamburger}/>
              </TouchableOpacity>
          ),
    }}/>
                <Stack.Screen name="Film" component={AllNavigations} options={{
            title: 'Film Searcher',headerStyle: {
            backgroundColor: 'white',
            elevation: 10
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontStyle: 'italic',
          }}}
          />
                </Stack.Navigator>
  );
    
}