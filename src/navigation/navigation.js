import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../components/home.component';
import { DetailsScreen } from '../components/details.component';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SearchSceen } from '../components/search.component';
import { FavoritSceen } from '../components/favorits.component';
import { BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {Icons} from "../assets/icons"


const { Navigator, Screen } = createBottomTabNavigator();
const stack = createStackNavigator();

const HomeNavigator = () => (
  <stack.Navigator headerMode='none'>
    <stack.Screen name='Home' component={HomeScreen}/>
    <stack.Screen name='Details' component={DetailsScreen}/>
  </stack.Navigator>
);
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home' icon={Icons.HomeIcon}/>
    <BottomNavigationTab title='Search' icon={Icons.StarIcon}/>
    <BottomNavigationTab title='Favorits' icon={Icons.StarIcon}/>

  </BottomNavigation>
);
const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeNavigator}/>
    <Screen name='Search' component={SearchSceen}/>
    <Screen name='Favorit' component={FavoritSceen}/>
  </Navigator>
);


export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
