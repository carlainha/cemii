import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8d4',
    justifyContent: 'center',
  },
});
