import React from 'react';
import { SafeAreaView } from 'react-native';
import {  Layout,Button } from '@ui-kitten/components';



export const FavoritSceen = () => {
    return (
    <SafeAreaView>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button>go to HomeScreen</Button>
        </Layout>
    </SafeAreaView>
    );
}