import React from 'react';
import { SafeAreaView } from 'react-native';
import { TopNavigation,TopNavigationAction, Layout,Text } from '@ui-kitten/components';
import {Icons} from "../assets/icons"


export const DetailsScreen = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
      };
    
      const BackAction = () => (
        <TopNavigationAction icon={Icons.BackIcon} onPress={navigateBack}/>
      );

    return (
    <SafeAreaView  style={{flex :1} }>
         <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
        <Text category="h1">go to home Screeen !</Text>
        </Layout>
    </SafeAreaView>
    );
}