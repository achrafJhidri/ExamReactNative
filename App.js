import React from 'react';
import * as eva from '@eva-design/eva';
import { StatusBar } from 'react-native';
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as Colortheme } from './theme.json';
import { AppNavigator } from './src/navigation/navigation';
import { ThemeContext } from './theme-context'


export default () =>  {
  
  const [theme, setTheme] = React.useState('dark');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  
  
  return (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...Colortheme }}>
        <AppNavigator/>
        <StatusBar status="auto"/>
      </ApplicationProvider>
    </ThemeContext.Provider>
  </>
);}