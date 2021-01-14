import React, {useContext} from 'react';
import { SafeAreaView } from 'react-native';
import {  Layout,Button ,TopNavigationAction, TopNavigation, Divider} from '@ui-kitten/components';
import {Icons} from "../assets/icons"
import { ThemeContext } from "../../theme-context"

export const HomeScreen = ({ navigation }) => {

    const themeContext = useContext(ThemeContext);

    const navigateDetails = () => {
        navigation.navigate('Details');
      };

    const renderMenuAction = () => (
    <TopNavigationAction icon={Icons.sunIcon} onPress={themeContext.toggleTheme}/>
    );
    return (
    <SafeAreaView style={{flex :1} }>
        <TopNavigation title='MyApp' alignment='center' accessoryRight={renderMenuAction}/>
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={navigateDetails}>go to Details Sceen !</Button>
        </Layout>
    </SafeAreaView>
    );
}