import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Router } from './src/routes/app.routes';
import { FontProvider } from './src/context/font';
import { defaultTheme } from './src/global/styles/theme';

export default function App() {
  return (
    <FontProvider>
      <ThemeProvider theme={defaultTheme}>
      <StatusBar
        backgroundColor = 'transparent'
        translucent 
        style="light" 
      />
        <Router/>
      </ThemeProvider>
    </FontProvider>

  );
}

