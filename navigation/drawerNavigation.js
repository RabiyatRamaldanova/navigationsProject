import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WebView} from 'react-native-webview';
import {StackNavigationCalc} from './stackNavigationCalc';
import {StackNavigationApi} from './stackNavigationFilm';
import {TabNavigation} from './tabNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';
import {IMAGEHAMBURGER} from '../image/index';
import styles from '../styles/styles';

const News = ({navigation}) => {
      return(
        <View style={styles.barView}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={IMAGEHAMBURGER} style={styles.imageHamburger}/>
        </TouchableOpacity>
        <Text style={styles.newsBarText}> 
          News
        </Text>
        </View>
        
           <WebView style={{flex:1}} source={{
              uri: 'https://www.bbc.com/news'
          }}
          />
         </View>
      )
}

const Drawer = createDrawerNavigator();

class DrawerNavigation extends Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator drawerContentOptions={{
          activeTintColor: 'red',
          labelStyle: {fontSize: 20}
        }}>
          <Drawer.Screen name="News" component={News} />
          <Drawer.Screen name="Entertainment" component={StackNavigationApi}/>
          <Drawer.Screen name="Tools" component={StackNavigationCalc}/>
          <Drawer.Screen name="AboutMe" component={TabNavigation}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
export default DrawerNavigation;