import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Inicial } from './src/screens/Inicial/Inicial';
import { Entrar } from './src/screens/Entrar/Entrat';

export default function App() {
  return (
    <View style={styles.container}>
      <Entrar/>
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
