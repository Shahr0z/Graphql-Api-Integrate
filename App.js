import { SafeAreaView, LogBox } from 'react-native';
import React from 'react';
import Home from './src/pages/Home';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Home />
        </SafeAreaView>
    )
}
export default App;